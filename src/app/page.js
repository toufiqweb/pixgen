import Banner from "@/components/homepage/Banner";
import TopGenerationPhotos from "@/components/homepage/TopGenerationPhotos";

export default function Home() {
  return (
   <div className="max-w-7xl mx-auto space-y-5">
    <Banner/>
    <TopGenerationPhotos/>
   </div>
  );
}
