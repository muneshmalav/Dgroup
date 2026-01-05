import HeroBanner from "@/components/HeroBanner";
import Cta from "@/components/Cta";
import Counter from "@/components/Counter";

export default function Home() {
  const heroBannerData = {
    heading: "",
    title: "D Group",
    src: "/images/work-paper.jpg",
    video: false,
  };
  const ctaData = {
    heading: "Let’s build together",
    title: "Let’s build what’s next.",
    src: "/images/cta-new.jpg",
  };

  return (
    <div>
      <HeroBanner
        whitegrid={false}
        overlay={true}
        heroBannerData={heroBannerData}
      />
      <Counter />
      <Cta ctaData={ctaData} />
    </div>
  );
}
