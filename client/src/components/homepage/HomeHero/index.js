
import React, { Component } from 'react';

import './style.css';
// import profPic from "../../media/5.PNG"
import placeHolder from "../../../media/placeholder.png"





export default class Hero extends Component {

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
      <div className="home-img" style={{
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
        width:'100%',
        display: `flex`,
        alignItems: `center`,
        justifyContent: 'center',
        position: `relative`
      }}>
        <img className="hero-logo" src={placeHolder}></img>
   

        <br></br>
        {/* <p style={{color:'#0e3b62'}} className="action-button">February 2021</p> */}
      </div>
    )

  }
}