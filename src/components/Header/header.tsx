"use client";

import localFont from "next/font/local";
import Navbar from "../Navbar/navbar";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmileWink,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";
import ArrowRight from "../Icons/arrowRIght";
import Bubbles from "./bubbles";

const againstFont = localFont({
  src: "../../../public/fonts/against regular.ttf",
});

export default function Header() {
  const [time, settime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    settime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div className="h-screen w-screen border-b-2 border-black text-lg overflow-hidden">
      <Bubbles>
        <Navbar />
        <div className="w-full h-5/6 px-60 flex justify-center items-center">
          <div className="w-full">
            <div className="w-full pb-4 flex border-b-2 border-black justify-between">
              <div>
                Based in{"  "}
                <span className={`${againstFont.className} font-bold`}>
                  Punjab
                </span>
                {"  "}
                <ArrowRight />
                {"  "}
                {time}
              </div>

              <div>
                Status <ArrowRight />
                {"  "}
                <span className=" font-extrabold">Open to work</span>
              </div>
            </div>
            <div className={`${againstFont.className} text-8xl mt-9 mb-24`}>
              Hi, this is Shivam.
            </div>
            <div className="mb-5">
              Currently <ArrowRight />{" "}
              <span className=" font-extrabold">IIT Ropar, C.S.E.</span>
            </div>
            <div>
              Delivering <ArrowRight />{" "}
              <span className=" font-extrabold">Smiles</span>
              {"  "}
              <FontAwesomeIcon icon={faSmileWink} className="text-teal-700" />
            </div>
          </div>
        </div>
        <div className="bottom-10 absolute left-1/2">
          <FontAwesomeIcon
            icon={faAngleDoubleDown}
            className="text-teal-700/50 text-5xl"
          />
        </div>
      </Bubbles>
    </div>
  );
}
