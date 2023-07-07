import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoWordpress } from "react-icons/bi";
import { DiSass } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";

// import required modules
import { Pagination } from "swiper/modules";
import SlideSwiper from "./SlideSwiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SlideSwiper color="#fbbd3b">
            <TbBrandJavascript />
          </SlideSwiper>
        </SwiperSlide>
        <SwiperSlide>
          <SlideSwiper color="#3498db">
            <FaReact />
          </SlideSwiper>
        </SwiperSlide>
        <SwiperSlide>
          <SlideSwiper color="#000">
            <TbBrandNextjs />
          </SlideSwiper>
        </SwiperSlide>
        <SwiperSlide>
          <SlideSwiper color="#f39c12">
            <AiFillHtml5 />
          </SlideSwiper>
        </SwiperSlide>
        <SwiperSlide>
          <SlideSwiper color="#3498db">
            <BiLogoCss3 />
          </SlideSwiper>
        </SwiperSlide>
        <SwiperSlide>
          <SlideSwiper color="#cf2f74 ">
            <DiSass />
          </SlideSwiper>
        </SwiperSlide>
        <SwiperSlide>
          <SlideSwiper color="#00C098">
            <BiLogoTailwindCss />
          </SlideSwiper>
        </SwiperSlide>
        <SwiperSlide>
          <SlideSwiper color="#9b59b6">
            <FaBootstrap />
          </SlideSwiper>
        </SwiperSlide>
        <SwiperSlide>
          <SlideSwiper color="#000">
            <BiLogoWordpress />
          </SlideSwiper>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
