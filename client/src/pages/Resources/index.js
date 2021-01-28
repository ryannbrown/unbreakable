import React, { Component, useState } from "react";

import "./style.css";
import { Link } from "react-router-dom";
import waveImg from "../../media/wave-img.jpg";

export default function Resources() {
  return (
    <div className="resources-page">
      {/* <Nav></Nav> */}
      <div
        className=""
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
          marginTop: '80px'
        }}
      >
        <h1>Unbreakable Resources</h1>
      </div>
      <div className="home-wrapper">
      <div className="resources-text-content">
          <h1>You are not alone...</h1>

          <p>
            Almost 1 in 5 adults suffer from a mental illness. In 2017, roughly
            46.6 million people were diagnosed with mental health issues in the
            United States alone. If you or someone you know struggles with
            mental health, know that you are not alone. Below are a list of resource that I have found
            to be incredibly helpful.
          </p>
          <div className="resource-btn-wrapper">
          <a target="_blank" rel="noopener noreferrer" href="https://www.nami.org/Home"><button className="the-button">NAMI</button></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.samhsa.gov/find-help/national-helpline"><button className="the-button">SAMHSA Help Hotline</button></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.napab.org/"><button className="the-button">NAPAB</button></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.crisistextline.org/"><button className="the-button">CRISIS TEXT LINE</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}
