import React, { Component, useState } from "react";

import "./style.css";
import { Link } from "react-router-dom";
import waveImg from "../../media/wave-img.jpg";

export default function Resources() {
  return (
    <div>
      {/* <Nav></Nav> */}
      <div
        className="blog-blue-block"
        style={{
          backgroundImage: `url(${waveImg})`,
          // backgroundColor: `#196196`,
          // opacity: `100%`,
          backgroundBlendMode: `multiply`,
          backgroundPosition: `center top`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          // backgroundAttachment: `fixed`,
          // height: `${this.props.height}`,
          height: `25vh`,
          width: "100%",
          color: "white",
          display: `flex`,
          flexDirection: "column",
          alignItems: `center`,
          justifyContent: "center",
          position: `relative`,
        }}
      >
        <h1>Unbreakable Resources</h1>
      </div>
      <div className="home-wrapper">
        <div>
          Hello
        </div>
      </div>
    </div>
  );
}
