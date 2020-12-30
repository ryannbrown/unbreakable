import React, { Component } from "react";
import "./style.css";
// import profPic from "../../media/5.PNG"
import tanWaves from "../../../media/tan-waves.png";
export default class HomeSubscribeBlock extends Component {
  constructor(props) {
    super(props);
    this.listener = null;
    this.state = {
      status: "top",
    };
  }
  componentDidMount() {}
  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }
  render() {
    return (
      <div
        className="subscribe-block"
        style={{
          backgroundImage: `url(${tanWaves})`,
          backgroundColor: `#F9F8F0`,
          opacity: `90%`,
          backgroundBlendMode: `multiply`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          // backgroundAttachment: `fixed`,
          height: `375px`,
          // height: `25vh`,
          display: `flex`,
          alignItems: `center`,
          position: `relative`,
        }}
      >
        {/* <img className="hero-logo" src={logo}></img> */}
        <div className="subscribe-content">
          <h2>Stay up to date with everything Unbreakable</h2>
          <div className="form-parent">
          <form className="subscribe-form" action="https://justsoup.us7.list-manage.com/subscribe/post" method="POST">
              <input type="hidden" name="u" value="81dfc6dfe378248a0c660c06c" />
              <input type="hidden" name="id" value="692eaf01e9" />
              <input
                type="email"
                autocapitalize="off"
                autocorrect="off"
                name="MERGE0"
                id="MERGE0"
                size="25"
                placeholder="Your email"
              />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
        {/* <p style={{color:'#0e3b62'}} className="action-button">February 2021</p> */}
      </div>
    );
  }
}