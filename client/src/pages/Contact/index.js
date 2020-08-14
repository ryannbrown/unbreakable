import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import './style.css';
import profPic from "../../media/5.PNG"
import logo from "../../media/Blue-Heron-White.png"
import heroImg from "../../media/sand-beach.png"
import arrow from "../../media/arrow.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faGlassMartini } from '@fortawesome/free-solid-svg-icons'



export default class Contact extends Component {

    constructor(props) {
        super(props);

        this.listener = null;
        this.state = {
            status: "top"
        };
    }


    componentDidMount() {
        let height = window.innerHeight + 'px';
        console.log(height)
  


        this.setState({
            height: height
        })
        window.addEventListener('resize', () => {
            let height = window.innerHeight + 'px';
            console.log(height)
            this.setState({
                height: height
            })
     
          });
        // this.listener = document.addEventListener("scroll", e => {
        //     var scrolled = document.scrollingElement.scrollTop;
        //     if (scrolled >= 120) {
        //         if (this.state.status !== "bgChanged") {
        //             this.setState({ status: "bgChanged" });
        //         }
        //     } else {
        //         if (this.state.status !== "top") {
        //             this.setState({ status: "top" });
        //         }
        //     }
        // });
    }

    componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
    }

    render() {





        return (
            <div className="inner" style={{
                height: `${this.state.height}`
            }}>


                <Row>
                    {/* <Col md={3}></Col> */}

                    <Col sm={12} md={12} className="home-img" style={{
                        // backgroundImage: `url(${heroImg})`,
                        backgroundColor: `#0E3B62`,
                        opacity: `90%`,
                        backgroundBlendMode: `multiply`,
                        backgroundPosition: `center`,
                        backgroundSize: `cover`,
                        backgroundRepeat: `no-repeat`,
                        backgroundAttachment: `fixed`,
                        height: `56vh`,
                        display: `flex`,
                        alignItems: `center`,
                        position: `relative`
                        //   cover no-repeat center center fixed`
                    }}>
                        <a href="/"><Image className="hero-logo-contact" src={logo}></Image></a>
                    </Col>
                    {/* <Col md={3}></Col> */}
                </Row>
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
                        // backgroundAttachment: `fixed`,
                        height: `44vh`,
                        display: `flex`,
                        alignItems: `center`,
                        position: `relative`
                        //   cover no-repeat center center fixed`
                    }}>
                        <div className="contact-box">
                            <h1>Contact us</h1>
                            <p>Drop us a line the next time you're in Raleigh</p>
                            <a href="mailto:info@blueheronculinary.com?subject=Contact Blue Heron" subect="Contact Blue Heron"><button className="contact-btn-link">Email us</button></a>
                        </div>
                    </Col>
                    {/* <Col md={3}></Col> */}
                </Row>
            </div>
        )

    }
}