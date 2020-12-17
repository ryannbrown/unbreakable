
import React, { Component } from 'react';

import './style.css';
// import profPic from "../../media/5.PNG"
import waveImg from "../../../media/wave-img.jpg"





export default class HomeBlueBlock extends Component {

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
          <div className="home-blue-block" style={{
            backgroundImage: `url(${waveImg})`,
            // backgroundColor: `#196196`,
            // opacity: `100%`,
            backgroundBlendMode: `multiply`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            // backgroundAttachment: `fixed`,
            // height: `${this.props.height}`,
            height: `100vh`,
            width:'100%',
            display: `flex`,
            alignItems: `center`,
            justifyContent: 'center',
            position: `relative`
          }}>
            {/* <img className="hero-logo" src={placeHolder}></img> */}
              <div className="bb-text-content">
                <h1>UNBREAKABLE</h1>
               
                <p>Breaking the Silence.</p>
                <div className="vert-line"></div>
                <p>Finding My Voice.</p>
                <div className="vert-line"></div>
                <p>Sharing My Story.</p>
              </div>
            {/* <p style={{color:'#0e3b62'}} className="action-button">February 2021</p> */}
          </div>
    )

  }
}