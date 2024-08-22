"use client";

import styles from "../constants/styles";
import { layout } from "../constants/styles";
import { LuCheckCircle } from "react-icons/lu";
import { MdOutlineStars } from "react-icons/md";
import { pricingPackages } from "../constants";
import { useEffect, useState } from "react";

const PricingCard = ({ props }) => (
  <div
    className={`bg-[#F7F7F7] flex flex-col w-full h-auto sm:h-auto md:h-auto rounded-[20px] p-4 mx-1 transition-all duration-200 ease-in-out hover:-translate-y-1 scale-98 hover:scale-103 mb-3 ${
      props.elgoPackage ? "border-[#3a3aff] border-[0.5px]" : ""
    }`}
  >
    {/* bg-gradient-to-r from-[#6ec3f4] via-[#3a3aff] to-[#ff61ab] */}
    <div className="flex justify-start ml-2 my-2">
      <div
        className={`${
          props.elgoPackage
            ? "bg-gradient-to-r from-[#6ec3f4] via-[#3a3aff] to-[#ff61ab] text-white font-bold"
            : "bg-black text-white font-light"
        } flex items-center w-auto p-2 rounded-md font-poppins text-xs sm:text-sm md:text-[10px] text-[12px]`}
      >
        {props.elgoPackage ? <MdOutlineStars /> : <></>}
        {props.recommended}
      </div>
    </div>
    <div className="flex justify-start ml-2 my-2">
      <h4
        className={`font-poppins font-semibold text-lg sm:text-xl md:text-[20px] leading-[23px] ${"text-black"} mb-1 inline-block`}
      >
        {props.title}
      </h4>
    </div>
    <div className="flex justify-start m-2 items-center">
      <div className="h-[1px] w-full bg-slate-500"></div>
    </div>
    <div className="flex justify-start ml-2">
      <div
        className={`font-poppins font-medium text-sm sm:text-base md:text-[15px] inline-block ${"text-black"}`}
      >
        Services
      </div>
    </div>
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex flex-col space-y-4">
          {props.content.map((contentItem, index) => (
            <div key={index} className="flex items-baseline">
              <LuCheckCircle className="text-[12px] text-[#ff61ab] mr-1" />
              <div
                className={`w-full sm:w-4/5 font-poppins font-medium text-xs sm:text-sm md:text-[12px] inline-block ${"text-black"}`}
              >
                {contentItem}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="w-full mt-2">
          <h4
            className={`font-poppins font-semibold text-sm sm:text-base md:text-[12px] leading-[23px] ${"text-black"} mb-1 inline-block`}
          >
            Valid for {props.duration}
          </h4>
        </div>
        <div className="flex items-end justify-start ml-2 mb-2">
          <h4
            className={`font-poppins font-semibold text-lg sm:text-xl md:text-[20px] leading-[23px] ${"text-black"} mb-1 inline-block`}
          >
            {props.pricing}
            <div
              className={`font-poppins font-light text-sm sm:text-base md:text-[15px] ${"text-black"} inline-block`}
            >
              /month
            </div>
          </h4>
        </div>
        <div className="flex mt-2 justify-center items-center">
          <button
            className={`w-3/4 flex justify-center rounded-md p-2 items-center ${
              props.elgoPackage
                ? "bg-gradient-to-r from-[#6ec3f4] via-[#3a3aff] to-[#ff61ab] text-white font-bold"
                : "bg-black text-white"
            } text-xs sm:text-sm md:text-[10px]`}
          >
            {props.buttontext}
          </button>
        </div>
      </div>
    </div>
  </div>
);

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
