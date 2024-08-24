"use client";
//Gen AI Component to recommend something to the user
import Image from "next/image";
import { ai } from "../../../public";
import { layout } from "../constants/styles";
import model from "../utils/gemini";
import { useState } from "react";
import db from "../utils/firestore";
import { pricingPackages } from "../constants";
import { collection, getDocs } from "@firebase/firestore";

export default function GenAIComponent(props) {
  const [aitext, setAitext] = useState("");
  const [loading, setLoading] = useState(false);
  // Wrap in an async function so you can use await

  const deviceCollection = collection(db, `Users/${props.id}/Devices`);

  async function promptGeneration() {
    var userPlan;
    const snapshot = await getDocs(deviceCollection);

    const date = new Date().toDateString();
    //const expiryDate = new Date(props.date).toDateString();

    console.log(date);

    var prompt = `This is an application called asurion for subscribing to device protection plans. There are different categories of plans that users can subscribe to. They are the following:\n`;

    pricingPackages.forEach((pack, i) => {
      prompt += `${pack.title}: ${pack.description}\n`;
      if (pack.id == props.plan) {
        userPlan = pack;
      }
    });

    prompt += `The current user is subscribed to ${userPlan.title} and has subscribed to this plan on ${date} and has a validity of ${userPlan.duration}. The user has also registered ${snapshot.docs.length} out of the ${userPlan.devices} allowed.\n\n`;

    prompt += `You are supposed to be an AI generating device maintenance tips or upgrade suggestions. What would you suggest to the user? Keep the suggestion to 50 words or lesser.`;

    return prompt;
  }

  async function recommend() {
    // Provide a prompt that contains text
    setLoading(true);
    //const prompt = "Write a story about a magic backpack limited to 100 words.";

    // To generate text output, call generateContent with the text input
    

    const newPrompt = await promptGeneration();
    const result = await model.generateContent(newPrompt);
    console.log(newPrompt);

    const response = result.response;
    const text = response.text();
    //console.log(text);
    setAitext(text);
    setLoading(false);
  }

  return (
    <section className={layout.sectionUpdated}>
      <div className="flex flex-col w-full rounded-[20px] bg-[#041E49]/95 p-4">
        <div className="text-[20px] text-white flex justify-start items-center">
          <Image
            src={ai}
            className={`inline h-[32px] w-[32px] bg-white rounded-full py-1 mr-2 ${
              loading == true ? " animate-spin" : ""
            }`}
          />
          <div className="bg-gradient-to-r from-[#6ec3f4] via-[#8484ff] to-[#ff61ab] inline text-transparent bg-clip-text">
            Asurion&nbsp;
          </div>
          AI
        </div>
        <div className="font-playfair font-light text-[18px] text-white flex justify-start text-justify items-center py-2 px-4">
          Your personal AI concierge to give you a recommendation on the how you
          can maximize your benefits from your active asurion plans and its
          associated benefits.
        </div>

        <div className="rounded-md font-playfair bg-white text-[18px] w-1/2 flex mx-4 p-5">
          <Image
            src={ai}
            className={`inline h-[32px] w-[32px] bg-[#041E49]/95 rounded-full py-1 mr-2 ${
              loading == true ? " animate-pulse" : ""
            }`}
          />
          <div className="bg-gradient-to-r from-[#6ec3f4] via-[#8484ff] to-[#ff61ab] inline text-transparent bg-clip-text">
            AI&nbsp;
          </div>{" "}
          <br />
          {aitext}
        </div>

        <div className="flex w-full items-center justify-center mt-2">
          <button
            onClick={recommend}
            className="flex w-1/2 rounded-md bg-sky-500 font-playfair font-light text-[18px] text-white justify-center py-2"
          >
            Ask for an AI Recommendation
          </button>
        </div>
      </div>
    </section>
  );
}
