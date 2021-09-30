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
          <h2>Stay up to date with everything</h2>
          <h2 className="mia">Unbreakable</h2>
          <div className="form-parent">
          <form className="subscribe-form" action="https://gmail.us7.list-manage.com/subscribe/post" method="POST">
              <input type="hidden" name="u" value="3d97dabe417fa5f2f25acd87d" />
              <input type="hidden" name="id" value="d9e8eceba3" />
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

// can use with mailchimp hopefully
// import jsonp from 'jsonp';
// import queryString from 'query-string';

// // ...

// const subscribeToNewsLetter = () => {
//   const formData = {
//     EMAIL: // your email string,
//   };
//   jsonp(`YOUR_URL/subscribe/post-json?u=YOUR_U&amp;id=YOUR_ID&${queryString.stringify(formData)}`, { param: 'c' }, (err, data) => {
//     console.log('err:', err);
//     console.log('data:', data);
//   });
// }