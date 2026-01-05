import styles from "@/styles/ColThreeCards.module.css";

export default function ColThreeCard() {
  const data = [
    {
      title: "Highly collaborative approach",
      blurb:
        "xyz",
      imgSrc: "/images/designs.png",
      alt: "Cursor Icon",
    },
    {
      title: "Modern and engaging UI/UX",
      blurb:
        "xyz",
      imgSrc: "/images/designs.png",
      alt: "Cursor Icon",
    },
    {
      title: "Fully responsive layouts",
      blurb:
        "xyz",
      imgSrc: "/images/designs.png",
      alt: "Cursor Icon",
    },
    {
      title: "Fast-loading pages",
      blurb:
        "xyz",
      imgSrc: "/images/designs.png",
      alt: "Cursor Icon",
    },
    {
      title: "SEO-friendly development",
      blurb:
        "xyz",
      imgSrc: "/images/designs.png",
      alt: "Cursor Icon",
    },
    {
      title: "Client-focused communication & professional support",
      blurb:
        "xyz",
      imgSrc: "/images/designs.png",
      alt: "Cursor Icon",
    },
  ];
  return (
    <section
      className={`${styles.blackgrid}
       relative ColThreeCard bg-[#ffff] `}
    >
      <div className="container">
        <div className="introBlock relative z-[9] mb-[60px]">
          <h5 className="mb-[20px] text-black">Website Design & Development</h5>
          <h3 className="text-black">
            Custom, responsive, and performance-driven websites built to convert visitors into customers.
          </h3>
          <p className="mt-[20px] text-black">
            Transform your ideas into fast, scalable, and impactful digital experiences.
          </p>
        </div>
        <div className="outerWrap flex-wrap relative z-[9] flex w-[calc(100%+20px)] ml-[-10px] lg:block lg:w-full lg:mx-0">
          {data.map((item, index) => (
            <div
              className="item mb-[20px] p-[20px] w-[calc(33.33%-20px)] mx-[10px] lg:mb-[10px] lg:last:mb-0 lg:w-full lg:mx-0"
              style={{
                boxShadow: "0 0 16px 0 rgba(0, 0, 0, 0.15)",
                backgroundColor: "#ffffff",
                borderRadius: "10px",
              }}
              key={index}
            >

              <div className="logoWrap max-w-[100px] max-h-[100px] lg:max-w-[70px] lg:max-h-[70px]  overflow-hidden mb-[20px]">
                <img
                  className="h-[100%] w-[100%] object-contain"
                  src={item.imgSrc}
                  alt={item.alt}
                  loading="lazy"
                />
              </div>
              <div className="innerContent relative z-[9]">
                <h4 className="text-black">{item.title}</h4>
                <p className="mt-[20px] text-black lg:mt-[15px] ">
                  {item.blurb}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
