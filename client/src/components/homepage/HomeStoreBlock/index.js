import React, { Component } from "react";

import "./style.css";
import merch from "../../../media/merch.png";
import {Link} from "react-router-dom"

export default class HomeStoreBlock extends Component {
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
      <div className="home-store-content">
        <div className="home-store-text">
          {/* <div> */}
          <h2>Check out</h2>
          <h2>my online store!</h2>
          <Link to="/shop/most-popular"><button className="the-button">Shop</button>
          </Link>
          {/* </div> */}
        </div>
        <div
          className="home-store-img"
          style={{
            backgroundImage: `url(${merch})`,
            opacity: `90%`,
            backgroundBlendMode: `multiply`,
            backgroundPosition: `left center`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            width: "100%",
            height: `100vh`,
          }}
        ></div>
      </div>
    );
  }
}
