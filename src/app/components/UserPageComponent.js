"use client";
import { useEffect } from "react";
import Gradient from "@bedard/gradient";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function UserPageComponent() {
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    new Gradient(canvas, {
      colors: ["#6ec3f4", "#3a3aff", "#ff61ab", "#E63946"],
      seed: Math.random(),
    });
  }, []);

  return (
    <div className="h-3/4 relative flex sm:flex-col">
      <div className="z-0">
        <canvas className="w-full"></canvas>
      </div>

      <div className="absolute top-0 sm:left-12 flex sm:w-1/2 w-full h-full justify-center z-30">
        <span className="md:text-5xl lg:text-6xl sm:text-lg pl-8 sm:flex-col flex font-bold justify-center items-center hidden sm:flex sm:items-start text-black/75 py-5">
          <div className="text-white/75">Welcome {user?.name}.</div>
          <div className="py-2"></div>
          <div className="md:text-3xl lg:text-4xl sm:text-md text-sm py-2">
            Your Dashboard.
          </div>
        </span>

        <div className="w-full items-center flex-col h-1/2 justify-center font-bold text-[10px] text-white sm:text-md z-30 text-black py-5 sm:hidden flex">
          Welcome {user?.name}.
          <div className="w-full items-center text-white justify-center font-bold text-[10px] sm:text-md z-30 text-black py-5 sm:hidden flex">
            Your Dashboard.
          </div>
        </div>
      </div>
    </div>
  );
}
