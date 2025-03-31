"use client";
import React from "react";
import { motion } from "framer-motion";

export const Horizontalsection = () => {
  return (
    <div className="mt-7 mb-7">
      {/* Section Title */}
      <div className="px-6 md:px-10 flex flex-col md:flex-row justify-between items-center">
        <div className="casta text-3xl md:text-[4rem] text-center md:text-left">
          Section Title
        </div>
        <div className="mt-2 md:mt-0">
          <img src="/nexts.svg" className="w-[30px] md:w-[40px]" alt="" />
        </div>
      </div>

      {/* Description */}
      <div className="px-6 md:px-10 md:w-[40%] mb-6 text-lg md:text-[1.4rem] text-center md:text-left">
        Our graphic design topics cover a wide range of essential concepts, from
        typography and color theory to branding and UI/UX design. Written by us
        to help you, these articles provide insights into the latest design
        trends, tools, and techniques, ensuring you stay ahead in the creative
        industry.
      </div>

      {/* Horizontal Scroll for Articles */}
      <div className="flex gap-6 overflow-x-auto md:overflow-hidden px-6 md:px-10 snap-x snap-mandatory">
        {[
          {
            img: "https://media.newyorker.com/photos/67c0a25e229f5b17e6077ff8/master/w_1920,c_limit/r45681.jpg",
            author: "Adam Gopnik",
            title:
              "The Classic Mystery That Prefigured the Los Angeles Wildfires",
            date: "April, 2025",
          },
          {
            img: "https://media.newyorker.com/photos/67d0960712dad421c0624aab/master/w_1920,c_limit/r45747.jpg",
            author: "Anthony Lane",
            title:
              "Kanye West bought an architectural treasure—then gave it a violent remix.",
            date: "July, 2025",
          },
          {
            img: "https://media.newyorker.com/photos/67c7722c674febccd3a7d36f/master/w_1920,c_limit/r45712.jpg",
            author: "Alice Gregory",
            title: "The luxury liner that sailed into a hurricane.",
            date: "June, 2024",
          },
        ].map((article, index) => (
          <motion.div
            key={index}
            className="flex flex-col min-w-[80%] md:min-w-[30%] snap-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={article.img}
              alt=""
              className="object-cover h-[200px] md:h-[65%] rounded-lg"
            />
            <div className="p-4 petrona-italic text-sm md:text-[1.3rem]">
              {article.author}
            </div>
            <div className="text-xl md:text-3xl m-auto w-4/5 casta">
              {article.title}
            </div>
            <div className="p-4 text-right petrona-italic text-sm md:text-[1.3rem]">
              {article.date}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
