import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
// import logo from './logo.svg';
import HomeHero from "../../components/HomeHero/index"
import HomeBio from "../../components/HomeBio/index"
import HomeAction from "../../components/HomeAction/index"
import HomeQuote from "../../components/HomeQuote/index"
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faGlassMartini } from '@fortawesome/free-solid-svg-icons'


export default class Homepage extends Component {

    constructor(props) {
        super(props);

        this.listener = null;
        this.state = {
            status: "top",
            isMobile: false,
            vh: '100vh',
            px: ''
        };
    }

    componentDidMount() {
        let vh = window.innerHeight * 0.01;
        let px = vh * 100;
        px += 'px'
        console.log(px)


        this.setState({
            vh: vh,
            px: px
        })
        window.addEventListener('resize', () => {
            console.log("resizing")
            // We execute the same script as before
            let vh = window.innerHeight * 0.01;
            let px = vh * 100;
            px += 'px'
            console.log(px)


            this.setState({
                vh: vh,
                px: px
            })

            // console.log(window.innerHeight * 0.01);
            // document.documentElement.style.setProperty('--vh', `32px`);
          });
          console.log(window.innerHeight);
    }



    render() {
// console.log(this.state.vh)


        return (
            <div className="homepage-content" style={{
                // height: `20vh`, /* Fallback for browsers that do not support Custom Properties */
                height: `${this.state.vh}`
            }}>
                <HomeHero></HomeHero>
            </div>
        )
    }
}