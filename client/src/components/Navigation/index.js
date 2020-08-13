
// import { Container, Nav, Button, Image } from 'react-bootstrap'
// import Navbar from 'react-bootstrap/Navbar'
// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import './style.css';
// import { Drawer } from '@material-ui/core';
// import TemporaryDrawer from '../Drawer/index'

// import logo from '../../media/moons.png'
// import whiteArrow from '../../media/white-arrow.png'

// export default class Navigation extends Component {

//   constructor(props) {
//     super(props);

//     this.listener = null;
//     this.state = {
//       status: "top",
//       isMobile: false
//     };
//   }


//   componentDidMount() {

  
//   }

//   componentDidUpdate() {
//     document.removeEventListener("scroll", this.listener);



//   }

//   render() {

//     const { isMobile } = this.state;



//     return (
//       // <Navbar style={{padding:'0px'}}>
//       //   <div className="nav-brand-box">
//       //     <div className="menu-icon"><TemporaryDrawer></TemporaryDrawer></div>
//       //     <div style={{backgroundColor: this.state.status ==="top" ? "transparent" : "rgba(217, 189, 189, 1)"}} className="title">
//       //       <Navbar.Brand href="/">Kathryn Judy Brown</Navbar.Brand>
//       //       <Navbar.Brand className="tagline" href="#home">Not your Mama's Healer</Navbar.Brand>
//       //     </div>

//       //   </div>
//       // </Navbar>

//       <div>
//         <Navbar fixed="top" style={{ backgroundColor: this.state.status === "top" ? "transparent" : "#FFFFFF", transition: '.6s' }} className="title">
//           <Nav className="justify-content-center" activeKey="/home">
//             <Nav.Item className="cta-nav-btn">
//               <a href="/contact">
//                 <Button className="contact-btn-link">Contact us</Button>
//               </a>
//               {/* <a href="/offerings">
//                 <Button className="offerings-btn-link" style={{ backgroundColor: this.state.status === "top" ? "#86BFFF" : "white", color: this.state.status === "top" ? "white" : "#86BFFF", transition: '.6s' }}>Subscribe</Button>
//               </a> */}
//             </Nav.Item>
//             <Nav.Item className="nav-arrow">
//               <Image style={{ display: this.state.status === "top" ? "none" : "flex", transition: '.6s' }} src={whiteArrow}></Image>
//             </Nav.Item>
//           </Nav>
//         </Navbar>
//       </div >
//     )

//   }
// }





