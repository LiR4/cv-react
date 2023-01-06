import React from "react";
import Header from "../../Components/Header";
import Main from "../../Components/Main";
import Footer from "../../Components/Footer";

import "./index.css"

export default function Home(){
    return (
        <div className="App">
          <div className="container">
            <div class="a-w0nw1">
              <Header />
            </div>
            <div class="a-MZ7AG"><div class="line"></div></div>
            <div class="a-16VNL">
                <Main/>
            </div>
            <div class="a-jYAK1-0"><Footer/></div>
          </div>
        </div>
    );
}