// import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
export default function Home() {
  const whitegrid = false;
  const overlay = true;
  const heroBannerData = {
    heading: "",
    title: "D Group",
    src: "/images/work-paper.jpg",
    video: false,
  };
  return (
    <div>
      <HeroBanner whitegrid={whitegrid} overlay={overlay} heroBannerData={heroBannerData} />
      <Cta />
      <Footer />
    </div>
  );
}
