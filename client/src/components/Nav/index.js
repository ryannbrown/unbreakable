import React, { Component } from "react";
import "./style.css";
// import Mobile from "./mobile"
import logo from "../../media/newlogo.png";
import fbLogo from "../../media/fb-grey.png";
import linkedInGrey from "../../media/linkedin-grey.svg"
import Cart from "../StoreComponents/Cart";
import instaLogo from "../../media/insta-grey.png";
import cartLogo from "../../media/cart-grey.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  ThemeContextConsumer,
  ThemeContextProvider,
} from "../../utils/themeContext";
import fbLogoW from "../../media/fb-white.png";
import instaLogoW from "../../media/insta-white.png";
import linkedInW from "../../media/linkedin-white.svg"
import cartLogoW from "../../media/cart-white.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

var _ = require("lodash");

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      mobileNavToggle: false,
      scrollingUp: false,
      hideNav: false,
      isMobile: false,
      hideDropdown: false
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

  handleNavigation = (e) => {
    // console.log("handling nav");

    // if (window.innerWidth < 750) {

    const window = e.currentTarget;

    if (window.scrollY > 0) {
      this.setState({hideDropdown: true})
    }
    if (window.scrollY < 5) {
      this.setState({hideDropdown: false})
    }

    if (this.prev > window.scrollY) {
      // console.log("scrolling up")
      this.setState({
        hideNav: false,
      });
    } else if (this.prev < window.scrollY) {
      // console.log("scroll down, hide nav")
      this.setState({
        hideNav: true,
      });
    }
    this.prev = window.scrollY;
    // };
  };

  handleMobileNav = () => {
    this.setState({ mobileNavToggle: false });
    document.getElementById("menu-toggle").checked = false;
  };

  componentDidMount() {
    this.prev = window.scrollY;
    window.addEventListener("scroll", (e) => this.handleNavigation(e));

    if (window.innerWidth < 725) {
      this.setState({
        isMobile: true,
      });
    } else if (window.innerWidth < 725) {
      this.setState({
        isMobile: false,
      });
    }
  }

  componentDidUpdate() {
    // if (this.state.lastPosition > 0) {
    //   console.log("here boy")
    //       if (position < this.state.lastPosition) {
    //         // console.log(position, "scrolling up")
    //         // console.log("scrolling up")
    //       }
    //     }

    // window.addEventListener(
    //   "resize",
    //   _.debounce(() => {
    //     if (window.innerWidth > 725) {
    //       this.setState({
    //         mobileNavToggle: false,
    //         isMobile: false,
    //       });
    //       // change header from mobile view
    //       document.getElementById("navvy-bar").className = "header";
    //       // hide the nav sub columns if expanded from mobile width
    //       document.getElementById("nav-toggle").checked = false;
    //       // uncheck the hamburger to reset icon style
    //       document.getElementById("menu-toggle").checked = false;
    //     }  if (window.innerWidth < 725) {
    //       this.setState({
    //         isMobile: true,
    //       });
    //       // document.getElementById("menu-toggle").checked = false;
    //       if (this.state.mobileNavToggle) {
    //         document.getElementById("menu-toggle").checked = true;
    //       }
    //     }
    //   }, 400)
    // );
  }

  render() {
    return (
      <ThemeContextConsumer>
        {(context) => (
          <div className="nav-section">
            <header
              id="navvy-bar"
              // class={this.state.mobileNavToggle ? "mobile-header" + (this.state.hideNav ? '-hidden' : '') : 'header' + (this.state.hideNav ? '-hidden' : '')}
              class={this.state.mobileNavToggle ? "mobile-header" : "header"}
            >
              <nav className="nav-options">
                {this.state.mobileNavToggle ? (
                  <ul>
                    <li>
                      <Link onClick={this.handleMobileNav} to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link onClick={this.handleMobileNav} to="/featured">
                        Featured
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        onClick={this.handleMobileNav}
                        to="/shop/most-popular"
                      >
                        Shop
                      </Link>
                    </li> */}
                    <li className="service-trigger">
                      <input
                        type="checkbox"
                        class="nav-down-toggle"
                        id="nav-toggle"
                      ></input>
                      <FontAwesomeIcon
                        className="nav-down"
                        icon={faChevronDown}
                      />
                      <Link>About</Link>
                      <div className="nav-services">
                        <div className="nav-service-arrow"></div>
                        <li>
                          <Link onClick={this.handleMobileNav}  to="/about">About me</Link>
                        </li>
                        <li>
                          <Link onClick={this.handleMobileNav}  to="/resources">Resources</Link>
                        </li>
                        <li>
                          <Link onClick={this.handleMobileNav}  to="/contact">
                            Contact me
                          </Link>
                        </li>
                      </div>
                    </li>
                  </ul>
                ) : (
                  <ul>
                     <li className="service-trigger">
                      {/* <input
                        type="checkbox"
                        class="nav-down-toggle"
                        id="nav-toggle"
                      ></input> */}
                      <FontAwesomeIcon
                        className="nav-down"
                        icon={faChevronDown}
                      />
                      <Link>About</Link>
                      <div className={'nav-services' +(this.state.hideDropdown ? ' scrolled' : '')}>
                        <div className="nav-service-arrow"></div>
                        <li>
                          <Link to="/about">About me</Link>
                        </li>
                        <li>
                          <Link to="/resources">Resources</Link>
                        </li>
                        <li>
                          <Link to="/contact">
                          Contact me
                          </Link>
                        </li>
                      </div>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    {/* <li>
                      <Link to="/shop/most-popular">Shop</Link>
                    </li> */}
                    <li>
                      <Link to="/featured">
                        Featured
                      </Link>
                    </li>
                
                   
                    {/* <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li> */}
                  </ul>
                )}
              </nav>
              {/* <div className="mobile-nav-logos">
          <a  href="/"><img src={instaLogo}></img></a>
          <a href="/"><img src={fbLogo}></img></a>
             <a  href="/"><img src={cartLogo}></img></a>
          </div> */}
              <div className="nav-brand">
                <Link to="/">
                  <img src={logo}></img>
                </Link>
              </div>
              {!this.state.isMobile ? (
                <div className="nav-right">
                  <a href="https://www.instagram.com/Carolyn.skowron/">
                    <img src={instaLogo}></img>
                  </a>
                  <a href="https://www.facebook.com/carolyn.skowron">
                    <img src={fbLogo}></img>
                  </a>
                  <a href="https://www.linkedin.com/in/carolyn-skowron-919624152/">
                    <img src={linkedInGrey}></img>
                  </a>
                  <a className="cart-desktop">
                    <img
                      className="myimg"
                      onClick={context.handleCartOpen}
                      src={cartLogo}
                    ></img>
                    {context.checkout.lineItems.length > 0 && (
                      <p className="cart-count">
                        {context.checkout.lineItems.length}
                      </p>
                    )}
                  </a>
                </div>
              ) : (
                <div className="nav-right">
                  <a href="https://www.instagram.com/Carolyn.skowron/">
                    <img src={instaLogoW}></img>
                  </a>
                  <a href="https://www.facebook.com/carolyn.skowron">
                    <img src={fbLogoW}></img>
                  </a>
                  <a href="https://www.linkedin.com/in/carolyn-skowron-919624152/">
                    <img src={linkedInW}></img>
                  </a>
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={context.handleCartOpen}
                  >
                    <img src={cartLogoW}></img>
                    {context.checkout.lineItems.length > 0 && (
                      <p className="mb-checked-cart-count">
                        {context.checkout.lineItems.length}
                      </p>
                    )}
                  </a>
                </div>
              )}
            </header>
            <input
              type="checkbox"
              class="menu-toggle"
              id="menu-toggle"
              onClick={this.toggleNav}
            />
            {/* <div class={this.state.hideNav ? 'mobile-bar-hidden': 'mobile-bar' }> */}
            <div class="mobile-bar">
              <label for="menu-toggle" class="menu-icon">
                <span></span>
              </label>
              <div className="mobile-nav-brand">
                <Link to="/">
                  <img src={logo}></img>
                </Link>
              </div>
              <a className="cart-mobile">
                <img
                  onClick={context.handleCartOpen}
                  className="mbar-cart"
                  src={cartLogo}
                ></img>
                {context.checkout.lineItems.length > 0 && (
                  <p className="mb-cart-count">
                    {context.checkout.lineItems.length}
                  </p>
                )}
              </a>
            </div>
            <Cart
              // updateCartClose={this.state.updateCartClose}
              checkout={context.checkout}
              isCartOpen={context.isCartOpen}
              handleCartClose={context.handleCartClose}
              updateQuantityInCart={context.updateQuantityInCart}
              // removeLineItemInCart={this.removeLineItemInCart}
            />
          </div>
        )}
      </ThemeContextConsumer>
    );
  }
}

// {!this.props.isCartOpen ?
//   <a onClick={this.props.handleCartOpen}>
//     <img src={cartLogo}></img>
//   </a> : <a onClick={this.props.handleCartClose}>
//     <img src={cartLogo}></img>
//   </a> }
