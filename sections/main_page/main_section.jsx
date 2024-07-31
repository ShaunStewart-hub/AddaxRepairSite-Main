"use client";
import { motion } from "framer-motion";

export default function MainSection() {
  const img = IMAGES_header;
  return (
    <section className="w-full overflow-hidden">
      <div>
        <div className=" grid  grid-cols-[325px_1fr] mr-4 ml-4 relative ">
          <div className=" bg-[#333333] text-zinc-200 w-full h-16 flex items-center justify-center ">
            <h3 className=" font-medium text-lg">CATEGORIES</h3>
          </div>
          <div className="  w-full h-16 relative">
            <form action="" method="get">
              <input
                className=" w-full outline-none border-none h-16 pr-20 pl-20 text-right bg-gray-100"
                type="text"
                name="search"
                id="search"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
        <section className="h-72 w-[325px] bg-white absolute z-40 ml-4 text-center pl-4 pr-4 uppercase text-sm font-medium">
          <ul>
            <li className="p-4 pt-4 w-full cursor-pointer hover:bg-slate-200">
              Smartphones
            </li>
            <hr />
            <li className="p-4 w-full cursor-pointer hover:bg-slate-200">
              Game Consoles
            </li>
            <hr />
            <li className="p-4 w-full cursor-pointer hover:bg-slate-200">
              Tablets & Ipads
            </li>
            <hr />
            <li className="p-4 w-full cursor-pointer hover:bg-slate-200">
              Desktops & Laptops
            </li>
            <hr />
            <li className="p-4 w-full cursor-pointer hover:bg-slate-200">
              Board Components
            </li>
            <hr />
          </ul>
        </section>
      </div>

      <div className=" relative">
        <div className=" grid  grid-cols-2 h-72">
          <div className=" bg-[#077187] h-full w-full"></div>
          <div className=" bg-[#E4C5AF] h-full w-full relative">
            <div className=" w-full h-full z-50 absolute">
              <img
                src="media/output-onlinegiftools.gif"
                alt=""
                className=" w-80 h-full absolute bottom-0 right-0 invisible lg:visible "
              />
            </div>

            <div className="  pl-24 pt-4">
              <h3 className="text-2xl font-bold leading-10">
                PLAYSTATION 5 HDMI REPAIRS
              </h3>
              <p className=" font-bold text-3xl leading-10 ml-20">
                <span className=" text-5xl  z-50 relative ">25% </span>
                OFF
              </p>
              <p className=" text-sm font-medium z-50 relative m-2 ">
                Save Your Device From the Junkyard
              </p>
            </div>
          </div>
        </div>
        <motion.div
          className=" absolute top-0 w-full h-full  "
          animate={{ x: ["-100%", "0%", "2%", "0"] }}
          transition={{
            duration: 1,
          }}
        >
          <img
            src={img.PS5}
            alt=""
            className=" w-56 block ml-[45%] mr-[65%] "
          />
        </motion.div>
      </div>
    </section>
  );
}

const IMAGES_header = {
  PS5: "img/Sony_PS5_With_Controller_And_Logo.png",
};
