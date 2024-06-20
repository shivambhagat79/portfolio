"use client";

import { Major_Mono_Display } from "next/font/google";
import React from "react";
import { SparklesCore } from "@/components/ui/particles";
import Navbar from "../Navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmileWink,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";
import ArrowRight from "../Icons/arrowRIght";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const major_mono = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  return (
    <div className="h-screen w-screen text-sm md:text-base xl:text-lg border-b-2 border-black">
      <Navbar />
      <div className="w-full absolute inset-0 h-screen -z-10">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={20}
          maxSize={200}
          speed={0.5}
          particleDensity={2}
          className="w-full h-full"
          particleColor="#99ccc1"
        />
      </div>
      <div className="w-full h-full px-5 md:px-24 xl:px-60 flex justify-center items-center">
        <div className="w-full">
          <div className="w-full pb-4 flex flex-col md:flex-row border-b-2 border-black items-end md:justify-between">
            <div className="border-2 border-black px-4 py-2 mb-5 inline-block md:mb-0">
              Based in Punjab{"  "}
              <ArrowRight />
              {"  "}
              India
            </div>
            <div></div>
            <div className="bg-black text-white px-4 py-2 inline-block mb-5 md:mb-0">
              Status <ArrowRight />
              {"  "}
              <span>Open to Work</span>
            </div>
          </div>
          <div
            className={`${major_mono.className} text-4xl md:text-6xl xl:text-8xl mt-9 mb-10 md:mb-16 xl:mb-24`}
          >
            <TextGenerateEffect words="Hi, This Is Shivam" />
          </div>
          <div className="mb-5 bg-black inline-block text-white px-4 py-2">
            Currently <ArrowRight />{" "}
            <span className=" font-extrabold">IIT Ropar, C.S.E.</span>
          </div>
          <div></div>
          <div className="mb-5 bg-black inline-block text-white px-4 py-2">
            Delivering <ArrowRight />{" "}
            <span className=" font-extrabold">Smiles</span>
            {"  "}
            <FontAwesomeIcon icon={faSmileWink} className="text-teal-500" />
          </div>
          <div className=" h-24"></div>
        </div>
      </div>
      <div className="bottom-10 absolute left-1/2">
        <FontAwesomeIcon
          icon={faAngleDoubleDown}
          className="text-teal-700/80 text-2xl md:text-3xl xl:text-5xl"
        />
      </div>
    </div>
  );
}
