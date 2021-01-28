import React, { Component, useState } from "react";

import "./style.css";
import { Link } from "react-router-dom";
import waveImg from "../../media/wave-img.jpg";

export default function Speaking() {
  return (
    <div className="speaking-page">
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
        <h1>Have me speak at your next event!</h1>
      </div>
      {/* subscribe content is being used here to make the form easier by copying from homepage */}
      <div className="subscribe-content">
      <div className="resources-text-content">
          {/* <h1>You are not alone...</h1> */}

          <p>
           If you are interested in having me speak at an event, please contact me using the form below!
          </p>
          <div className="form-parent">
            {/* exact copy of subscribe block on hp */}
          <form
           className="subscribe-form"
            // action="https://justsoup.us7.list-manage.com/subscribe/post" method="POST"
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
             <label>Date of event</label>
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
