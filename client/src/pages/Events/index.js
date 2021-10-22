import React, { Component, useState } from "react";

import "./style.css";
import Prismic from "prismic-javascript";
// import { Date, Link, RichText } from "prismic-reactjs";
import linkResolver from "../../utils/linkResolver";
// import logo from '../../media/logo.png'
import { Link } from "react-router-dom";
import Test from "../../components/Test";
import Nav from "../../components/Nav";
import waveImg from "../../media/wave-img.png";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
var Moment = require("moment");

require("dotenv").config();
const { REACT_APP_PRISMIC_API, REACT_APP_PRISMIC_TOKEN } = process.env;

export default function Events() {
  const apiEndpoint = REACT_APP_PRISMIC_API;
  const accessToken = REACT_APP_PRISMIC_TOKEN;

  // This is where you would add your access token for a Private repository

  var Client = Prismic.client(apiEndpoint, { accessToken });
  var d = new Date();
  const nowMonth = d.getMonth();
  const nowYear = d.getYear();

  const [doc, setDocData] = React.useState(null);
  const [dates, setDate] = React.useState(null);
  const [year, setDateYear] = React.useState(nowYear);
  const [month, setDateMonth] = React.useState(nowMonth);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "events"),
        { orderings: "[my.events.event_date desc]" }
      );
      if (response) {
        setDocData(response.results);
        console.log(response.results);
      }
    };
    fetchData();
    // fetchDates()
  }, []);



  if (doc) {
    var data = doc.map(
      (post) => (
        <div className="event-post">

            {/* <img
              className="blog-img"
              alt="cover"
              src={post.data.blog_image.url}
              /> */}
          {/* <p>Date</p>
            <h1>Title</h1>
          <p>Location</p>
          <a>Learn More</a> */}
          <p>{Moment(post.data.event_date).format('llll')}</p>
            <p>{post.data.event_name[0].text}</p>
          <p>{post.data.event_location[0].text}</p>
          <a href={post.data.event_link.url} target="_blank" rel="noreferrer">Learn More</a>

        </div>
      )
      // <div>post</div>
      // <h1>{RichText.asText(doc.data.title)}</h1>
    );

    // var months = allMonths.map((month, i) => (
    //   <option value={month}>{month}</option>
    // ));
    // var years = allYears.map((year, i) => (
    //   <option value={year}>{year}</option>
    // ));
  }

  return (
    <div>
      {/* <Nav></Nav> */}
      <div
        className="blog-blue-block"
        style={{
          backgroundImage: `url(${waveImg})`,
          // backgroundColor: `#007BB7`,
          // opacity: `100%`,
          backgroundBlendMode: `multiply`,
          backgroundPosition: `center`,
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
        <h1>Upcoming Events</h1>
        <p>Featuring Carolyn Skowron, author of Unbreakable</p>
      </div>
      <div className="home-wrapper">
        <div>
          {doc ? (
            <div className="event-wrapper">
              {doc.length > 0 ?
               <div style={{width: '100%'}}>
               {data}
               </div> : <div>No Items for these dates</div>
            }
             
            
            </div>
          ) : (
            <div className="loading-block">
            <ClipLoader
            // css={override}
            size={35}
            color={"#007BB7"}
            // loading={this.state.loading}
          />
          </div>
          )}
        </div>
        {/* <Test></Test> */}
      </div>
    </div>
  );
}
