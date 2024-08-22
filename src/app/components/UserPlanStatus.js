//Component for Displaying User Plan and Devices Associated
import { layout } from "../constants/styles";
import styles from "../constants/styles";
import { MdOutlineStars } from "react-icons/md";
import { LuCheckCircle } from "react-icons/lu";
import DeviceDetailComponent from "./DeviceDetailComponent";
import AddDeviceModal from "./AddDeviceModal";

export default function UserPlanStatus() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Your Active{" "}
          <span className="bg-gradient-to-r from-[#6ec3f4] via-[#3a3aff] to-[#ff61ab] text-transparent bg-clip-text">
            Plan.
          </span>
        </h2>

        <div className="mt-2 bg-[#F7F7F7] border-black border-[0.5px] flex flex-col w-3/4 h-auto sm:h-auto md:h-auto rounded-[20px] p-4 mx-1">
          <div className="flex justify-start ml-2 my-2">
            <div
              className={`${"bg-gradient-to-r from-[#6ec3f4] via-[#3a3aff] to-[#ff61ab] text-white font-bold"} flex items-center w-auto p-2 rounded-md font-poppins text-xs sm:text-sm md:text-[10px] text-[12px]`}
            >
              <MdOutlineStars />
              Active
            </div>
          </div>
          <div className="flex justify-start ml-2 my-2">
            <h4
              className={`font-poppins font-semibold text-lg sm:text-xl md:text-[20px] leading-[23px] ${"text-black"} mb-1 inline-block`}
            >
              Asurion {"Basic"}
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
            {/* Asurion Basic covers upto 3 devices for a year from all damages, repairs and maintainence costs. The devices can range from phones, tablets to laptops. */}
          </div>
          <div className="flex flex-col justify-between h-full mt-2">
            <div className="flex flex-col space-y-4">
              <div className="flex items-baseline">
                <LuCheckCircle className="text-[12px] text-[#ff61ab] mr-1" />
                <div
                  className={`w-full text-justify font-poppins font-medium text-xs sm:text-sm md:text-[12px] inline-block ${"text-black"}`}
                >
                  {
                    "Asurion Basic covers upto 3 devices for a year from all damages, repairs and maintainence costs. The devices can range from phones, tablets to laptops."
                  }
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="w-full mt-2">
                <h4
                  className={`font-poppins font-semibold text-sm sm:text-base md:text-[12px] leading-[23px] ${"text-black"} mb-1 inline-block`}
                >
                  Valid for {"1 year"}
                </h4>
              </div>
              <div className="flex items-end justify-start ml-2 mb-2">
                <h4
                  className={`font-poppins font-semibold text-lg sm:text-xl md:text-[20px] leading-[23px] ${"text-black"} mb-1 inline-block`}
                >
                  {"$12.99"}
                  <div
                    className={`font-poppins font-light text-sm sm:text-base md:text-[15px] ${"text-black"} inline-block`}
                  >
                    /month
                  </div>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2Updated}>Devices covered.</h2>
        <div className="grid grid-cols-2 gap-4">
            <DeviceDetailComponent/>
            <DeviceDetailComponent/>
            <DeviceDetailComponent/>
            <DeviceDetailComponent/>
            <DeviceDetailComponent/>
            <AddDeviceModal/>
        </div>
      </div>
    </section>
  );
}
