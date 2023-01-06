import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Cards from "../Cards";

// Import Swiper styles
import "./index.css";
import "swiper/css";

export default function Slide2() {
  return (
    <Swiper
      id="pro"
      className="back"
      spaceBetween={41}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          nome="Gerador de senhas"
          desc="link"
          link="https://lir4.github.io/lira_senhas/"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          nome="Primeiro cv"
          desc="link"
          link="https://lir4.github.io/pagina-curriculo/"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          nome="Home page"
          desc="link"
          link="https://lir4.github.io/site-nike/"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          nome="API Star wars"
          desc="link"
          link="https://lir4.github.io/API_StarWars/"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          nome="API Clima"
          desc="link"
          link="https://lir4.github.io/API_clima/"
        />
      </SwiperSlide>
    </Swiper>
  );
}
