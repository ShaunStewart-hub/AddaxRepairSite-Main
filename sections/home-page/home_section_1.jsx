import HorizontalVideoCard from "@/components/horizontal_video_card";
import Card from "@/components/card";
export default function Home_section_1() {
  const img = IMAGES_header;
  return (
    <div>
      <section>
        <div className=" grid  grid-cols-[325px_1fr] mr-4 ml-4 relative">
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
            <li className="p-4 pt-4 w-full">Smartphones</li>
            <hr />
            <li className="p-4 w-full">Game Consoles</li>
            <hr />
            <li className="p-4 w-full">Tablets & Ipads</li>
            <hr />
            <li className="p-4 w-full">Desktops & Laptops</li>
            <hr />
            <li className="p-4 w-full">Board Components</li>
            <hr />
          </ul>
        </section>
      </section>

      <section className=" relative">
        <div className=" grid  grid-cols-2 h-72">
          <div className=" bg-[#077187] h-full w-full"></div>
          <div className=" bg-[#E4C5AF] h-full w-full">
            <div className="  pl-24 pt-4">
              <h3 className="text-2xl font-bold leading-10">
                PLAYSTATION 5 HDMI REPAIRS
              </h3>
              <p className=" font-bold text-3xl leading-10">
                <span className=" text-5xl ">25% </span>OFF
              </p>
              <p className=" text-sm font-medium">
                Save Your Device From the Junkyard
              </p>
            </div>
          </div>
        </div>
        <div className=" absolute top-0 w-full h-full flex align-items">
          <img src={img.PS5} alt="" className=" w-56 block ml-[45%] mr-[65%]" />
        </div>
      </section>
      <section className="flex">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </section>

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
      <section className="">
        <div className="h-72 w-full bg-amber-200">
          <section class="bg-white py-20 dark:bg-dark lg:py-[120px]">
            <div class="container mx-auto">
              <div class="flex flex-wrap -mx-4">
                <div class="w-full px-4">
                  <div class="flex flex-wrap items-center justify-center">
                    <a
                      href="javascript:void(0)"
                      class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                    >
                      <img
                        src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                        alt="image"
                        class="w-full h-10"
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                    >
                      <img
                        src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/lineicons.svg"
                        alt="image"
                        class="w-full h-10"
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                    >
                      <img
                        src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                        alt="image"
                        class="w-full h-10"
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                    >
                      <img
                        src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                        alt="image"
                        class="w-full h-10"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="p-16">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="">
        <div className="h-72 w-full bg-amber-200"></div>
      </section> */}
    </div>
  );
}

const IMAGES_header = {
  PS5: "img/Sony_PS5_With_Controller_And_Logo.png",
};
