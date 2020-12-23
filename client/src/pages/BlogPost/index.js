import React, { Component, useState } from "react";
// import logo from './logo.svg';
import "./style.css";
import Prismic from "prismic-javascript";
import { Date, Link, RichText } from "prismic-reactjs";
import linkResolver from "../../utils/linkResolver";
import waveImg from "../../media/wave-img.jpg";
// import "./style.css"
// import logo from '../../media/logo.png'
const { REACT_APP_PRISMIC_API, REACT_APP_PRISMIC_TOKEN } = process.env;

export default function BlogPost(props) {
  const apiEndpoint = REACT_APP_PRISMIC_API;
  const accessToken = REACT_APP_PRISMIC_TOKEN;

  const Client = Prismic.client(apiEndpoint, { accessToken });

  const [doc, setDocData] = React.useState(null);

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
  }, []);

  // if (doc) {
  //     var data = doc.map((post) =>
  //     <div>
  //         <a href={`/blog/${post.slugs[0]}`}>
  //         <div>{post.data.title[0].text}</div>
  //         <img alt='cover' src={post.data.blog_image.url} />
  //         </a>
  //     </div>
  //     // <div>post</div>
  //     // <h1>{RichText.asText(doc.data.title)}</h1>
  // );
  // }

  return (
    <div>
      {/* <Navigation textColor="#86BFFF" scrolledTextColor="#ffffff7a" logo={blueLogo} scrolledLogo={logo} scrolledDistance='5'/> */}
      {/* <Navigation /> */}
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
                  <h1 className="blog-title">
                    {RichText.asText(doc.data.title)}
                  </h1>
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

          {/* <div className="nav-box">
                  <div>
                    <a href="/menu">Back to Menu</a>
                  </div>
                  <div className="prev-next">
                    {prevModal && <a href={`/food/${prevId}`}>Previous</a>}
                    {prevModal && nextModal && <span> | </span>}
                    {nextModal && <a href={`/food/${nextId}`}>Next</a>}
                  </div>
                </div> */}
        </div>
      </div>
  );

  return (
    <div className="blog-page">
      <div
        className="blog-blue-block"
        style={{
          backgroundImage: `url(${waveImg})`,
          // backgroundColor: `#196196`,
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
        {" "}
        <h1>this blog</h1>
      </div>
      <div className="home-wrapper">
        <div>
          {doc ? (
            <div>
              <a href="/blog">back</a>
              <h1>{RichText.asText(doc.data.title)}</h1>
              <img alt="cover" src={doc.data.blog_image.url} />
              {/* <RichText render={doc.data.description} linkResolver={linkResolver} /> */}
              {/* <p>{doc.data.blog_text[0].text}</p> */}
              <RichText
                render={doc.data.blog_text}
                linkResolver={linkResolver}
              />
            </div>
          ) : (
            <div>No content</div>
          )}
        </div>
      </div>
    </div>
  );
}
