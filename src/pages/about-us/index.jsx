import HeroBanner from "@/components/HeroBanner";
import Cta from "@/components/Cta";
export default function AboutUs() {
  const overlay = true;
  const whitegrid = false;
  const heroBannerData = {
    heading: "",
    title: "Building Digital Excellence at D Group",
    src: "/images/aboutus.jpg",
    alt: "Working Paper",
    video: false,
  };
  const ctaData = {
    heading: "Let’s build together",
    title: "Let’s build what’s next.",
    src: "/images/cta-new.jpg",
  };

  return (
    <div className="body">
      <HeroBanner whitegrid={whitegrid} overlay={overlay} heroBannerData={heroBannerData} />
      <Cta ctaData={ctaData} />
    </div>
  );
}
