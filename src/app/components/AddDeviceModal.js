
"use client";
import * as Dialog from "@radix-ui/react-dialog";
import React, { useEffect } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { MdDevicesOther } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DeviceDetailComponent from "./DeviceDetailComponent";
import db from "../utils/firestore";
import { getDocs, collection, addDoc } from "@firebase/firestore";

export default function AddDeviceModal(props) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  async function SubmitDevice(data) {

    const deviceCollection = collection(db, `Users/${props.id}/Devices`);
    const docRef = await addDoc(deviceCollection, data);

    if (docRef.id) {
      setOpen(false);
      router.push(`/confirmation`);
    } else {
      alert("An error occurred. Please try again");
    }

  }

  const [deviceArr, setDeviceArr] = useState([]);

  const deviceCollection = collection(db, "Devices");

  async function getAllDevices() {
    const q = await getDocs(deviceCollection);
    if (q.docs.length > 0) {
      setDeviceArr(q.docs);
    }
  }

  const handleOpen = async () => {
    console.log(props);
    await getAllDevices().then(setOpen(true));
  };

  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger asChild>
        <button
          onClick={handleOpen}
          className="flex flex-row justify-center items-center rounded-[20px] w-full p-4 border-[2px] hover:border-[#3a3aff] bg-[#F7F7F7] mb-3"
        >
          <div className="font-poppins font-semibold text-[20px] leading-[43px]">
            <MdDevicesOther />

            <div className="bg-gradient-to-r from-[#6ec3f4] via-[#3a3aff] to-[#ff61ab] inline-block text-transparent bg-clip-text">
              Add New Device
            </div>
          </div>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed z-50 top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Register New Device.
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            Add Devices from the options below. Click the device you want to add
            when you&apos;re done.
          </Dialog.Description>
          <div className="grid grid-cols-3 gap-4">
            {deviceArr?.map((device, i) => (
              <button onClick={() => SubmitDevice(device.data())} key={i}>
                <DeviceDetailComponent
                  key={i}
                  {...device.data()}
                ></DeviceDetailComponent>
              </button>
            ))}
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-black hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
