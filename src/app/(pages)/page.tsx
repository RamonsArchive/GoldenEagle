import { fetchAboutData, fetchHeroData, getUserId } from "@/lib/actions";
import Hero from "@/components/Hero";
import ImageUploader from "@/components/admin/ImageUploadForm";
import About from "@/components/About";

const Home = async () => {
  const userId = await getUserId();
  console.log(userId);

  const heroData = await fetchHeroData();
  const aboutData = await fetchAboutData();
  console.log(heroData);

  return (
    <div className="flex flex-col w-full h-[calc(100vh+(30rem))]">
      <Hero heroData={heroData.data} />
      <About aboutData={aboutData.data} />
    </div>
  );
};

export default Home;
