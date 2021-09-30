import React, { Component, useState } from "react";

import "./style.css";
import { Link } from "react-router-dom";
import waveImg from "../../media/wave-img.png";

export default function Speaking() {
  return (
    <div className="speaking-page">
      {/* <Nav></Nav> */}
      <div
        className=""
        style={{
          backgroundImage: `url(${waveImg})`,
          // backgroundColor: `#007BB7`,
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
        <h1>Contact me</h1>
      </div>
      {/* subscribe content is being used here to make the form easier by copying from homepage */}
      <div className="subscribe-content">
      <div className="resources-text-content">
          {/* <h1>You are not alone...</h1> */}

          <p>
           If you would like to connect with me, please fill out the form below!
          </p>
          <div className="form-parent">
            {/* exact copy of subscribe block on hp */}
          <form
           className="subscribe-form"
           action="https://getform.io/f/4556cbbd-d637-4287-a2f3-09f9d4add98d" method="POST"
           >
             {/* <label>Full Name</label> */}
              <input
                type="name"
                name="full_name"
                placeholder="Full name"
              />
             {/* <label>Name</label> */}
              <input
                type="email"
                name="email"
                placeholder="Email"
              />
             <label>If this is about an event, what is the date of the event?</label>
              <input
                type="date"
                name="event_date"
                placeholder="Date of event"
              />
             {/* <label>Name</label> */}
              <textarea
              rows="8"
                // type="textarea"
                name="event_description"
                placeholder="Tell me about your event"
              />
              <button>Send my way!</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
