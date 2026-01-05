"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/Counter.module.css";

const Counter = () => {
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef(null);

  const counterData = [
    {
      value: 78,
      label: "Projects Completed",
      suffix: "+",
    },
    {
      value: 99,
      label: "Happy Clients",
      suffix: "+",
    },
    {
      value: "12 Years",
      label: "Years of Experience",
      suffix: "",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <section className={`Counter bg-black ${styles.counter}`} ref={counterRef}>
      <div className="container">
        <h3
          className={`heading capitalize text-white text-center ${styles.heading}`}
        >
          Our Achievements in Numbers
        </h3>
        <div
          className={`rowOuter flex-wrap relative z-[9] mt-[50px] flex w-[calc(100%+20px)] ml-[-10px] lg:block lg:w-full lg:mx-0 items-center text-center ${styles.rowOuter}`}
        >
          {counterData.map((item, index) => (
            <div
              key={index}
              className={`counterItem mb-[20px] p-[20px] w-[calc(33.33%-20px)] mx-[10px] lg:mb-[10px] lg:last:mb-0 lg:w-full lg:mx-0  ${
                styles.counterItem
              } ${index === counterData.length - 1 ? styles.noBorder : ""}`}
            >
              <AnimatePresence>
                {isInView && (
                  <motion.div className={`countWrap ${styles.countWrap}`}>
                    <motion.span
                      className={styles.count}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {(() => {
                        const match =
                          typeof item.value === "string" &&
                          item.value.match(/^(\d+)\s+(.*)$/);
                        if (match) {
                          const number = parseInt(match[1], 10);
                          const text = match[2];
                          return (
                            <>
                              <motion.span
                                initial={{ textContent: 0 }}
                                animate={{ textContent: number }}
                                transition={{
                                  duration: 1.5,
                                  ease: "easeOut",
                                  delay: index * 0.2,
                                }}
                                onUpdate={(latest) => {
                                  const element = document.querySelector(
                                    `.${styles.count}-${index}`
                                  );
                                  if (element) {
                                    element.textContent = Math.floor(
                                      latest.textContent
                                    );
                                  }
                                }}
                                className={`${styles.count}-${index}`}
                              >
                                0
                              </motion.span>
                              <span> {text}</span>
                            </>
                          );
                        } else if (typeof item.value === "number") {
                          return (
                            <motion.span
                              initial={{ textContent: 0 }}
                              animate={{ textContent: item.value }}
                              transition={{
                                duration: 1.5,
                                ease: "easeOut",
                                delay: index * 0.2,
                              }}
                              onUpdate={(latest) => {
                                const element = document.querySelector(
                                  `.${styles.count}-${index}`
                                );
                                if (element) {
                                  element.textContent = Math.floor(
                                    latest.textContent
                                  );
                                }
                              }}
                              className={`${styles.count}-${index}`}
                            >
                              0
                            </motion.span>
                          );
                        } else {
                          return <span>{item.value}</span>;
                        }
                      })()}
                      {item.suffix}
                    </motion.span>
                    <p className={styles.label}>{item.label}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
