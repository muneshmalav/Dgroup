import HeroBanner from "@/components/HeroBanner";
import Footer from "@/components/Footer";
export default function AboutUs() {
  const overlay = true;
   const whitegrid = true;
  const heroBannerData = {
    heading: "",
    title: "D Group",
    src: "/images/allmix.mp4",
    alt: "Working Paper",
    video: true,
  };
  return (
    <div className="body">
      <HeroBanner whitegrid={whitegrid} overlay={overlay} heroBannerData={heroBannerData} />

      <Footer />
    </div>
  );
}
