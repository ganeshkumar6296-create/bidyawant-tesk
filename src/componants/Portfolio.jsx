import React from "react";

import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import portfolioData from "../data/portfolioData";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="bg-primary md:-mt-56 -mt-12 relative z-10 overflow-hidden"
    >
      <div className="md:pb-32 pb-16 pt-10">
        <div className="responsive-mx">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[1px] bg-[#153a68]"></div>

            <span className="uppercase tracking-[4px] text-[11px] font-mono-400 text-[#153a68]">
              Portfolio
            </span>
          </div>

          <h2 className="font-rajdhani-700 uppercase leading-none text-[#0b1524] text-5xl md:text-6xl lg:text-7xl tracking-wide">
            Precision
            <br />
            applied at
            <br />
            scale
          </h2>

          <div className="flex justify-end gap-3 -mt-5 md:-mt-0">
            <button className="portfolio-prev md:w-10 md:h-10 w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center hover:bg-[#163964] hover:text-white transition">
              <ChevronLeft size={20} />
            </button>

            <button className="portfolio-next md:w-10 md:h-10 w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center hover:bg-[#163964] hover:text-white transition">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Swiper */}

        <div className="mt-5">
          <Swiper
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: ".portfolio-prev",
              nextEl: ".portfolio-next",
            }}
            loop
            autoplay={{
              delay: 3000,
            }}
            spaceBetween={15}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {portfolioData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="group bg-[#edf2f7] border rounded-md md:h-[520px] h-[380px] cursor-pointer border-[#d7dde7] overflow-hidden">
                  {/* Image */}

                  <div className="overflow-hidden sm:h-[300px] h-[200px]">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}

                  <div className="md:p-5 p-4">
                    <div className="flex justify-between text-[8px] uppercase tracking-[3px] text-gray-500">
                      <span>{item.category}</span>

                      <span>{item.type}</span>
                    </div>

                    <h2 className="mt-4 md:text-5xl text-3xl uppercase font-rajdhani-700 text-[#0b1524]">
                      {item.title}
                    </h2>

                    <div className="flex justify-between items-center md:mt-5 mt-3 mb-4">
                      <span className="uppercase text-[10px] tracking-[3px]">
                        {item.case}
                      </span>

                      <button className="border px-5 py-2 uppercase text-[10px] tracking-[2px] hover:bg-[#163964] hover:text-white transition">
                        View Study
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
