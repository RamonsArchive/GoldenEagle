import LazyImage from "./LazyImage";

const MiniPhoto = ({
  imageURL,
  imageAlt,
}: {
  imageURL: string;
  imageAlt: string;
}) => {
  return (
    <div className="w-full aspect-square relative rounded-xl overflow-hidden bg-slate-600/50 shadow-xl border border-white z-10">
      <LazyImage
        src={imageURL}
        alt={imageAlt || "alt"}
        isFill={true}
        sizes="30vw"
        containerClassName="w-full h-full"
        imageClassName="object-cover object-center rounded-xl transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

export default MiniPhoto;
