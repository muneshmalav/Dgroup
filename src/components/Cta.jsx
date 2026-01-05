import styles from "@/styles/Cta.module.css";
export default function Cta() {
  return (
    <section
      className={`${styles.whitegrid} ${styles.dark__overlay} relative flex items-center min-h-[50vh]`}
    >
      <div className="BgWrap absolute top-0 left-0 w-full h-full">
        <img src="/images/cta-new.jpg" loading="lazy" alt="Tables and a sofa" />
      </div>
      <div className="container">
        <div className="introWrap relative z-[11] text-center">
          <h6 className="text-white">Let’s build what’s next.</h6>
          <h2 className="pt-[15px] text-white">Let’s build what’s next.</h2>
        </div>
      </div>
    </section>
  );
}
