"use client"
import React, { useState } from "react";
import styles from "../constants/styles";
import { layout } from "../constants/styles";
import Image from "next/image";
import { heroImage } from "../../../public";
import Link from "next/link";

const Business = () => {

  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Protection Plans. <br className="sm:block hidden" />
          {/* ["#6ec3f4", "#3a3aff", "#ff61ab", "#E63946"] */}
          <div className="bg-gradient-to-r from-[#6ec3f4] via-[#3a3aff] to-[#ff61ab] inline-block text-transparent bg-clip-text">
            You can trust.
          </div>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          From quick support when your laptop glitches to reliable repairs when
          your phone dies, we turn your breakdowns to “all better” in no time.
        </p>
        <Link href="/api/auth/login">
          <div className="bg-[#3a3aff] hover:bg-gradient-to-r hover:bg-from-[#6ec3f4] via-[#3a3aff] to-[#ff61ab]  text-white mt-5 p-3 rounded-md ">
            Get Started
          </div>
        </Link>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        <Image src={heroImage}></Image>
      </div>
    </section>
  );
};

export default Business;
