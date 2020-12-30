// import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
// import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
import './style.css';
import Navbar from "../../components/Nav"
import HomeHero from "../../components/homepage/HomeHero"
import HomeAuthorBlock from "../../components/homepage/HomeAuthorBlock"
import HomeBlueBlock from "../../components/homepage/HomeBlueBlock"
import HomeStoreBlock from "../../components/homepage/HomeStoreBlock"
import HomeSubscribeBlock from "../../components/homepage/HomeSubscribeBlock"
import Footer from "../../components/Footer/index"

export default class Homepage extends Component {

    constructor(props) {
        super(props);

        this.listener = null;
        this.state = {
        };
    }

    componentDidMount() {
    }



    render() {
        return (<div>
             {/* <Navbar></Navbar> */}
            <div className="homepage-content">
               <HomeHero></HomeHero> 
               <HomeBlueBlock></HomeBlueBlock>
               <HomeAuthorBlock></HomeAuthorBlock>
               <HomeSubscribeBlock></HomeSubscribeBlock>
               <HomeStoreBlock></HomeStoreBlock>
            </div>
            
        </div>
        )
    }
}