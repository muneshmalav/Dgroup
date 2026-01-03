import styles from "@/styles/HeroBanner.module.css";

export default function HeroBanner({ overlay, whitegrid, heroBannerData }) {
  return (
    <section
      className={`${styles.HeroBanner} ${
        overlay ? styles.dark__overlay : ""
      } ${whitegrid ? styles.whitegrid : ""} relative HeroBanner flex items-center h-screen ${
        heroBannerData?.styles ? heroBannerData?.styles : ""
      }`}
    >
      <div className="absolute top-0 right-0 left-0 w-[100%] h-[100%] z-[1]">
        {heroBannerData.video ? (
          <video autoPlay loop muted playsInline>
            <source src={heroBannerData.src} type="video/mp4" />
          </video>
        ) : (
          <img
            className="h-[100%] w-[100%]"
            src={heroBannerData.src}
            alt={heroBannerData.alt}
            loading="lazy"
          />
        )}
      </div>

      <div className="container">
        <div className="z-[4] relative max-w-[1200px]">
          <h5 className="text-white capitalize font-black mb-[20px]">
            {heroBannerData.heading}
          </h5>
          <h1 className="text-white capitalize font-black">
            {heroBannerData.title}
          </h1>
        </div>
      </div>
    </section>
  );
}
