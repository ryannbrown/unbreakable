import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import './style.css';
import moons from '../../media/bluemoons.png'



export default class HomeQuote extends Component {

    constructor(props) { 
        super(props);

        this.listener = null;
        this.state = {
            status: "top"
        };
    }


    componentDidMount() {

    }

    // componentDidUpdate() {
    //   document.removeEventListener("scroll", this.listener);
    // }

    render() {





        return (


            <Row >
                <Col className="quote-contents primaryTextColor">
               <p>Daily Inspiration</p>
               <br></br>
               <p className="libre"><i>The only way to make sense out of change is to plunge into it,
 move with it, and join the dance " - Allan Watts</i></p>
 <Image className="moons-image" src={moons}></Image>
                </Col>
               

    </Row >
 
      )

    }
}