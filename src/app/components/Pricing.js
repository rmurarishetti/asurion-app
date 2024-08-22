"use client";

import styles from "../constants/styles";
import { layout } from "../constants/styles";

import { pricingPackages } from "../constants";
import { useEffect, useState } from "react";
import PricingCard from "./PricingCard";


export default function Pricing() {
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: 1920,
      height: 1080,
    });

    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const size = useWindowSize();
  return (
    <section id="pricing" className={layout.section}>
      <div
        style={{
          position: "relative",
          width: size.width <= 750 ? "100%" : "62%",
        }}
        className={layout.sectionInfoUpdated + " pr-6 overflow-auto scrollbar"}
      >
        <div className="flex flex-row">
          {pricingPackages.map((pricingPackage, index) => (
            <PricingCard key={index} props={pricingPackage} />
          ))}
        </div>
      </div>
      <div
        className={`${layout.sectionInfo} flex flex-col justify-between h-full`}
      >
        <h2 className={styles.heading2}>
          Fast repairs, right in
          <div className="bg-gradient-to-r from-[#6ec3f4] via-[#3a3aff] to-[#ff61ab] inline-block text-transparent bg-clip-text">
            your neighborhood.
          </div>
          Explore our plans.
        </h2>

        <p className={`${styles.paragraph} max-w-[460px] mt-5`}>
          You read that right! Walk in or schedule a repair at your local store,
          or let an expert come to you. We fix tech as soon as the same day.
        </p>
      </div>
    </section>
  );
}
