
import React, { Component } from 'react';

import './style.css';
// import profPic from "../../media/5.PNG"
import portrait from "../../../media/portrait.png"




export default class HomeAuthorBlock extends Component {

  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top"
    };
  }


  componentDidMount() {
 
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {





    return (
        <div>
          <div className="home-author-block" style={{
            // backgroundImage: `url(${heroImg})`,
            backgroundColor: `white`,
            opacity: `100%`,
            backgroundBlendMode: `multiply`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundAttachment: `fixed`,
            // height: `${this.props.height}`,
            height: `100vh`,
            display: `flex`,
            alignItems: `center`,
            position: `relative`,
            justifyContent: 'center'
          }}>
            {/* <img className="hero-logo" src={logo}></img> */}
            <div className="author-content">
            <div className="auth-pic"><img className="auth-img" src={portrait}></img></div>
            <div className="auth-text">
              <h2>Carolyn S. Skowron</h2>
              <p>Author of Unbreakable</p>
              <button>More about the author</button>
            </div>
            </div>

            <br></br>
            {/* <p style={{color:'#0e3b62'}} className="action-button">February 2021</p> */}
          </div>
        </div>

    )

  }
}