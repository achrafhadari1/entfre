"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

export const Scrollingsection = () => {
  return (
    <div className="relative flex flex-col min-h-screen casta">
      <div className="flex w-full">
        {/* Quote */}
        <div className="w-1/2 flex items-center justify-center p-10 sticky top-0 h-screen">
          <div
            className=" text-2xl font-bold text-[2.7rem]
  p-4
  text-center"
          >
            "I think cinema, movies, and magic have always been closely
            associated. The very earliest people who made film were magicians."{" "}
            <br />
            <span className="text-[#0068ff]">—</span>
            <br /> Francis Ford Coppola
          </div>
        </div>

        {/* Articles  */}
        <div className="w-1/2 flex flex-col space-y-10 p-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              className="h-auto w-full "
              src="https://a.ltrbxd.com/resized/sm/upload/m6/rc/d8/iy/debs-0-1920-0-0.jpg?k=2719bfa07e"
              alt=""
            />
            <div className="font-bold mt-2 text-[3rem]">
              Love Is Harder Than Crime
            </div>
            <div className="text-[#0068ff] text-[1.8rem]">
              for twenty years, D.E.B.S. has blurred the lines between hero and
              villain
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              className="h-auto w-full "
              src="https://a.ltrbxd.com/resized/story/image/6/4/3/8/4/4/7/shard/35364/image-tjijzrij-960-960-0-0-fill.jpg?v=793d076718"
              alt=""
            />
            <div className="font-bold mt-2 text-[3rem]">
              La Cocina | Fresh Takes
            </div>
            <div className="text-[#0068ff] text-[1.8rem]">
              Fresh Takes is Picturehouse's space for the next generation of
              film lovers
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              className="h-auto w-full "
              src="https://a.ltrbxd.com/sm/upload/nt/a8/du/pj/frames%20of%20ref.jpg?k=bb22674511"
              alt=""
            />
            <div className="font-bold mt-2 text-[3rem]">
              Frames of Reference{" "}
            </div>
            <div className="text-[#0068ff] text-[1.8rem]">
              the art and psychology of movie name-drops (and who gets the
              shout-outs)
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              className="h-auto w-full "
              src="https://a.ltrbxd.com/sm/upload/g4/7z/rc/na/club.jpeg?k=cdb4002ab9"
              alt=""
            />
            <div className="font-bold mt-2 text-[3rem]">Everybody Knows </div>
            <div className="text-[#0068ff] text-[1.8rem]">
              Atom Egoyan on the collective grief and cathartic healing of
              Exotica
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
