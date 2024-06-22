"use client";

import Gallery from "@/components/Gallery/gallery";
import Navbar from "@/components/Navbar/navbar";
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

export default function ForFun() {
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
      <div className="px-5 py-10 md:px-20 xl:py-20 xl:px-48 border-b-2 border-black">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-full flex justify-center">
            <h1
              className={cn(major_mono.className, "text-5xl lg:text-7xl mb-10")}
            >
              When I<br /> Am Not
              <br /> Working
            </h1>
          </div>
          <div>
            <p className="text-stone-700 text-sm md:text-base xl:text-lg">
              Whenever I find myself tired at the end of a long day, or I shut
              my textbooks with a sigh, the world melts away. My stress fades as
              I pull out my paints and brushes, or sharpen a pencil to a perfect
              point. There&apos;s something truly magical about starting with a
              blank canvas or sheet of paper. It&apos;s a portal to a different
              world, where I can capture a fleeting moment in sunlight,
              translate a feeling into vibrant colors, or breathe life into a
              fantastical creature. It&apos;s pure joy, and in that creative
              space, I lose myself for hours, completely absorbed in the process
              of making something beautiful.
            </p>
          </div>
        </div>
      </div>
      <Gallery />
    </>
  );
}
