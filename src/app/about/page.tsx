import Navbar from "@/components/Navbar/navbar";
import Image from "next/image";
import profile from "/public/img/profile/profile.jpg";
import { cn } from "@/utils/cn";
import { Major_Mono_Display } from "next/font/google";

const major_mono = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400",
});

export default function About() {
  return (
    <>
      <Navbar />
      <div className="px-96 py-10 grid grid-cols-2">
        <div className="w-96 h-96 border-2 border-teal-900 shadow-[12px_12px_#064e3b] my-8 hover:shadow-none transition-all">
          <Image
            className="grayscale hover:grayscale-0 transition-all duration-1000"
            src={profile}
            alt=""
          />
        </div>
        <div className="my-8 w">
          <h1
            className={cn(
              major_mono.className,
              "text-4xl text-white bg-black px-4 py-2 inline-block"
            )}
          >
            About Me
          </h1>
          <div className="text-stone-700 text-lg grid grid-rows-3 gap-5 mt-5">
            <p>
              About Me Hi there! Im Wenjing. Im an interdisciplinary designer
              with background in UX design, creative technology and business. I
              research, design, and sometimes code. Im inspired by community and
              care about equality. I hope to use design as an instrument to help
              foster a healthy and sustainable culture for our society.
            </p>
            <p>
              During daytime, I apply my hybrid skillset to design digital
              experiences for people and solve right problems. In my spare time,
              I create experimental experiences that pose questions. I also love
              wasting time waiting for the next surf on the sea (I was born in a
              tropical island :) and growing plants.
            </p>
            <p>
              I hold a Masters degree from the Interactive Telecommunications
              Program (ITP) at Tisch, NYU, and a BBA degree in Marketing from
              City University of Hong Kong. I previously interned at Apple App
              Solutions team. I also designed some cool things at Legato
              Technologies, a boutique digital agency.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
