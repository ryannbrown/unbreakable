import React, { Component, useState } from "react";
// import logo from './logo.svg';
import "./style.css";
import Prismic from "prismic-javascript";
import { Date, Link, RichText } from "prismic-reactjs";
import fbGrey from "../../media/fb-grey.png"
import twitGrey from "../../media/twitter-grey.png"
import linkedGrey from "../../media/linked-grey.png"
import linkResolver from "../../utils/linkResolver";
import waveImg from "../../media/wave-img.jpg";
import {Helmet} from "react-helmet"
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
               <Helmet>
                <meta charSet="utf-8" />
                <title>{RichText.asText(doc.data.title)}</title>
                <meta name="description" content={doc.data.short_description[0].text} charSet="utf-8" />
                <link rel="canonical" href={shareUrl} />
            </Helmet>
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
          <FacebookShareButton url={shareUrl}>
              {/* <FacebookIcon size={32} round={true}></FacebookIcon> */}
              <img className="social-share-icon" src={fbGrey}/>
              </FacebookShareButton>
          <TwitterShareButton url={shareUrl}><img className="social-share-icon" src={twitGrey}/></TwitterShareButton>
          <LinkedinShareButton url={shareUrl}>
              {/* <LinkedinIcon size={32} round={true}> */}
              <img className="social-share-icon" src={linkedGrey}/>
             </LinkedinShareButton>
        </div>
        <p>Share</p>
        </div>
      </div>
    </div>
  );
}
