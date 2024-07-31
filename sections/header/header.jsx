import HorizontalVideoCard from "@/components/horizontal_video_card";

export default function Header() {
  const icon = ICONS_videos;
  const text = TEXT_header;
  const img = IMAGES_header;
  return (
    <header className="  z-40 bg-white">
      <hr />
      <section>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pt-4 pb-4 h-32 ">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="" className="h-8" alt="" />
            <span className="self-center text-20xl font-semibold whitespace-nowrap dark:text-white">
              Addax Tech Repairs
            </span>
          </a>

          <div className="">
            <ul className="flex rounded-lg  flex-row md:space-x-8">
              <li>
                <HorizontalVideoCard
                  text={text.phone}
                  src={icon.phone}
                ></HorizontalVideoCard>
              </li>
              <li>
                <HorizontalVideoCard
                  text={text.clock}
                  src={icon.clock}
                ></HorizontalVideoCard>
              </li>
              <li>
                <HorizontalVideoCard
                  text={text.truck}
                  src={icon.truck}
                ></HorizontalVideoCard>
              </li>
              {/* <li>
                <HorizontalVideoCard
                  text={text.truck}
                  src={icon.truck}
                ></HorizontalVideoCard>
              </li> */}
            </ul>
          </div>
        </div>
      </section>
    </header>
  );
}
// remember to put all of these in each jsx file into their own files
const ICONS_videos = {
  clock: "media/clock2.mp4",
  phone: "media/phone2.mp4",
  truck: "media/truck2.mp4",
};

const TEXT_header = {
  clock: "FROM 9:00 AM TO 6:00 PM",
  phone: "+1 (405) 633-3479",
  truck: "SPEEDY SERVICE",
};
const IMAGES_header = {
  PS5: "img/Sony_PS5_With_Controller_And_Logo.png",
};
