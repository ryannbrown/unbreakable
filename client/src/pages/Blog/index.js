import React, { Component, useState } from "react";

import "./style.css";
import Prismic from "prismic-javascript";
// import { Date, Link, RichText } from "prismic-reactjs";
import linkResolver from "../../utils/linkResolver";
// import logo from '../../media/logo.png'
import { Link } from "react-router-dom";
import Test from "../../components/Test";
import Nav from "../../components/Nav";
import waveImg from "../../media/wave-img.jpg";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

require("dotenv").config();
const { REACT_APP_PRISMIC_API, REACT_APP_PRISMIC_TOKEN } = process.env;

export default function Blog() {
  const apiEndpoint = REACT_APP_PRISMIC_API;
  const accessToken = REACT_APP_PRISMIC_TOKEN;

  // This is where you would add your access token for a Private repository

  var Client = Prismic.client(apiEndpoint, { accessToken });

  const [doc, setDocData] = React.useState(null);
  const [dates, setDate] = React.useState(null);
  const [year, setDateYear] = React.useState(2020);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "blog"),
        { orderings: "[my.blog.post_date desc]" }
      );
      if (response) {
        setDocData(response.results);
        console.log(response.results);
      }
    };
    fetchData();
    // fetchDates()
  }, []);


const queryByDate = (e) => {
  let month = e.target.value;

  const fetchDates = async (month, year) => {
    const response = await Client.query(
      Prismic.Predicates.month('my.blog.post_date', month),
      Prismic.Predicates.year('my.blog.post_date', year)
    );
    if (response) {
      setDocData(response.results);
      console.log("response", response.results);
    }
  }
  fetchDates(month, year);
}


const setYear = (e) => {
  let theYear = e.target.value
  console.log(theYear)
  setDateYear(theYear)
  // console.log(e.target.value)
}

const someYears = ["2020", "2019"]
const monthsOfYear= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


  if (doc) {
    var data = doc.map(
      (post) => (
        <div className="blog-post">
          <Link to={`/blog/${post.uid}`}>
            {/* <img
              className="blog-img"
              alt="cover"
              src={post.data.blog_image.url}
              /> */}
            <h1>{post.data.title[0].text}</h1>
          </Link>
          <p>{post.data.post_date}</p>
          <p>{post.data.short_description[0].text}</p>
        </div>
      )
      // <div>post</div>
      // <h1>{RichText.asText(doc.data.title)}</h1>
    );

    var months = monthsOfYear.map((month, i) => (
      <option value={month}>{month}</option>
    ));
    var years = someYears.map((year, i) => (
      <option value={year}>{year}</option>
    ));
  }

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
        <h1>The Unbreakable Blog</h1>
      </div>
      <div className="home-wrapper">
        {/* filter is hidden for now */}
        {/* <select onChange={queryByDate}>
        {months}
        </select>
        <select onChange={setYear}>
        {years}
        </select> */}
      
        <div>
          {doc ? (
            <div className="blog-wrapper">
              {doc.length > 0 ?
               <div>
               {data}
               </div> : <div>No Items for these dates</div>
            }
             
            
            </div>
          ) : (
            <div className="loading-block">
            <ClipLoader
            // css={override}
            size={35}
            color={"#196196"}
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
