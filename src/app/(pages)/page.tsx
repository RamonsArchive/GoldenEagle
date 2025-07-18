import { fetchHeroData, getUserId } from "@/lib/actions";
import Hero from "@/components/Hero";
import ImageUploader from "@/components/admin/ImageUploadForm";

const Home = async () => {
  const userId = await getUserId();
  console.log(userId);

  const heroData = await fetchHeroData();
  console.log(heroData);

  return (
    <div className="home-page">
      <ImageUploader />
      <Hero heroData={heroData} />
    </div>
  );
};

export default Home;
