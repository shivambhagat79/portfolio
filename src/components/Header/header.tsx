import localFont from "next/font/local";
import Navbar from "../Navbar/navbar";

const againstFont = localFont({
  src: "../../../public/fonts/against regular.ttf",
});

export default function Header() {
  return (
    <div className="h-screen w-screen border-b-2 border-black">
      <Navbar />
      <div className="w-full h-5/6 px-60 flex justify-center items-center">
        <div className="w-full">
          <div className="w-full flex border-b-2 border-black justify-between">
            <div>
              Based in{" "}
              <span className={`${againstFont.className} font-bold`}>
                Punjab
              </span>
            </div>
            <div>Status : Open to work</div>
          </div>
          <div className={`${againstFont.className} text-8xl mt-9 mb-24`}>
            Hi, this is Shivam.
          </div>
          <div>Currently: IIT Ropar, C.S.E.</div>
          <div>Delivering: Smiles</div>
        </div>
      </div>
    </div>
  );
}
