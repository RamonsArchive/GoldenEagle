import { fetchHeroData, getUserId } from "@/lib/actions";
import Hero from "@/components/Hero";
import ImageUploader from "@/components/admin/ImageUploadForm";

const Home = async () => {
  const userId = await getUserId();
  console.log(userId);

  const heroData = await fetchHeroData();
  console.log(heroData);

  return (
    <div className="flex flex-col w-full h-[calc(100vh+(30rem))]">
      <Hero heroData={heroData} />
    </div>
  );
};

export default Home;
