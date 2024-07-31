"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function BannerSection() {
  // const textRef = useRef(null);
  // const [textWidth, setTextWidth] = useState(0);

  // const updateTextWidth = () => {
  //   if (textRef.current) {
  //     setTextWidth(textRef.current.scrollWidth);
  //   }
  // };

  // useEffect(() => {
  //   // Update text width on initial render
  //   updateTextWidth();

  //   // Update text width on window resize
  //   window.addEventListener("resize", updateTextWidth);

  //   // Cleanup listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", updateTextWidth);
  //   };
  // }, []);

  return (
    <section className=" w-full  sm:16 h-24  fixed -z-50 ">
      <img
        className=" absolute w-full h-full object-cover "
        src="img/black-white-background_23-2150530972.jpg"
        alt=""
      />
      <div className="h-full absolute w-screen bg-black opacity-40"></div>

      <p className="h-full w-full text-2xl text-white text-center absolute sm:pt-4 pt-5  ">
        Fast, Reliable Tech Repairs - Get Back Online Today!
      </p>

      {/* <motion.div
        ref={textRef}
        animate={{ x: [`${textWidth}px`, `0%`] }}
        transition={{
          duration: 14,
          ease: "linear",
          delay: 0,
        }}
      >
        <p className="h-full w-full text-2xl text-white text-center  absolute md:pt-1 pt-4 banner_section_text whitespace-nowrap">
          Fast, Reliable Tech Repairs - Get Back Online Today!
        </p>
      </motion.div> */}
    </section>
  );
}
