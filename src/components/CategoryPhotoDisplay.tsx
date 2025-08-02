import { ServiceImageType } from "@/lib/globalTypes";
import LazyImage from "./LazyImage";
import TextCard from "./TextCard";
import LeftImageArrow from "./LeftImageArrow";
import RightImageArrow from "./RightImageArrow";
import { ChevronLeft } from "lucide-react";

const CategoryPhotoDisplay = ({
  selectedCategory,
  selectedPhotoIndex,
  onNavigate,
  onBack,
}: {
  selectedCategory: {
    name: string;
    description: string | null;
    data: ServiceImageType[];
    icon: string | null;
  };
  selectedPhotoIndex: number;
  onNavigate: (direction: "next" | "prev") => void;
  onBack: () => void;
}) => {
  if (!selectedCategory) return null;

  const currentPhoto = selectedCategory.data[selectedPhotoIndex || 0];
  const title = selectedCategory.name;
  const description = selectedCategory.description;
  const icon = selectedCategory.icon;

  return (
    <div className="view-photos-for-category">
      <div className="flex flex-row items-center">
        <button
          className="flex flex-row items-center font-montserrat text-white text-[14px] xs:text-[16px] md:text-[18px] transition-all duration-300 ease-in-out hover:text-slate-400 gap-2"
          onClick={onBack}
        >
          <ChevronLeft className="w-6 h-6" />
          Back
        </button>
      </div>
      <div className="flex flex-col w-full h-full rounded-xl shadow-xl border-1 border-white/10">
        <TextCard
          id="category-photos-title"
          title={`${icon} ${title}`}
          className="text-card-category-photos"
          description={description}
          titleStyle="text-card-title-category-photos"
          descriptionStyle="text-card-description-category-photos"
        />
        <p className="text-card-index-category-photos px-5 pb-3 rounded-xl z-[110]">
          {selectedPhotoIndex !== undefined ? selectedPhotoIndex + 1 : 0} of{" "}
          {selectedCategory.data.length} images
        </p>

        <div className="relative flex flex-center w-full h-full shadow-xl">
          <LazyImage
            src={currentPhoto.url}
            alt={currentPhoto.alt || "alt"}
            isFill={true}
            sizes="100vw"
            containerClassName="relative flex flex-center w-full h-full rounded-b-xl"
            imageClassName="object-cover w-full h-full rounded-b-xl"
            priority={true}
            skipIntersectionObserver={true}
          />
          <LeftImageArrow
            id="left-image-arrow"
            direction="left"
            onClick={() => onNavigate("prev")}
            position="left-[5%] top-1/2 -translate-y-1/2"
          />
          <RightImageArrow
            id="right-image-arrow"
            direction="right"
            onClick={() => onNavigate("next")}
            position="right-[5%] top-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryPhotoDisplay;
