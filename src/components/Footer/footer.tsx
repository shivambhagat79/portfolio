"use client";

export default function Footer() {
  return (
    <footer className="w-screen px-60 py-20 border-t-2 border-black text-lg ">
      <div className=" text-end pb-10 border-b-2 border-black">
        <div className="px-4 py-2 border-2 inline-block border-black">
          Found my 生きがい
        </div>
        <div className="my-4">Always learning, Open to critique.</div>
        <div className=" bg-black inline-block text-white px-4 py-2">
          Built from scratch, with ❤️
        </div>
      </div>
      <div className="mt-20 grid grid-cols-3 text-end">
        <div>
          <div className=" h-16 flex items-end justify-end">
            {"Let's grab some Coffee,"}
            <br />
            Or lemon Ice Tea
          </div>
          <div className="mt-5 flex items-center justify-end">
            <div className="rounded-full bg-emerald-500 h-5 w-5 me-2"></div>
            <a
              href="mailto:shivambhagat2279@gmail.com"
              target="_blank"
              className="text-teal-700 hover:text-teal-900 transition-all hover:underline"
            >
              shivambhagat2279@gmail.com
            </a>
          </div>
        </div>
        <div>
          <div className="h-16 flex items-end justify-end">
            Find me, <br />
            {"let's connect"}
          </div>
          <div className="mt-5 flex items-center justify-end">
            <div className="rounded-full bg-sky-500 h-5 w-5 me-2"></div>
            <a
              href="https://www.linkedin.com/in/shivam-bhagat-03734325a/"
              target="_blank"
              className="text-teal-700 hover:text-teal-900 transition-all hover:underline"
            >
              LinkedIn
            </a>
            <div className="rounded-full bg-fuchsia-500 h-5 w-5 me-2 ms-4"></div>
            <a
              href="https://www.instagram.com/shivam_bhagat_79/"
              target="_blank"
              className="text-teal-700 hover:text-teal-900 transition-all hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <div className="h-16 flex items-end justify-end"> Peek, my code</div>
          <div className="mt-5 flex items-center justify-end">
            <div className="rounded-full bg-orange-500 h-5 w-5 me-2 ms-4"></div>
            <a
              href="https://github.com/shivambhagat79"
              target="_blank"
              className="text-teal-200 hover:text-teal-500 transition-all hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
