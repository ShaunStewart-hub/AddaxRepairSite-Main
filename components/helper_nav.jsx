import Image from "next/image";

export default function HelperNav() {
  return (
    <nav
      className=" fixed
     bottom-0 right-0  w-full z-50 m-3"
    >
      <div className="  right-0 bottom-0 absolute p text-center bg-zinc-600 rounded-full text-gray-100 overflow-hidden">
        <button className="pt-4 pb-4 pl-5"> Contact Us </button>
        <span className="p-2">|</span>
        <button className="pt-4 pb-4 pr-5">more</button>
      </div>
    </nav>
  );
}
