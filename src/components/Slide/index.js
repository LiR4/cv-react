import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Cards from "../Cards";

// Import Swiper styles
import "./index.css";
import "swiper/css";

export default function Slide() {
  return (
    <Swiper
      id="hab"
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
          desc="1 ano de experiência"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          nome="HTML"
          desc="2 anos de experiência"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          nome="CSS"
          desc="2 anos de experiência"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          nome="Python"
          desc="2 anos de experiência"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          nome="React"
          desc="1 ano de experiência"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          nome="React Native"
          desc="1 ano de experiência"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
          nome="Bootstrap"
          desc="2 anos de experiência"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          nome="Figma"
          desc="2 anos de experiência"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
          nome="Docker"
          desc="1 ano de experiência"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
          nome="Linux"
          desc="2 anos de experiência"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          nome="Git"
          desc="1 ano de experiência"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
          nome="MySQL"
          desc="1 ano de experiência"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          nome="Node.JS"
          desc="1 ano de experiência"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="data:image/png;base64,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"
          nome="Curso Técnico"
          desc="Curso de Desenvolvimento de Sistemas (Formado - 2022)"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          icone="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Senac_logo.svg/1200px-Senac_logo.svg.png"
          nome="Curso Superior"
          desc="Ciência da computação (Cursando)"
        />
      </SwiperSlide>
    </Swiper>
  );
}
