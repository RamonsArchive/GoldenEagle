import LazyImage from "./LazyImage";

const MiniPhoto = ({
  imageURL,
  imageAlt,
  onCategoryClick,
}: {
  imageURL: string;
  imageAlt: string;
  onCategoryClick: () => void;
}) => {
  return (
    <div className="mini-photo" onClick={onCategoryClick}>
      <LazyImage
        src={imageURL}
        alt={imageAlt || "alt"}
        isFill={true}
        sizes="30vw"
        containerClassName="w-full h-full"
        imageClassName="object-cover object-center rounded-xl transition-transform duration-300 hover:scale-105"
        priority={true}
      />
    </div>
  );
};

export default MiniPhoto;
