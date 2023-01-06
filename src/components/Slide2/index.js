import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Cards from "../Cards";

// Import Swiper styles
import "./index.css";
import "swiper/css";

export default function Slide2() {
  return (
    <Swiper
      className="back"
      spaceBetween={41}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          nome="JavaScript"
          desc="..."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          nome="JavaScript"
          desc="..."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          nome="JavaScript"
          desc="..."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          nome="JavaScript"
          desc="..."
        />
      </SwiperSlide>
    </Swiper>
  );
}
