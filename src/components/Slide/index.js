import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Cards from "../Cards";

// Import Swiper styles
import "./index.css";
import "swiper/css";

export default function Slide() {
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
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          nome="HTML"
          desc="..."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          nome="CSS"
          desc="..."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          nome="Python"
          desc="..."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          nome="React"
          desc="..."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          nome="React Native"
          desc="..."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
          nome="Bootstrap"
          desc="..."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          nome="Figma"
          desc="..."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
          nome="Docker"
          desc="..."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
          nome="Linux"
          desc="..."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          nome="Git"
          desc="..."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
          nome="MySQL"
          desc="..."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          nome="Node.JS"
          desc="..."
        />
      </SwiperSlide>
    </Swiper>
  );
}
