"use client";

import Header from "@/components/Header/header";
import About from "@/components/sections/About/about";
import Experience from "@/components/sections/Experience/experience";
import Projects from "@/components/sections/Projects/projects";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Projects />
    </>
  );
}
