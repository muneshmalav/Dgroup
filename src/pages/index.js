import HeroBanner from "@/components/HeroBanner";

import Cta from "@/components/Cta";
import ColThreeCard from "@/components/ColThreeCard";
import Counter from "@/components/Counter";
import TeamFilter from "@/components/TeamFilter";

export default function Home() {
  const heroBannerData = {
    heading: "",
    title: "D Group — Building Powerful Web Experiences",
    src: "/images/blueanimation.mp4",
    video: true,
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
      <ColThreeCard />
      <TeamFilter />
      <Cta ctaData={ctaData} />
    </div>
  );
}
