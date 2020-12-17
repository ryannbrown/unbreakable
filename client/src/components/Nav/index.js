import React, { Component } from "react";
import "./style.css";
// import Mobile from "./mobile"
import logo from "../../media/logo.png";
import fbLogo from "../../media/fb-grey.png";
import instaLogo from "../../media/insta-grey.png";
import cartLogo from "../../media/cart-grey.png";

import fbLogoW from "../../media/fb-white.png";
import instaLogoW from "../../media/insta-white.png";
import cartLogoW from "../../media/cart-white.png";
var _ = require("lodash");

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      mobileNavToggle: false,
      // isMobile: false
    };
  }

  toggleNav = () => {
    if (this.state.mobileNavToggle) {
      this.setState({
        mobileNavToggle: false,
      });
    } else if (!this.state.mobileNavToggle) {
      this.setState({
        mobileNavToggle: true,
      });
    }
  };

  componentDidMount() {
    if (window.innerWidth > 750) {
      this.setState({
        isMobile: true,
      });
    }
  }

  componentDidUpdate() {
    window.addEventListener(
      "resize",
      _.debounce(() => {
        if (window.innerWidth > 750) {
          this.setState({
            mobileNavToggle: false,
          });
          document.getElementById("navvy-bar").className = "header";
          document.getElementById("menu-toggle").checked = false;
        } else if (window.innerWidth < 750) {
          if (this.state.mobileNavToggle) {
            document.getElementById("menu-toggle").checked = true;
          }
        }
      }, 400)
    );
  }

  render() {
    return (
      <div className="nav-section">
        <header
          id="navvy-bar"
          class={this.state.mobileNavToggle ? "mobile-header" : "header"}
        >
          <nav className="nav-options">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
            </ul>
          </nav>
          {/* <div className="mobile-nav-logos">
          <a  href="/"><img src={instaLogo}></img></a>
          <a href="/"><img src={fbLogo}></img></a>
             <a  href="/"><img src={cartLogo}></img></a>
          </div> */}
          <div className="nav-brand">
            <img src={logo}></img>
          </div>
          { this.state.isMobile?  <div className="nav-right">
            <a href="/">
              <img src={instaLogo}></img>
            </a>
            <a href="/">
              <img src={fbLogo}></img>
            </a>
            <a href="/">
              <img src={cartLogo}></img>
            </a>
          </div> : 
           <div className="nav-right">
           <a href="/">
             <img src={instaLogoW}></img>
           </a>
           <a href="/">
             <img src={fbLogoW}></img>
           </a>
           <a href="/">
             <img src={cartLogoW}></img>
           </a>
         </div> }
         
        </header>
        <input
          type="checkbox"
          class="menu-toggle"
          id="menu-toggle"
          onClick={this.toggleNav}
        />
        <div class="mobile-bar">
          <label for="menu-toggle" class="menu-icon">
            <span></span>
          </label>
        </div>
      </div>
    );
  }
}
