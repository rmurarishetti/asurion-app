import Image from "next/image";
import { laptop, tablet, phone } from "../../../public";
import styles from "../constants/styles";
export default function DeviceDetailComponent(props) {
  return (
    <div className="flex flex-row rounded-[20px] w-full p-4 border-[0.5px] hover:border-black bg-[#F7F7F7] mb-3">
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} m-3`}
      >
        <h4 className="font-poppins font-semibold text-[25px] sm:text-[30px] leading-[43px] sm:leading-[53px]">
          <Image
            src={
              props.type == "Laptop"
                ? laptop
                : props.type == "Phone"
                ? phone
                : tablet
            }
            className="h-full"
          ></Image>
        </h4>
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-[18px] leading-[23.4px] mb-1 text-black">
          {props.name}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] sm:text-[16px] leading-[24px]">
          {props.brand}, {props.year}
        </p>
      </div>
    </div>
  );
}
