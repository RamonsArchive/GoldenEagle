#!/bin/bash

# HEIC to JPG Converter Script - Concrete Folder Specific
# This script converts all HEIC files to JPG in the Concrete folder while preserving the original file structure

echo "Starting HEIC to JPG conversion for Concrete folder..."

# Check if ImageMagick is installed
if ! command -v magick &> /dev/null && ! command -v convert &> /dev/null; then
    echo "ImageMagick is not installed. Please install it first:"
    echo "macOS: brew install imagemagick"
    echo "Ubuntu/Debian: sudo apt-get install imagemagick"
    echo "CentOS/RHEL: sudo yum install imagemagick"
    exit 1
fi

# Set quality for JPG conversion (85 is a good balance between quality and file size)
QUALITY=85

# Counter for converted files
converted_count=0

# Define the target directory
TARGET_DIR="public/assets/Concrete"

# Check if the target directory exists
if [ ! -d "$TARGET_DIR" ]; then
    echo "❌ Could not find Concrete folder at: $TARGET_DIR"
    echo "Available directories in public/assets/:"
    ls -la "public/assets/" 2>/dev/null || echo "public/assets/ directory not found"
    echo ""
    echo "💡 It looks like your folder might have a trailing space. Try running:"
    echo "mv \"public/assets/Concrete \" \"public/assets/Concrete\""
    exit 1
fi

echo "Converting HEIC files in: $TARGET_DIR"
echo "Searching for HEIC files..."

# Find all HEIC files (case insensitive) in the Concrete directory and subdirectories
find "$TARGET_DIR" -type f \( -iname "*.heic" -o -iname "*.HEIC" \) | while read -r file; do
    # Get directory and filename without extension
    dir=$(dirname "$file")
    filename=$(basename "$file" | sed 's/\.[^.]*$//')
    
    # Create output filename
    output="$dir/$filename.jpg"
    
    echo "Converting: $file -> $output"
    
    # Convert HEIC to JPG
    if command -v magick &> /dev/null; then
        magick "$file" -quality $QUALITY "$output"
    else
        convert "$file" -quality $QUALITY "$output"
    fi
    
    # Check if conversion was successful
    if [ $? -eq 0 ]; then
        echo "✅ Successfully converted: $filename"
        ((converted_count++))
        # Optional: Remove original HEIC file (uncomment the line below if you want to delete originals)
        # rm "$file"
    else
        echo "❌ Failed to convert: $file"
    fi
done

echo ""
echo "Conversion complete! Converted $converted_count files from the Concrete folder."
echo ""
echo "Note: Original HEIC files are preserved. To remove them, uncomment the 'rm' line in the script."
echo "Next steps:"
echo "1. Update your git repository to track the new JPG files"
echo "2. Add *.heic and *.HEIC to your .gitignore file"
echo "3. Test your images in the Next.js app"

# Optional: Show what was found
echo ""
echo "Folder contents after conversion:"
ls -la "$TARGET_DIR"