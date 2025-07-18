"use client";
import { useState } from "react";
import { uploadAllImagesToS3, uploadImagesToS3 } from "@/lib/actions";
import { Project_Type } from "@/lib/globalTypes";
import { toast } from "sonner";
import { preconnect } from "react-dom";

export default function ImageUploadForm() {
  const [isPending, setIsPending] = useState(false);
  const [isPathUpload, setIsPathUpload] = useState(false);
  const [isBackdrop, setIsBackdrop] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [category, setCategory] = useState<string>("");

  const handleSubmit = async (formData: FormData) => {
    setIsPending(true);
    setMessage(null);

    try {
      const result = await uploadImagesToS3(formData);

      if (result.status === "ERROR") {
        setMessage({ type: "error", text: result.error });
        toast.error("ERROR", {
          description: result.error,
        });
      } else {
        setMessage({
          type: "success",
          text: result.message || "Upload successful!",
        });
        toast.success("SUCCESS", {
          description: result.message,
        });
        // Reset form
        const form = document.getElementById("upload-form") as HTMLFormElement;
        form?.reset();
      }
    } catch (error) {
      const errorMessage = "Failed to upload images";
      setMessage({ type: "error", text: errorMessage });
      toast.error("ERROR", {
        description: errorMessage,
      });
    } finally {
      setIsPending(false);
    }
  };

  const handlePathUpload = async (category: string) => {
    setIsPending(true);
    setMessage(null);

    try {
      // You can customize these paths based on your needs
      const includePaths = [
        //"public/assets/BathRoomRemodel/**/*.jpg",
        //"public/assets/Concrete/**/*.jpg",
        //"public/assets/Fences/**/*.jpg",
        //"public/assets/Flooring/**/*.jpg",
        // "public/assets/KitchenRemodel/**/*.jpg",
        //"public/assets/Patio/**/*.jpg",
        //"public/assets/Painting/**/*.jpg",
        //"public/assets/Roofing/**/*.jpg",
        //"public/assets/Windows/**/*.jpg",
        // "public/assets/Other/**/*.jpg",
        "public/assets/CustomHome/**/*.jpg", // custom home images
        //"public/assets/Backdrops/**/*",
      ];

      //const excludePaths = ["public/assets/Backdrops/**/*"];
      const excludePaths: string[] = [];

      const result = await uploadAllImagesToS3(
        includePaths,
        excludePaths,
        isBackdrop,
        category
      );

      if (result.status === "ERROR") {
        setMessage({ type: "error", text: result.error });
        toast.error("ERROR", {
          description: result.error,
        });
      } else {
        setMessage({
          type: "success",
          text: result.message || "Path upload successful!",
        });
        toast.success("SUCCESS", {
          description: result.message,
        });
      }
    } catch (error) {
      const errorMessage = "Failed to upload images from path";
      setMessage({ type: "error", text: errorMessage });
      toast.error("ERROR", {
        description: errorMessage,
      });
    } finally {
      setIsPending(false);
    }
  };

  const createPathCategorySelect = () => {
    return (
      <select
        id="category"
        name="category"
        value={category}
        required
        className="w-full p-2 border bg-slate-100 border-gray-300 rounded-md cursor-pointer"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select category...</option>
        <option value="CUSTOM_HOME">Custom Home</option>
        <option value="KITCHEN_REMODEL">Kitchen Remodel</option>
        <option value="BATHROOM_REMODEL">Bathroom Remodel</option>
        <option value="FLOORING">Flooring</option>
        <option value="PAINTING">Painting</option>
        <option value="ROOFING">Roofing</option>
        <option value="CONCRETE">Concrete</option>
        <option value="FENCES">Fences</option>
        <option value="PATIO">Patio</option>
        <option value="WINDOWS">Windows</option>
        <option value="OTHER">Other</option>
      </select>
    );
  };

  const createFormCategorySelect = () => {
    return (
      <select
        id="category"
        name="category"
        required
        className="w-full p-2 border bg-slate-100 border-gray-300 rounded-md cursor-pointer"
      >
        <option value="">Select category...</option>
        <option value="CUSTOM_HOME">Custom Home</option>
        <option value="KITCHEN_REMODEL">Kitchen Remodel</option>
        <option value="BATHROOM_REMODEL">Bathroom Remodel</option>
        <option value="FLOORING">Flooring</option>
        <option value="PAINTING">Painting</option>
        <option value="ROOFING">Roofing</option>
        <option value="CONCRETE">Concrete</option>
        <option value="FENCES">Fences</option>
        <option value="PATIO">Patio</option>
        <option value="WINDOWS">Windows</option>
        <option value="OTHER">Other</option>
      </select>
    );
  };

  return (
    <div className="flex flex-col gap-2 max-w-md mx-auto p-6 bg-slate-200 rounded-lg shadow-md font-montserrat text-black">
      <h2 className="text-2xl font-bold mb-6">Upload Images</h2>

      <div className="flex items-center gap-4 mb-6">
        <button
          type="button"
          onClick={() => setIsPathUpload(!isPathUpload)}
          className="py-2 px-4 rounded-md text-white font-medium bg-blue-600 hover:bg-blue-700"
        >
          {isPathUpload ? "Switch to Form Upload" : "Switch to Path Upload"}
        </button>
      </div>

      {isPathUpload ? (
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            This will upload all images from the assets folder, of the files you
            encoded in the include paths.
          </p>
          <div className="flex items-center cursor-pointer bg-slate-100 p-2 rounded-md">
            <button
              onClick={() => setIsBackdrop((prev) => !prev)}
              className="text-sm font-medium"
            >
              {isBackdrop
                ? "Switch to Gallery Upload"
                : "Switch to Backdrop Upload"}
            </button>
          </div>
          <section className="w-full py-2 px-4 rounded-md text-black font-medium bg-blue-600 hover:bg-blue-700">
            {`Select Category`}
            {createPathCategorySelect()}
          </section>
          <button
            onClick={() => handlePathUpload(category)}
            disabled={isPending}
            className={`w-full py-2 px-4 rounded-md text-white font-medium ${
              isPending
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isPending ? "Uploading from Path..." : "Upload Images from Path"}
          </button>
        </div>
      ) : (
        <form
          id="upload-form"
          action={handleSubmit}
          className="flex flex-col gap-3"
        >
          {/* File Input */}
          <div className="rounded-md">
            <label htmlFor="images" className="block text-sm font-medium mb-2">
              Select Images
            </label>
            <input
              type="file"
              id="images"
              name="images"
              multiple
              accept="image/jpeg,image/png,image/webp"
              required
              className="w-full p-2 border bg-slate-100 border-gray-300 rounded-md cursor-pointer"
            />
          </div>

          {/* Category Selection */}
          <div className="rounded-md">
            <label
              htmlFor="category"
              className="block text-sm font-medium mb-2"
            >
              Project Category
            </label>
            {createFormCategorySelect()}
          </div>

          {/* Backdrop Toggle */}
          <div className="flex items-center cursor-pointer bg-slate-300 p-2 rounded-md">
            <input
              type="checkbox"
              id="isBackdrop"
              name="isBackdrop"
              className="mr-2"
            />
            <label htmlFor="isBackdrop" className="text-sm font-medium">
              Use as backdrop images (low opacity background)
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className={`w-full py-2 px-4 rounded-md text-white font-medium ${
              isPending
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isPending ? "Uploading..." : "Upload Images"}
          </button>
        </form>
      )}

      {/* Success/Error Messages */}
      {message && (
        <div
          className={`mt-4 p-3 rounded-md ${
            message.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}
