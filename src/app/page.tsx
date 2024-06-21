"use client";

import Header from "@/components/Header/header";
import Experience from "@/components/sections/Experience/experience";
import Projects from "@/components/sections/Projects/projects";
import Skills from "@/components/sections/Skills/skills";
import { useState, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";

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

export default function Home() {
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
      <Header />
      <Skills />
      <Projects />
      <Experience />
    </>
  );
}
