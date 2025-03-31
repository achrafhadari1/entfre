"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Scrollingsection } from "./components/main/scrolling-section";
import { Recentlyadded } from "./components/main/recently-added";
import { Horizontalsection } from "./components/main/horizontal-section";
import { Header } from "./components/main/header";

export default function Home() {
  return (
    <>
      <Header />
      <Recentlyadded />
      <Horizontalsection />
      <div className="h-auto min-h-screen flex items-center justify-center w-full casta p-6">
        <div className="flex flex-col md:flex-row justify-between w-full ">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex flex-col space-y-6 md:p-10">
            <img
              className="w-full h-auto md:h-full object-cover "
              src="https://64.media.tumblr.com/a8c68a009fc305d34a8313bdcffe7fe6/tumblr_p5uy2fX4w91w1eu8ro1_540.gifv"
              alt="Frank Ocean"
            />
          </div>

          {/* Text Section */}
          <div className="text-right flex flex-col justify-between pb-6 pl-6 pr-6 w-full md:w-1/2">
            <div>
              <h3 className="mt-4 text-[#E00] text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                FRANK OCEAN: The Artist is Absent
              </h3>
            </div>

            <div className="text-right font-medium text-sm md:text-lg max-w-2xl md:leading-tight ml-auto mt-4 md:mt-8">
              <a
                href="#"
                className="style-2 mb-4 md:mb-12 text-[#E00] underline"
              >
                Read More
              </a>
              <p className="text-[#E00] text-base md:text-[1.5rem]">
                Last month Frank Ocean’s album *Blonde* was certified platinum,
                breaking one million units sold in an age when nobody seems to
                be paying for music. But the psychedelic future soul of Frank
                Ocean has always been about meaning, not numbers. For 032c Issue
                33 (Winter 2017/18), music journalist Alex Needham got to the
                heart of *Blonde* in “The Artist is Absent,” a feature
                accompanied by a photo editorial shot by Petra Collins and
                styled by Mel Ottenberg. The print edition is still available at
                our online store.
              </p>
              <div className="mt-4 text-[1.2rem] md:text-[1.3rem] petrona-italic">
                Achraf Hadari
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-border"></div>

      <Scrollingsection />
      {/*  Next Section */}
      <div className="h-screen flex items-center justify-center w-full bg-gray-100">
        <h1 className="text-2xl font-bold">Next Section</h1>
      </div>
    </>
  );
}
