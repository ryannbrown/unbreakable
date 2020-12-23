import React, { Component, useState } from "react";
// import logo from './logo.svg';
import "./style.css";
import Prismic from "prismic-javascript";
import { Date, Link, RichText } from "prismic-reactjs";
import linkResolver from "../../utils/linkResolver";
import waveImg from "../../media/wave-img.jpg";
import { FacebookShareCount, FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon } from "react-share";

// import "./style.css"
// import logo from '../../media/logo.png'
const { REACT_APP_PRISMIC_API, REACT_APP_PRISMIC_TOKEN } = process.env;

export default function BlogPost(props) {
  const apiEndpoint = REACT_APP_PRISMIC_API;
  const accessToken = REACT_APP_PRISMIC_TOKEN;

  const Client = Prismic.client(apiEndpoint, { accessToken });

  const [doc, setDocData] = React.useState(null);
  const [shareUrl, setShareUrl] = React.useState(null);

  React.useEffect(() => {
    // let id = Object.values(this.props.match.params);
    let param = props.match.params.post;
    // console.log(props.match.params.post)
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("my.blog.uid", param)
      );
      if (response) {
        setDocData(response.results[0]);
        console.log(response.results);
      }
    };
    fetchData();
    const fetchPlugins = () => {
      const script = document.createElement("script");

      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=668236647227571&autoLogAppEvents=1";
      script.async = true;
      var url = 'https://unbreakable.herokuapp.com/' + window.location.pathname;
      console.log("url", url);
      setShareUrl(url);

      document.body.appendChild(script);
    };
    fetchPlugins();
  }, []);

  return (
    <div>
      <div className="blog-post-page">
        <div className="back-link">
          <a href="/blog">back</a>
        </div>
        {doc ? (
          <div className="blog-content">
            {/* <div className="off-image-container">
                              <img
                                className="works-image img-responsive"
                                src={doc.data.blog_image.url}
                              />
                            </div> */}
            <h1 className="blog-title">{RichText.asText(doc.data.title)}</h1>
            <RichText
              className="modal-description"
              render={doc.data.blog_text}
              linkResolver={linkResolver}
            />
            {/* <p >{thisModal.description}</p> */}
          </div>
        ) : (
          <div> Loading</div>
        )}
        <div className="share-block">
        <div className="share-btns">
          <FacebookShareButton url={shareUrl}><FacebookIcon size={32} round={true}></FacebookIcon></FacebookShareButton>
          <TwitterShareButton url={shareUrl}><TwitterIcon size={32} round={true}></TwitterIcon></TwitterShareButton>
          <LinkedinShareButton url={shareUrl}><LinkedinIcon size={32} round={true}></LinkedinIcon></LinkedinShareButton>
        </div>
        <p>Share</p>
        </div>
      </div>
    </div>
  );
}