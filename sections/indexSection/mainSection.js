"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function MainSection() {
  let [background1, setBackground1] = useState("");
  let [background2, setBackground2] = useState("");
  const media = MEDIA;
  let slideCount = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (media !== undefined) {
        if (media.images !== undefined) {
          if (slideCount < 0) {
            slideCount = media.images.length - 1;
          } else if (slideCount == media.images.length) {
            slideCount = 0;
          }
          let mediaImage = media.images[slideCount];
          setBackground1((count) => (count = mediaImage));
          setInterval(
            setBackground2((count) => (count = mediaImage)),
            9000
          );
        } else {
          console.log("error getting .images does not exist");
        }
      } else {
        console.log("error getting media does not exist");
      }

      slideCount++;
    }, 5000);
    return () => clearInterval(interval);
    console.log("hello");
  }, []);

  return (
    <section className="h-screen w-full bg-gradient-to-r from-slate-400 via-slate-700 to-black text-[#ffe9e9]">
      <img
        className="absolute w-full opacity-20 h-[102%]"
        src={background1}
        alt=""
      />
      <div className="h-full w-full grid grid-cols-2 relative z-20">
        <section className=" h-[50%] w-[90%] m-auto ">
          <h2 className="text-3xl pb-5 pt-10 font-semibold">
            Elevate Your IT Infrastructure with Addax's Engineering Expertise!
          </h2>
          <p className="pb-5 text-lg font-medium">
            In today's dynamic digital landscape, IT infrastructure is the
            heartbeat of business success. At Addax, we're committed to not just
            keeping your systems operational but ensuring they thrive. Our IT
            Engineering services are designed to supercharge your IT environment
            and drive your business to new heights.
          </p>
          <button className="button-89 font-bold" role="button">
            Learn More
          </button>
        </section>
        <section className=" h-[80%] w-[90%] m-auto relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 480"
            className="z-10 relative"
          >
            <defs>
              <pattern
                id="img1"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <image
                  href={background2}
                  x="0"
                  y="0"
                  width="1"
                  height="1"
                  preserveAspectRatio="xMidYMid slice"
                  opacity={0.9}
                />
              </pattern>
            </defs>
            <path
              d="M459.5 283q2.5 43-37.5 64.5t-70 39Q322 404 291.5 438t-67 9q-36.5-25-68-39.5t-71-31Q46 360 53 317t-13-80.5Q20 199 47 168t38-75q11-44 58.5-35T226 39q35-28 76-16.5T356.5 78q13.5 44 57 61t43.5 59q0 42 2.5 85Z"
              fill="url(#img1)"
            ></path>
          </svg>
          <svg viewBox="-5 -15 500 500" className="rotate-180 absolute top-0 ">
            <path
              fill="#5c6879"
              d="M459.5 283q2.5 43-37.5 64.5t-70 39Q322 404 291.5 438t-67 9q-36.5-25-68-39.5t-71-31Q46 360 53 317t-13-80.5Q20 199 47 168t38-75q11-44 58.5-35T226 39q35-28 76-16.5T356.5 78q13.5 44 57 61t43.5 59q0 42 2.5 85Z"
            ></path>
          </svg>
        </section>
      </div>
    </section>
  );
}
// ----------------------------------------------------------------

// ----------------------------------------------------------------
const MEDIA = {
  images: [
    "/img/woman-smiling-texting-smart-phone-generated-by-ai.jpg",
    "/img/using-digital-tablet-generative-ai-two-inventive-businesspeople.jpg",
    "/img/kids-with-vr-glasses-abstract-futuristic-school-classroom.jpg",
  ],
};
