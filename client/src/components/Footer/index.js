import { Container, Nav, Button, Image, Col, Row } from "react-bootstrap";
import { Navbar, NavDropdown } from "react-bootstrap";
import React, { Component } from "react";
// import logo from "../../media/stamplogo.png";
import "./style.css";
import logo from "../../media/logo.png"
import fbLogo from "../../media/fb-grey.png"
import instaLogo from "../../media/insta-grey.png"
import cartLogo from "../../media/cart-grey.png"
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
            <a href="/"><img className="footer-brand" src={logo}></img></a>
            <br></br>
            {/* <hr></hr> */}
          </div>
            <div className="link-wrapper">
              <a  href="/"><p>Shop</p></a>
              <a  href="/"><p>Blog</p></a>
              <a  href="/"><p>Resources</p></a>
              <a  href="/"><p>About</p></a>
            </div>
            <div className="social-wrapper">
             <a href="/"><img src={fbLogo}></img></a>
             <a  href="/"><img src={instaLogo}></img></a>
             <a  href="/"><img src={cartLogo}></img></a>
         
              {/* <img src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01/81af6121f84c41a5b4391d7d37fce12a.webp"></img> */}
            </div>
        
        </div>
      </div>
    );
  }
}
