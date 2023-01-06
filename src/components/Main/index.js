import React from "react";
import "./index.css";
import Perfil from "../../Assets/perfil.jpeg";
import Slide from "../Slide";
import Slide2 from "../Slide2";

import { Image } from "react-bootstrap";

export default function Main() {
  return (
    <div>
      <section class="containerM">
        <div class="a-46W3X">
          <p>Olá seja Bem-vindo</p>
        </div>
        <div class="a-pZ9mM">
          <p>
            Olá como vai. Me chamo Pedro, mas pode me chamar de Lira.{" "}
            <a href="https://www.canva.com/design/DAFHus72YDE/DkLdGBHUpnVdP9wvCEb7rw/view?utm" target="_blank">Clique aqui</a> para ver a carta de apresentação.
          </p>
        </div>
        <div class="a-K8Ay4">
          <Image src={Perfil} roundedCircle />
        </div>
        <div class="a-r2goO">
          <Slide />
        </div>
        <div class="a-83XNQ">
          <Slide2 />{" "}
        </div>
      </section>
    </div>
  );
}
