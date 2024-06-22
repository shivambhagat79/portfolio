"use client";

import { Major_Mono_Display } from "next/font/google";
import NavLink from "./link";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { useEffect } from "react";
import "./navbar.css";
import resume from "../../../public/pdf/resume.pdf";

const major_mono = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen(!navOpen);
  }

  useEffect(function mount() {
    if (navOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  });

  return (
    <>
      <nav
        className={cn(
          "w-screen border-b-2 border-black px-5 lg:px-30 xl:px-60 py-2 z-50 transition-all duration-500",
          navOpen ? " bg-blur" : ""
        )}
      >
        <div className="flex justify-between items-center">
          <div
            className={`${major_mono.className} font-bold text-2xl md:text-4xl bg-black text-white px-4 py-2`}
          >
            Welcome
          </div>
          <div className="nav-links hidden md:block transition-all">
            <NavLink url="/">Home</NavLink>
            <NavLink url="/about">About</NavLink>
            <NavLink url="/for_fun">For Fun</NavLink>
            <NavLink url="https://drive.google.com/file/d/1Qp5I0zN6eE4iV3hs1UK4AzWtNQVPEhfN/view?usp=sharing">
              Resume
            </NavLink>
          </div>
          <button
            className="md:hidden transition-all border-2 border-black aspect-square p-3 flex justify-center items-center hover:p-[0.7rem] hover:text-white hover:bg-black"
            onClick={toggleNav}
          >
            <FontAwesomeIcon
              icon={navOpen ? faClose : faBars}
              className="transition-all"
            />
          </button>
        </div>
      </nav>
      <div
        className={cn(
          "h-0 w-screen transition-all duration-500 overflow-hidden absolute z-50",
          navOpen ? "h-screen bg-blur" : ""
        )}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <Link
            href="/"
            className="text-4xl mb-7 hover:-translate-y-2 transition-all hover:text-teal-900"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-4xl my-7 hover:-translate-y-2 transition-all hover:text-teal-900"
          >
            About
          </Link>
          <Link
            href="/for_fun"
            className="text-4xl my-7 hover:-translate-y-2 transition-all hover:text-teal-900"
          >
            For Fun
          </Link>
          <Link
            href="https://drive.google.com/file/d/1Qp5I0zN6eE4iV3hs1UK4AzWtNQVPEhfN/view?usp=sharing"
            className="text-4xl my-7 hover:-translate-y-2 transition-all hover:text-teal-900"
          >
            Resume
          </Link>
        </div>
      </div>
    </>
  );
}
