import React, { Component, useState } from "react";

import "./style.css";
import Prismic from "prismic-javascript";
import { Date, Link, RichText } from "prismic-reactjs";
import linkResolver from "../../utils/linkResolver";
// import logo from '../../media/logo.png'
import Nav from "../../components/Nav"
import waveImg from "../../media/wave-img.jpg";
require("dotenv").config();
const { REACT_APP_PRISMIC_API, REACT_APP_PRISMIC_TOKEN } = process.env;

export default function Blog() {
  const apiEndpoint = REACT_APP_PRISMIC_API;
  const accessToken = REACT_APP_PRISMIC_TOKEN;

  console.log(apiEndpoint, accessToken);
  // This is where you would add your access token for a Private repository

  var Client = Prismic.client(apiEndpoint, { accessToken });

  const [doc, setDocData] = React.useState(null);

  React.useEffect(() => {
  
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "blog"),
        { orderings : '[my.blog.post_date desc]' } 
      );
      if (response) {
        setDocData(response.results);
        console.log(response.results);
      }
    };
    fetchData();
  }, []);

  if (doc) {
    var data = doc.map(
      (post) => (
        <div className="blog-post">
          <a href={`/blog/${post.uid}`}>
            {/* <img
              className="blog-img"
              alt="cover"
              src={post.data.blog_image.url}
              /> */}
              <h1>{post.data.title[0].text}</h1>
          </a>
              <p>{post.data.post_date}</p>
              <p>{post.data.short_description[0].text}</p>
        </div>
      )
      // <div>post</div>
      // <h1>{RichText.asText(doc.data.title)}</h1>
    );
  }

  return (
    <div>
      <Nav></Nav>
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
          height: `50vh`,
          width: "100%",
          color: 'white',
          display: `flex`,
          flexDirection: "column",
          alignItems: `center`,
          justifyContent: "center",
          position: `relative`,
        }}
      >
        <h1>Blog Posts</h1>
      </div>
      <div className="home-wrapper">
          <div>
            {doc ? (
              <div className="blog-wrapper">
                {data}
                {/* <h1>{RichText.asText(doc.data.title)}</h1>
                             <img alt='cover' src={doc.data.blog_image.url} />
                            <RichText render={doc.data.description} linkResolver={linkResolver} /> */}
              </div>
            ) : (
              <div>No content</div>
            )}
          </div>
        </div>
    </div>
  );
}