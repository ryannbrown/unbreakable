import React, { Component } from "react";
// import "../Home";
import { Card, ListGroup, ListGroupItem, Button, Image, CardDeck, Alert } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Panel from './components/panel'
import UpdateItem from './components/updateitem'
import "./style.css"
// const queryString = require('query-string');

require("dotenv").config();

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoggedIn: true,
            catData: [],
            email: '',
            pass: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.email = React.createRef();
        this.pass = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        let email = this.email.current.value
        let pass = this.pass.current.value
        
   
        // if (pass === process.env.REACT_APP_PASS && email === process.env.REACT_APP_LOGIN) {
        if (pass === process.env.PASS && email === process.env.LOGIN) {
            this.setState({
                isLoggedIn: true
            })
        } else {
            alert("incorrect password...")
        }


    }

    //   ReactDOM.findDOMNode(ref)

    render() {
        const { isLoggedIn } = this.state;

        if (!isLoggedIn) {
            return (
                <div className=" page-content w-50">
                    <Form className="login-form" onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={this.email} type="text" placeholder="Enter email" />
                           
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={this.pass} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button style={{ backgroundColor: '#7C5454' }} variant='dark' type="submit">
                            Submit
        </Button>
                    </Form>
                </div>

            );
        }
    
        if (isLoggedIn) {
            return (
              
                <Panel isLoggedIn ={isLoggedIn}></Panel>

            );
        }
    }
}

export default Admin;
