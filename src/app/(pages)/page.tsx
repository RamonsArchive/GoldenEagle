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
import LazySection from "@/components/LazySection";

const Home = async () => {
  const userId = await getUserId();
  console.log(userId);

  const heroData = await fetchHeroData();
  const aboutData = await fetchAboutData();
  const servicesData = await fetchServicesData();

  return (
    <>
      <Hero heroData={heroData.data} />
      <LazySection
        className="about-section"
        threshold={0.1}
        placeholder={
          <div className="min-h-screen bg-slate-900/20 flex flex-center">
            <div className="text-white/60 text-2xl font-bold">
              Loading About Section...
            </div>
          </div>
        }
      >
        <About aboutData={aboutData.data} />
      </LazySection>
      <LazySection
        className="services-section"
        threshold={0.1}
        placeholder={
          <div className="min-h-screen bg-slate-900/20 flex flex-center">
            <div className="text-white/60 text-2xl font-bold">
              Loading Services Section...
            </div>
          </div>
        }
      >
        <Services servicesData={servicesData.data} />
      </LazySection>
    </>
  );
};

export default Home;
