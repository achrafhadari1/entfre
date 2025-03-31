"use client";
import { motion } from "framer-motion";

export const Scrollingsection = () => {
  return (
    <div className="relative flex flex-col md:flex-row min-h-screen casta">
      {/* Quote Section (Sticky on larger screens) */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10 md:sticky md:top-0 md:h-screen ">
        <div className="text-2xl font-bold text-[2rem] md:text-[2.7rem] p-4 text-center">
          "I think cinema, movies, and magic have always been closely
          associated. The very earliest people who made film were magicians."
          <br />
          <span className="text-[#d4a857]">—</span>
          <br /> Francis Ford Coppola
        </div>
      </div>

      {/* Articles Section */}
      <div className="w-full md:w-1/2 flex flex-col space-y-10 p-6 md:p-10">
        {[
          {
            img: "https://a.ltrbxd.com/resized/sm/upload/m6/rc/d8/iy/debs-0-1920-0-0.jpg?k=2719bfa07e",
            title: "Love Is Harder Than Crime",
            subtitle:
              "For twenty years, D.E.B.S. has blurred the lines between hero and villain",
          },
          {
            img: "https://a.ltrbxd.com/resized/story/image/6/4/3/8/4/4/7/shard/35364/image-tjijzrij-960-960-0-0-fill.jpg?v=793d076718",
            title: "La Cocina | Fresh Takes",
            subtitle:
              "Fresh Takes is Picturehouse's space for the next generation of film lovers",
          },
          {
            img: "https://a.ltrbxd.com/sm/upload/nt/a8/du/pj/frames%20of%20ref.jpg?k=bb22674511",
            title: "Frames of Reference",
            subtitle:
              "The art and psychology of movie name-drops (and who gets the shout-outs)",
          },
          {
            img: "https://a.ltrbxd.com/sm/upload/g4/7z/rc/na/club.jpeg?k=cdb4002ab9",
            title: "Everybody Knows",
            subtitle:
              "Atom Egoyan on the collective grief and cathartic healing of Exotica",
          },
        ].map((article, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              className="w-full h-auto md:aspect-video object-cover "
              src={article.img}
              alt=""
            />
            <div className="font-bold mt-2 text-[2rem] md:text-[3rem]">
              {article.title}
            </div>
            <div className="text-[#d4a857] text-[1.2rem] md:text-[1.8rem]">
              {article.subtitle}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
