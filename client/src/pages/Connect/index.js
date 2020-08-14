// import React, { Component } from "react";
// import { Card, ListGroup, ListGroupItem, Button, Image, CardDeck, Toast } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
// import image from '../../media/circle-thing.png'
// import avImage from '../../media/bluemoons.png'
// import style from './style.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
// // import Panel from './panel';
// // import axios from 'axios';

// // const queryString = require('query-string');

// require("dotenv").config();

// class Connect extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [],
//             isLoggedIn: false,
//             catData: [],
//             itemPosted: false,
//             file: null
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//         // this.fileChanged = this.fileChanged.bind(this);
//         // this.img = React.createRef();
//         this.name = React.createRef();
//         this.email = React.createRef();
//         this.selection = React.createRef();
//         this.message = React.createRef();
//     }



//     fileChanged(event) {
//         console.log(event)
//         var f = event.target.files;
//         console.log(f)
//         this.setState({
//             file: f
//         }, function () { console.log(this.state) });
//         // console.log("state",this.state.file)

//         // this.handleImage()
//     }

//     handleSubmit(event) {
//         event.preventDefault()
//         let name = this.name.current.value
//         let email = this.email.current.value
//         let selection = this.selection.current.value
//         let message = this.message.current.value

//         // console.log(date);

//         const postItem = () => {
//             console.log("posting to DB")
//             // POST TO DB
//             fetch('/api/lead-form', {
//                 method: 'POST',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     name: name,
//                     email: email,
//                     selection: selection,
//                     message: message
//                 })
//             }).then(response => {
//                 console.log("hey i did it")
//                 console.log(response)
//                 if (response.status == '200') {
//                     this.setState({
//                         itemPosted: true
//                     })
//                 }
//             })

//         }
//         postItem()

//     }


//     render() {
//         const { itemPosted } = this.state;
       
//             return (
//                 <div className="connect-page">
//                     <h1 className="primaryTextColor"><i>Connect with me</i></h1>
//                     <Image src={image} style={{ width: `10%` }}></Image>
//                     <div className="form-container">
//                         <form onSubmit={this.handleSubmit} className="connect-form" encType="multipart/form-data" >
//                             <Form.Group controlId="formBasicPassword">
//                                 <Form.Control ref={this.name} type="text" placeholder="Name" />
//                             </Form.Group>
//                             <Form.Group controlId="formBasicPassword">
//                                 <Form.Control ref={this.email} type="email" placeholder="Email" />
//                             </Form.Group>
//                             <Form.Group controlId="formBasicPassword">
//                                 <Form.Label>Which offering are you interested in?</Form.Label>
//                                 <Form.Control ref={this.selection} as="select" placeholder="Email">
//                                     <option>Meditation Session</option>
//                                     <option>Shadow Work</option>
//                                     <option>Loving the Mirror</option>
//                                     <option>Fleeing Indoctrination</option>
//                                     <option>None- Just wanting to connect!</option>
//                                 </Form.Control>

//                             </Form.Group>

//                             <Form.Group controlId="formBasicPassword">
//                                 {/* {/* <Form.Label>Post Body</Form.Label> */}
//                                 <Form.Control ref={this.message} as="textarea" rows="5" placeholder="Reason for your interest. Tell me some of your story!" />
//                             </Form.Group>

//                             <Button className="offerings-btn" variant="basic" type="submit">
//                                 Send My Way! <FontAwesomeIcon className="plane-icon" icon={faPaperPlane}></FontAwesomeIcon>
//                             </Button>
//                         </form>
//                         {itemPosted? (
//         <div className="toasty">
//             <Toast 
//             style={{
//       position: 'absolute',
//       top: '75%',
//       right: '35%',
//     }}
//     >
//                 <Toast.Header>
//                     <img style={{width: `75px`, height: `auto`}} src={avImage} className="rounded mr-2" alt="" />
//                     <strong className="mr-auto">Kathryn Judy Brown</strong>
//                     <small>just now</small>
//                 </Toast.Header>
//                 <Toast.Body>Thanks for reaching out! I will reach out to you as soon as I can! </Toast.Body>
//             </Toast>
//         </div>

//                         ) : (<div></div>)
// }
//                     </div>
//                 </div>
//             );
           
//     }
//     // if (isLoggedIn) {
//     //     return (
//     //         <AdminPanel></AdminPanel>

//     //     );
//     // }
// }


// export default Connect;
