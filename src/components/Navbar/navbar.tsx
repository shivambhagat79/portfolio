import { Major_Mono_Display } from "next/font/google";
import Link from "./link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const major_mono = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  return (
    <nav className="w-screen border-b-2 border-black px-5 lg:px-30 xl:px-60 py-2 z-50">
      <div className="flex justify-between items-center">
        <div
          className={`${major_mono.className} font-bold text-2xl md:text-4xl bg-black text-white px-4 py-2`}
        >
          Welcome
        </div>
        <div className="nav-links hidden md:block transition-all">
          <Link url="/">Home</Link>
          <Link url="/about">About</Link>
          <Link url="/for_fun">For Fun</Link>
          <Link url="/resume">Resume</Link>
        </div>
        <button className="md:hidden transition-all border-2 border-black aspect-square p-3 flex justify-center items-center hover:p-2 hover:text-white hover:bg-black">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
}
