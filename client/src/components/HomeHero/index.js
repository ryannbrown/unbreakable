import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import './style.css';
import profPic from "../../media/5.PNG"
import logo from "../../media/Blue-Heron-Blue.png"
import heroImg from "../../media/sand-beach.png"
import arrow from "../../media/arrow.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faGlassMartini } from '@fortawesome/free-solid-svg-icons'



export default class HomeHero extends Component {

  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top"
    };
  }


  componentDidMount() {
    this.listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (this.state.status !== "bgChanged") {
          this.setState({ status: "bgChanged" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {





    return (
      <div className="inner">
        <div className="cta-nav-btn">
          <a href="/contact">
            <button className="contact-btn-link">Contact us</button>
          </a>
        </div>

        <Row>
          {/* <Col md={3}></Col> */}

          <Col sm={12} md={12} className="home-img" style={{
            backgroundImage: `url(${heroImg})`,
            backgroundColor: `#F9F8F0`,
            opacity: `90%`,
            backgroundBlendMode: `multiply`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundAttachment: `fixed`,
            height: `100vh`,
            maxHeight: '-webkit-fill-available',
            display: `flex`,
            alignItems: `center`,
            position: `relative`
            //   cover no-repeat center center fixed`
          }}>
            <Image className="hero-logo" src={logo}></Image>
            {/* <div className="hero-text-block">
                <h4 className="title-name">Freshness,</h4>
                <h1 className="title-phrase">Like Never Before</h1>
            </div> */}
            {/* <div className="hero-text-block">
                <h4 className="title-name">Freshness,</h4>
                <h1 className="title-phrase">Like Never Before</h1>
            </div> */}

            <br></br>
            {/* <div> */}
            {/* <Button className="action-button" variant="outline-dark">Coming Soon     </Button> */}
            <p className="action-button primaryTextColor">Coming Soon</p>
            {/* <div className="arrow-container">
            <Image className="arrow-img center" src={arrow}></Image>
            </div> */}
            {/* </div> */}







          </Col>
          {/* <Col md={3}></Col> */}
        </Row>
      </div>
    )

  }
}