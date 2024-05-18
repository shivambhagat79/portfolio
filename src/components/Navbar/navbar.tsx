import localFont from "next/font/local";
import Link from "./link";

const againstFont = localFont({
  src: "../../../public/fonts/against regular.ttf",
});

export default function Navbar() {
  return (
    <nav className="w-screen border-b-2 border-black px-60 py-5">
      <div className="flex justify-between">
        <div className={`${againstFont.className} font-bold text-xl`}>
          Welcome
        </div>
        <div className="nav-links">
          <Link url="/home">Home</Link>
          <Link url="/about">About</Link>
          <Link url="/gallery">Gallery</Link>
          <Link url="/resume">Resume</Link>
        </div>
      </div>
    </nav>
  );
}
