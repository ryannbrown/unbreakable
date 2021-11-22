import { Container, Nav, Button, Image, Col, Row } from "react-bootstrap";
import { Navbar, NavDropdown } from "react-bootstrap";
import React, { Component } from "react";
// import logo from "../../media/stamplogo.png";
import "./style.css";
import logo from "../../media/newlogo.png"
import jsLogo from "../../media/redlogo.png"
import fbLogo from "../../media/fb-grey.png"
import instaLogo from "../../media/insta-grey.png"
import cartLogo from "../../media/cart-grey.png"
import linkedIn from "../../media/linkedin-grey.svg"
import {Link} from 'react-router-dom'
var _ = require("lodash");

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      isMobile: false,
    };
  }

  render() {
    const { isMobile } = this.state;

    return (
      <div>
        <div className="darkfooter">
          <div>
            {/* <h1 className="brand-title">UNBREAKABLE</h1> */}
            <Link to="/"><img className="footer-brand" src={logo}></img></Link>
            <br></br>
            {/* <hr></hr> */}
          </div>
            <div className="link-wrapper">
              <Link  to="/shop/most-popular"><p>Shop</p></Link>
              <Link  to="/blog"><p>Blog</p></Link>
              <Link  to="/resources"><p>Resources</p></Link>
              <Link  to="/about"><p>About</p></Link>
            </div>
            <div className="social-wrapper">
             {/* <a href="https://www.facebook.com/carolyn.skowron"><img src={fbLogo}></img></a> */}
             <a  href="https://www.instagram.com/Carolyn.skowron/"><img src={instaLogo}></img></a>
             <a  href="https://www.linkedin.com/in/carolyn-skowron-919624152/"><img src={linkedIn}></img></a>
             <a  href="/"><img src={cartLogo}></img></a>
         
              {/* <img src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01/81af6121f84c41a5b4391d7d37fce12a.webp"></img> */}
            </div>
            <div className="soup-block">
            <a target="_blank" href="https://www.justsoup.io">
              {/* <img width="20px" src={jsLogo}></img> */}
              <p>Powered by Just Soup</p>
            </a>
            </div>
        </div>
      </div>
    );
  }
}
