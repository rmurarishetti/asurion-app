"use client"
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";
import Gradient from "@bedard/gradient";
import Link from "next/link";

export default withPageAuthRequired(function Page() {
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    new Gradient(canvas, {
      colors: ["#6ec3f4", "#3a3aff", "#ff61ab", "#E63946"],
      seed: Math.random(),
    });
  }, []);

  return (
    <main className="flex flex-col min-h-min justify-between bg-transparent pb-10">
      <div className="h-3/4 relative flex sm:flex-col">
        <div className="z-0">
          <canvas className="w-full"></canvas>
        </div>

        <div className="absolute top-0 sm:left-12 flex sm:w-1/2 w-full h-full justify-center z-30">
          <span className="md:text-5xl lg:text-6xl sm:text-lg pl-8 sm:flex-col flex font-bold justify-center items-center hidden sm:flex sm:items-start text-black/75 py-5">
            <div className="text-white/75"> Your Changes Have Been Saved.</div>
            <div className="py-2"></div>
            <Link href={"/user"}>
            <div className="md:text-xl lg:text-3xl sm:text-sm">
              Return to your {" "}
              <div className="underline inline">dashboard.</div>
            </div>
            </Link>
          </span>

          <div className="w-full items-center flex-col h-1/2 justify-center font-bold text-[10px] text-white sm:text-md z-30 py-5 sm:hidden flex">
            Your Changes Have Been Saved.
            <div className="w-full items-center text-white justify-center font-bold text-[10px] sm:text-md z-30 py-5 sm:hidden flex">
              From breaks to bugs, we have all your devices covered.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
});
