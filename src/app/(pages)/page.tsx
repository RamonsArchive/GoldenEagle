import App from "@/components/App";
import ImageUploader from "@/components/admin/ImageUploadForm";
import Navbar from "@/components/Navbar";
//import { fetchHeroData } from "@/lib/actions";
import { cookies } from "next/headers";
import { getUserId } from "@/lib/actions";

const Home = async () => {
  // const heroData = fetchHeroData();

  const cookieStore = await cookies();
  const userId = await getUserId();
  console.log(userId);

  return (
    <div className="home-page">
      <div className="flex justify-center items-center w-full h-[3000px] text-white">
        <h1>Hello</h1>
      </div>
      <App />
    </div>
  );
};

export default Home;
