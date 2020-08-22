import { Container, Nav, Button, Image, Row, Col, Spinner, Alert } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import './style.css';
// import profPic from "../../media/5.PNG"
import logo from "../../media/Blue-Heron-White.png"
import heroImg from "../../media/sand-beach.png"
// import arrow from "../../media/arrow.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faGlassMartini } from '@fortawesome/free-solid-svg-icons'



export default class Contact extends Component {

    constructor(props) {
        super(props);

        this.listener = null;
        this.state = {
            status: "top",
            showModal: false,
            emailSent: false,
            emailSending: false,
            errorMsg: false
        };
        this.name = React.createRef();
        this.email = React.createRef();
        this.subject = React.createRef();
        this.message = React.createRef();
    }


    openModal = () => {
        this.setState({
            showModal: true
        })
    }

    sendEmail = (e) => {
        e.preventDefault();

        this.setState({
            emailSending: true
        })
        let name = this.name.current.value
        let email = this.email.current.value
        let subject = this.subject.current.value
        let message = this.message.current.value

        const postItem = () => {
            console.log("posting to DB")
            // POST TO DB
            fetch('/api/sendmail', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                })
            }).then(response => {
                console.log("email sent")
                console.log(response)
                if (response.status == '200') {
                    this.setState({
                        // showModal: false,
                        emailSending: false,
                        emailSent: true
                    })
                }
                // else if (response.status == '500') {
                //     alert("500 error")
                // }
                else {
                    this.setState({
                        errorMsg: true,
                        emailSending:false
                    })
                }
            })

        }
        postItem()
    }

    componentDidMount() {
        const heightNum = window.innerHeight;
        let height = window.innerHeight + 'px';
        let topHeight = heightNum * 0.56 + 'px';
        let bottomHeight = heightNum * 0.44 + 'px';
        console.log(bottomHeight)



        this.setState({
            height: height,
            topHeight: topHeight,
            bottomHeight: bottomHeight
        })
        window.addEventListener('resize', () => {
            const heightNum = window.innerHeight;
            let height = window.innerHeight + 'px';
            let topHeight = heightNum * 0.56 + 'px';
            let bottomHeight = heightNum * 0.44 + 'px';
            // let height = window.innerHeight + 'px';
            // console.log(topHeight)
            this.setState({
                height: height,
                topHeight: topHeight,
                bottomHeight: bottomHeight
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

        const { topHeight, bottomHeight, showModal, emailSending, emailSent, errorMsg } = this.state;



        return (
            <div className="inner" style={{
                height: `${this.state.height}`
            }}>


                <Row>
                    <Col sm={12} md={12} className="home-img" style={{
              
                        backgroundColor: `#0E3B62`,
                        opacity: `90%`,
                        backgroundBlendMode: `multiply`,
                        backgroundPosition: `center`,
                        backgroundSize: `cover`,
                        backgroundRepeat: `no-repeat`,
                        backgroundAttachment: `fixed`,
                        height: `${topHeight}`,
                        display: `flex`,
                        alignItems: `center`,
                        position: `relative`
                    }}>
                        <a href="/"><Image className="hero-logo-contact" src={logo}></Image></a>
                    </Col>
              
                </Row>
                <Row>
                    <Col sm={12} md={12} className="home-img" style={{
                        backgroundImage: `url(${heroImg})`,
                        backgroundColor: `#F9F8F0`,
                        opacity: `90%`,
                        backgroundBlendMode: `multiply`,
                        backgroundPosition: `center`,
                        backgroundSize: `cover`,
                        backgroundRepeat: `no-repeat`,
                        height: `${bottomHeight}`,
                        display: `flex`,
                        alignItems: `center`,
                        position: `relative`
                    }}>
                        <div className="contact-box">
                            <h1>Contact us</h1>
                            <p>Drop us a line the next time you're in Raleigh</p>
                            {/* <a href="mailto:info@blueheronculinary.com?subject=Contact Blue Heron"> */}
                            <button onClick={this.openModal} className="contact-btn-link">Email us</button>
                      
                        </div>
                    </Col>
            
                </Row>
                {showModal ? (
                    <div className="modal-canvas">
                        <div className="contact-modal">
                            <button className="exit-btn" onClick={() => { this.setState({ showModal: false }) }}>close</button>
                            <div className="modal-content">
                                <h1>Contact us</h1>
                                <p>Plug in an email and send our way!</p>
                                <form>
                               
                                    <input ref={this.name} placeholder="name" id="name"></input>
                                
                                    <input ref={this.email} placeholder="email" id="email"></input>
                             
                                    <input ref={this.subject} placeholder="subject" id="subject"></input>
                              
                                    <textarea ref={this.message} placeholder="message" id="message"></textarea>
                                    {emailSending ? ( 
                                        <Spinner animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                      </Spinner>
                                    ): (<button className="send-email-btn" onClick={this.sendEmail} type="submit">Send</button>)}
                                  
                                </form>
                                <div>
                                    {/* <br></br> */}
                                    {emailSent ? (
                                        <p>Your message has been sent</p>
                                    ): (<div></div>)
                                    }
                                    {errorMsg ? (
                                        <Alert variant='danger'>
                                        There was trouble accessing email server. Email us directly
                                        at info@blueheronculinary.com
                                      </Alert>
                                    ): (<div></div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) :
                    (<div></div>)
                }
            </div>
        )

    }
}