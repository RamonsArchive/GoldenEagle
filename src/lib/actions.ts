// Server Action for Image Upload (lib/actions/upload.ts)
'use server';

import { prisma } from './prisma';
import { s3Client } from './s3';
import { revalidatePath } from 'next/cache';
import { Project_Type } from './globalTypes';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { parseServerActionResponse } from './utils';
import { glob } from 'glob';
import fs from 'fs';
import path from 'path';
import { useRateLimiter } from './rateLimiter';
import { cookies } from "next/headers";
import { heroImages, aboutImages } from '@/constants';

export async function uploadImagesToS3(formData: FormData) {
  try {
    const files = formData.getAll('images') as File[];
    const category = formData.get('category') as keyof typeof Project_Type;
    const isBackdrop = formData.get('isBackdrop') === 'on'; // HTML checkbox returns 'on' when checked
    
    if (!files || files.length === 0) {
      return parseServerActionResponse({
        status: "ERROR",
        error: 'No files selected'
      });
    }

    const uploadResults = [];

    // Upload each file
    for (const file of files) {
      if (file.size === 0) continue; // Skip empty files
      
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        return parseServerActionResponse({
            status: "ERROR",
            error: `Invalid file type: ${file.name}. Only JPEG, PNG, and WebP allowed.`
        });
      }

      // Upload to S3
      const uploadResult = await uploadToS3(file, isBackdrop ? 'backdrops' : 'gallery');

      // Save to database
      const image = await prisma.image.create({
        data: {
          url: uploadResult.url,
          filename: file.name,
          alt: `${category.toLowerCase().replace('_', ' ')} image`,
          size: uploadResult.size,
          mimeType: uploadResult.mimeType,
          category: category,
          isBackdrop: isBackdrop,
          s3Key: uploadResult.key,
        }
      });

      uploadResults.push(image);
    }

    // Revalidate the gallery page to show new images
    revalidatePath('/admin/gallery');
    revalidatePath('/gallery');

    return parseServerActionResponse({
        status: "SUCCESS",
        message: `Successfully uploaded ${uploadResults.length} images`,
        images: uploadResults 
    });

  } catch (error) {
    console.error('Upload error:', error);
        return parseServerActionResponse({
        status: "ERROR",
        error: 'Upload failed. Please try again.'
    });
  }
}

export async function uploadToS3(file: File, folder: string = 'gallery') {
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${folder}/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    
    const uploadParams = {
      Bucket: process.env.AWS_S3_BUCKET_NAME!,
      Key: fileName,
      Body: fileBuffer,
      ContentType: file.type,
    };
  
    try {
      const command = new PutObjectCommand(uploadParams);
      await s3Client.send(command);
      
      // Return the public URL
      const publicUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
      
      return {
        url: publicUrl,
        key: fileName,
        size: file.size,
        mimeType: file.type,
      };
    } catch (error) {
      console.error('Error uploading to S3:', error);
      throw new Error('Failed to upload file');
    }
  }

// Function to upload a file from filesystem to S3
async function uploadFileToS3(filePath: string, folder: string = 'gallery') {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    console.log("This is the file path", filePath);
    const fileName = `${folder}/${Date.now()}-${path.basename(filePath).replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    console.log("This is the file name", fileName);
    
    // Get file stats for size
    const stats = fs.statSync(filePath);
    
    // Determine mime type from file extension
    const ext = path.extname(filePath).toLowerCase();
    let mimeType = 'image/jpeg';
    if (ext === '.png') mimeType = 'image/png';
    if (ext === '.webp') mimeType = 'image/webp';
    
    const uploadParams = {
      Bucket: process.env.AWS_S3_BUCKET_NAME!,
      Key: fileName,
      Body: fileBuffer,
      ContentType: mimeType,
    };

    console.log("This is the upload params", uploadParams);

    const command = new PutObjectCommand(uploadParams);
    console.log("This is the command", command);
    await s3Client.send(command);
    
    // Return the public URL
    const publicUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
    
    return {
      url: publicUrl,
      key: fileName,
      size: stats.size,
      mimeType: mimeType,
    };
  } catch (error) {
    console.error('Error uploading file to S3:', error);
    throw new Error(`Failed to upload file: ${filePath}`);
  }
}
  
// For public S3 bucket - you can remove this function entirely
// Gallery websites need permanent, public URLs for images to load properly

export const uploadAllImagesToS3 = async (
  includePaths: string[], 
  excludePaths: string[] = [],
  isBackdrop: boolean,
  category: string = "OTHER"
) => {
  try {
    let allImages: string[] = [];
    
    // Get all files from include paths
    for (const pattern of includePaths) {
      const files = await glob(pattern);
      allImages = allImages.concat(files);
    }
    
    // Remove duplicates
    allImages = [...new Set(allImages)];
    
    // Filter out excluded paths
    if (excludePaths.length > 0) {
      const excludeFiles: string[] = [];
      for (const pattern of excludePaths) {
        const files = await glob(pattern);
        excludeFiles.push(...files);
      }
      
      allImages = allImages.filter(image => !excludeFiles.includes(image));
    }
    
    if (allImages.length === 0) {
      return parseServerActionResponse({
        status: "ERROR",
        error: "No images found matching the specified patterns"
      });
    }

    const uploadResults = [];
    const errors = [];

    for (const imagePath of allImages) {
      try {
        // Check if file exists
        if (!fs.existsSync(imagePath)) {
          errors.push(`File not found: ${imagePath}`);
          continue;
        }

        // Upload to S3
        const folder = isBackdrop ? 'backdrops' : 'gallery';
        const uploadResult = await uploadFileToS3(imagePath, folder);
        console.log(uploadResult);
        
        // Save to database
        const image = await prisma.image.create({
          data: {
            url: uploadResult.url,
            filename: path.basename(imagePath),
            alt: `Gallery image`,
            size: uploadResult.size,
            mimeType: uploadResult.mimeType,
            category: category as keyof typeof Project_Type,
            isBackdrop: isBackdrop,
            s3Key: uploadResult.key,
          }
        });

        uploadResults.push(image);
      } catch (error) {
        console.error(`Error uploading ${imagePath}:`, error);
        errors.push(`Failed to upload: ${imagePath}`);
      }
    }

    // Revalidate the gallery page to show new images
    revalidatePath('/admin/gallery');
    revalidatePath('/gallery');

    let message = `Successfully uploaded ${uploadResults.length} images`;
    if (errors.length > 0) {
      message += `. ${errors.length} files failed to upload.`;
    }

    return parseServerActionResponse({
      status: uploadResults.length > 0 ? "SUCCESS" : "ERROR",
      message: uploadResults.length > 0 ? message : "No images were uploaded",
      error: errors.length > 0 ? errors.join(', ') : "",
      images: uploadResults
    });

  } catch (error) {
    console.error('Path upload error:', error);
    return parseServerActionResponse({
      status: "ERROR",
      message: "",
      error: "Failed to upload images from path"
    });
  }
}

// export const fetchHeroData = async () => {
//   const isRateLimited = await useRateLimiter("fetchHeroData");
//   if (isRateLimited.status === "ERROR") {
//     return isRateLimited;
//   }

//   const heroData = await prisma.hero.findUnique({
//     where: { id: 1 },
//   });
//   return parseServerActionResponse({
// }

export const getUserId = async () => { 
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;
  return userId;
}

export const fetchHeroData = async () => {
  try {

    const isRateLimited = await useRateLimiter("fetchHeroData");
    if (isRateLimited.status === "ERROR") {
      return isRateLimited;
    }

    const heorGallery = await prisma.image.findMany({
      where: {
        s3Key: {
          in: heroImages.gallery
        }
      },
      select: {
        url: true,
        alt: true,
        s3Key: true,
        isBackdrop: true,
        category: true,
      }
    })
    if (!heorGallery) {
      return parseServerActionResponse({
        status: "ERROR",
        error: "No hero gallery images found"
      });
    }

    const heroBackdrop = await prisma.image.findFirst({
      where: {
        s3Key: {
          in: heroImages.backdrops
        }
      },
      select: {
        url: true,
        alt: true,
        s3Key: true,
        isBackdrop: true,
        category: true,
      }
    })

    if (!heroBackdrop) {
      return parseServerActionResponse({
        status: "ERROR",
        error: "No hero backdrop image found"
      });
    }

    return parseServerActionResponse({
      status: "SUCCESS",
      error: "",
      data: {
        heroGallery: heorGallery,
        heroBackdrop: heroBackdrop,
      }
    })
  } catch (error) {
    console.error("Error fetching hero data", error);
    return parseServerActionResponse({
      status: "ERROR",
      error: "Failed to fetch hero data"
    });
  }
}

export const fetchAboutData = async () => {
  try {
    const isRateLimited = await useRateLimiter("fetchAboutData");
    if (isRateLimited.status === "ERROR") {
      return isRateLimited;
    }

    const aboutGallery = await prisma.image.findMany({
      where: {
        s3Key: {
          in: aboutImages.gallery
        }
      },
      select: {
        url: true,
        alt: true,
        s3Key: true,
        isBackdrop: true,
        category: true,
        width: true,
        height: true,
      }
    })

    console.log("This is the about gallery", aboutGallery);

    if (!aboutGallery) {
      return parseServerActionResponse({
        status: "ERROR",
        error: "No about gallery images found"
      });
    }

    const aboutBackdrop = await prisma.image.findFirst({
      where: {
        s3Key: {
          in: aboutImages.backdrops
        }
      },
      select: {
        url: true,
        alt: true,
        s3Key: true,
        isBackdrop: true,
        category: true,
      }
    })

    console.log("This is the about backdrop", aboutBackdrop);

    if (!aboutBackdrop) {
      return parseServerActionResponse({
        status: "ERROR",
        error: "No about backdrop image found"
      });
    }

    return parseServerActionResponse({
      status: "SUCCESS",
      error: "",
      data: {
        aboutGallery: aboutGallery,
        aboutBackdrop: aboutBackdrop
      }
    })

  } catch (error) {
    console.error("Error fetching about data", error);
    return parseServerActionResponse({
      status: "ERROR",
      error: "Failed to fetch about data"
    });
  }
}