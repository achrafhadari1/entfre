"use client";
import React from "react";
import { motion } from "framer-motion";

export const Horizontalsection = () => {
  return (
    <div className="mt-7 mb-7">
      <div className="px-10 flex justify-between items-center">
        <div className="casta text-[4rem]">Section Title</div>
        <div>
          <img src="/nexts.svg" className="w-[40px]" alt="" />
        </div>
      </div>
      <div className="px-10 w-[40%] mb-6 text-[1.4rem]">
        Our graphic design topics cover a wide range of essential concepts, from
        typography and color theory to branding and UI/UX design. Written by us
        to help you, these articles provide insights into the latest design
        trends, tools, and techniques, ensuring you stay ahead in the creative
        industry.
      </div>
      <div className="flex gap-8 overflow-hidden">
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
            className="flex flex-col w-[33.33%]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={article.img} alt="" className="object-cover h-[65%] " />
            <div className="p-4 petrona-italic text-[1.3rem]">
              {article.author}
            </div>
            <div className="text-3xl m-auto w-4/5 casta">{article.title}</div>
            <div className="p-4 text-right petrona-italic text-[1.3rem]">
              {article.date}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
