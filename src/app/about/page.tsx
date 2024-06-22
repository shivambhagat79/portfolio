"use client";

import Navbar from "@/components/Navbar/navbar";
import Image from "next/image";
import profile from "/public/img/profile/profile.jpg";
import { cn } from "@/utils/cn";
import { Major_Mono_Display } from "next/font/google";
import { useState, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";

const major_mono = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400",
});

const useWidth = () => {
  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return width;
};

export default function About() {
  return (
    <>
      {useWidth() > 600 ? (
        <AnimatedCursor
          innerSize={8}
          outerSize={36}
          color="0,0,0"
          outerAlpha={0.0}
          innerScale={0.9}
          outerScale={3}
          outerStyle={{
            border: "2px solid rgba(6, 143, 111, 0.9)",
          }}
        />
      ) : null}
      <Navbar />
      <div className="px-5 md:px-32  py-10 grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full h-full flex justify-center -z-10 md:z-0">
          <div className=" w-80 h-80 md:w-96 md:h-96 border-2 border-teal-900 shadow-[12px_12px_#064e3b] my-8 hover:shadow-none transition-all">
            <Image
              className="md:grayscale md:hover:grayscale-0 transition-all duration-1000"
              src={profile}
              alt=""
              placeholder="blur"
            />
          </div>
        </div>
        <div className="my-8 w">
          <h1
            className={cn(
              major_mono.className,
              "text-2xl md:text-4xl text-white bg-black px-4 py-2 inline-block"
            )}
          >
            About Me
          </h1>
          <div className="text-stone-700 text-sm md:text-base lg:text-lg grid grid-rows-3 gap-5 mt-5">
            <p>
              Hi there! I&apos;m Shivam. I&apos;m a Computer Science student at
              IIT Ropar, deeply fascinated by the world of full-stack
              development. Building applications from scratch, from the user
              interface to the complex backend logic, brings me immense
              satisfaction. I love the challenge of problem-solving and the
              thrill of seeing my code come to life as a functioning program.
              Whether it's crafting a user-friendly interface or tackling
              intricate back-end tasks, I'm always eager to learn new
              technologies and push my coding boundaries.
            </p>
            <p>
              Beyond the realm of code, I find solace and expression in the
              arts. Painting and sketching are my go-to creative outlets.
              There's a magic in creating something beautiful from a blank
              canvas, be it capturing a fleeting moment in nature with
              watercolors or bringing a fantastical creature to life with
              detailed pen strokes. Immersing myself in the world of colors and
              textures allows me to unwind and explore different creative
              avenues.
            </p>
            <p>
              When I'm not coding or creating art, you might find me exploring
              the culinary world. Food, for me, is more than just sustenance –
              it's a journey of discovery. From trying new cuisines to
              experimenting in the kitchen, I savor the process of creating and
              enjoying delicious meals. Who knows, maybe someday my coding
              skills will come in handy for developing a revolutionary food app!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
