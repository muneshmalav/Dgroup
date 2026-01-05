import styles from "@/styles/Cta.module.css";
export default function Cta({ ctaData }) {
  return (
    <section
      className={`${styles.whitegrid} ${styles.dark__overlay} relative flex items-center min-h-[600px]`}
    >
      <div className="BgWrap absolute top-0 left-0 w-full h-full">
        <img
          src={ctaData.src}
          loading="lazy"
          alt={ctaData.alt || "CTA Background"}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container">
        <div className="introWrap relative z-[11] text-center max-w-[1200px] mx-auto">
          {ctaData.heading && (
            <h6 className="text-white font-semibold mb-[15px]">
              {ctaData.heading}
            </h6>
          )}
          <h2 className="text-white font-black">
            {ctaData.title}
          </h2>
        </div>
      </div>
    </section>
  );
}
