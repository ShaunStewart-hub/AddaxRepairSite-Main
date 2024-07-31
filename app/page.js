import Image from "next/image";
import MainSection from "@/sections/main_page/main_section";
import InfoSection from "@/sections/main_page/info_section";
import AffiliateSection from "@/sections/main_page/affiliate_section";
import CategorySection from "@/sections/main_page/category_section";
import ImageSection from "@/sections/main_page/image_section";
import HelperNav from "@/components/helper_nav";

export default function Home() {
  return (
    <main className="bg-white">
      <div className=" max-w-7xl m-auto  ">
        <HelperNav></HelperNav>
        <MainSection></MainSection>
        <InfoSection></InfoSection>
        <ImageSection></ImageSection>
        <AffiliateSection></AffiliateSection>
        <CategorySection></CategorySection>
      </div>
    </main>
  );
}
