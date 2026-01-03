// import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import Footer from "@/components/Footer";
export default function Home() {
  const whitegrid = true;
  const overlay = true;
  const heroBannerData = {
    heading: "",
    title: "D Group",
    src: "/images/allclnew.mp4",
    video: true,
  };
  return (
    <div>
      <HeroBanner whitegrid={whitegrid} overlay={overlay} heroBannerData={heroBannerData} />

      <Footer />
    </div>
  );
}
