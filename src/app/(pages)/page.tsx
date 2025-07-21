import { fetchAboutData, fetchHeroData, getUserId } from "@/lib/actions";
import Hero from "@/components/Hero";
import ImageUploader from "@/components/admin/ImageUploadForm";
import About from "@/components/About";

const Home = async () => {
  const userId = await getUserId();
  console.log(userId);

  const heroData = await fetchHeroData();
  console.log("This is the hero data", heroData);
  const aboutData = await fetchAboutData();
  console.log(aboutData);

  return (
    <>
      <Hero heroData={heroData.data} />
      <About aboutData={aboutData.data} />
    </>
  );
};

export default Home;
