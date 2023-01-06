import React from "react";

import "./index.css"

export default function Cards(props){
    return(
        <div className="slides">
          <div class="a-k260o"><img src={props.icone}/></div>
          <div class="a-83XNQ"><p id="nome">{props.nome}</p></div>
          <div class="a-DqwV0"><p>{props.desc}</p></div>
        </div>
    );
}