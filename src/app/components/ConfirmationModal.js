//For Choosing Plan in Dashboard

"use client";
import * as Dialog from "@radix-ui/react-dialog";
import React, { useEffect } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../constants/styles";
import db from "../utils/firestore";
import { collection, query, where, getDocs, getDoc, doc } from "firebase/firestore";

export default function ConfirmationModal({props}) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {};

  

  const [plan, setPlan] = useState({
    description:"",
    validity:"",
    fees:"",
    devices:"",
    name:""
  });

  useEffect(()=>{
    async function getPlanDetails(){     
        const docSnap = await getDoc(doc(db, "Plans", props.id));
        if (docSnap.exists) {
            setPlan(docSnap.data())
        } else {
           console.log("Doc Not Found")
        }
    }

    getPlanDetails();
  })

  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger asChild>
        <button
          onClick={() => setOpen(true)}
          className={`w-3/4 flex justify-center rounded-md p-2 items-center ${
            props.elgoPackage
              ? "bg-gradient-to-r from-[#6ec3f4] via-[#3a3aff] to-[#ff61ab] text-white font-bold"
              : "bg-black text-white"
          } text-xs sm:text-sm md:text-[10px]`}
        >
          Subscribe
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed z-50 top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Confirm Your Subscription Plan.
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            Review your plan here. Click submit when you&apos;re done.
          </Dialog.Description>

          <div className={"mt-[10px] mb-5 text-[15px] " + styles.paragraph}>
            {plan.description==""?"Loading":plan.description}
          </div>

          <div className="mt-[25px] flex justify-end">
            <button
              onClick={handleSubmit}
              className="bg-[#635BFF] text-white focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
            >
              Submit
            </button>
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
