"use client";

import Header from "@/components/Header/header";
import Experience from "@/components/sections/Experience/experience";
import Projects from "@/components/sections/Projects/projects";
import Skills from "@/components/sections/Skills/skills";

export default function Home() {
  return (
    <>
      <Header />
      <Skills />
      <Projects />
      <Experience />
    </>
  );
}
