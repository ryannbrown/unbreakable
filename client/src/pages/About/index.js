import React, { Component } from "react";
// import Navigation from "../../components/Navigation";
import "./style.css";
// import logo from "../../media/moons.png";
// import blueLogo from "../../media/bluemoons.png";
import portrait from "../../media/about-pic.jpeg";
import Nav from "../../components/Nav";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      showModal: false,
      forms: [],
    };
  }

  fetchPosts() {}

  componentDidMount() {}

  render() {
    return (
      <div className="about-page">
        {/* <Nav></Nav> */}
        <div className="about-content">
          <div className="white-block">
            <div className="img-container">
              <div
                className="about-img"
                style={{
                  backgroundImage: `linear-gradient(to top, transparent 100%, #ffffff ),url(${portrait})`,
                  // backgroundColor: `#FF8686`,
                  // opacity: `90%`,
                  // backgroundBlendMode: `lighten`,
                  backgroundPosition: `center`,
                  backgroundPositionY: "30%",
                  position: `absolute`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "75vh",
                  width: "100%",
                }}
              ></div>
            </div>
          </div>
          <div className="pink-block">
            {/* <div className="narrow">
      
            </div> */}
            <div className="about">
              <h1>Let's have a conversation...</h1>
              <p>
                My name is, Carolyn Skowron, and I am the author of Unbreakable.
                I wrote this book because I want to help raise awareness of
                mental health issues, and help end the stigma. We need to start
                talking about mental health and be less judgmental of each
                other. We need to start treating one another with more respect
                and empathy, as well as recognize that we are all unique,
                special, and should never give up. In writing this book, my hope
                is that it might save at least one life.
              </p>
            </div>
          </div>
          <div className="white-block">
            <div className="about-contact">
              <h1>I'm only a click away!</h1>
              <p>
                Email me at{" "}
                <a href="mailto:carolyn.skowron@gmail.com">
                  carolyn.skowron@gmail.com
                </a>
                {/* Contact me anytime, just fill out the   
                <a href="/connect"> Connect Form
                </a> */}
              </p>
              <p>
                Follow me on:
                <a href="https://www.instagram.com/Carolyn9787/"> @instagram</a>
                {/* <a href="https://www.facebook.com/milliegrace22"> @facebook</a> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
