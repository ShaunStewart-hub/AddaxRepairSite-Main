import Image from "next/image";

export default function AffiliateSection() {
  return (
    <section className="">
      <div className="h-full w-full">
        <section className="py-20 lg:py-[120px]">
          <div className="container mx-auto">
            <div className="flex flex-wrap ">
              <div className="w-full px-4 ">
                <div className="flex flex-wrap items-center justify-center">
                  <a
                    href="javascript:void(0)"
                    className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                      alt="image"
                      className="w-full h-10"
                    />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/lineicons.svg"
                      alt="image"
                      className="w-full h-10"
                    />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                      alt="image"
                      className="w-full h-10"
                    />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                      alt="image"
                      className="w-full h-10"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
