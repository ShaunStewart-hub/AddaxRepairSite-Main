import Image from "next/image";

export default function ImageSection() {
  return (
    <section className="p-16">
      <div className=" h-[80%] w-full  grid grid-cols-[1fr_3fr_1fr]">
        <div className="h-full w-full">
          <img
            className="h-full  scale-x-[-1]"
            src="https://i.pinimg.com/originals/f1/20/39/f12039e8794c2b6924db2ae446b21ba9.jpg"
            alt=""
          />
        </div>
        <div className=" bg-gray-100  w-full h-full">
          <img
            className="h-full w-full block opacity-80 round"
            src="https://img.freepik.com/premium-photo/cell-phone-with-broken-display-disassembled-gadget-ai-generated_925376-2152.jpg?w=900"
            alt=""
          />
        </div>
        <div className=" h-full w-full">
          <img
            className="h-full"
            src="https://i.pinimg.com/originals/f1/20/39/f12039e8794c2b6924db2ae446b21ba9.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
