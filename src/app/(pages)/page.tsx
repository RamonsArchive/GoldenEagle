import {
  fetchAboutData,
  fetchHeroData,
  fetchServicesData,
  getUserId,
} from "@/lib/actions";
import Hero from "@/components/Hero";
import ImageUploader from "@/components/admin/ImageUploadForm";
import About from "@/components/About";
import Services from "@/components/Services";

const Home = async () => {
  const userId = await getUserId();
  console.log(userId);

  const heroData = await fetchHeroData();
  const aboutData = await fetchAboutData();
  const servicesData = await fetchServicesData();

  return (
    <>
      <Hero heroData={heroData.data} />
      <About aboutData={aboutData.data} />
      <Services servicesData={servicesData.data} />
    </>
  );
};

export default Home;
