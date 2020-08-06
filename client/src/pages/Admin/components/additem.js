import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem, Button, Image, CardDeck } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Panel from './panel';
// import axios from 'axios';

// const queryString = require('query-string');

require("dotenv").config();

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoggedIn: false,
            catData: [],
            itemPosted: false,
            file: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.fileChanged = this.fileChanged.bind(this);
        this.img = React.createRef();
       this.title = React.createRef();
       this.date = React.createRef();
       this.body = React.createRef();
    }



    fileChanged(event) {
        console.log(event)
        var f = event.target.files;
        console.log(f)
        this.setState({
            file: f
        }, function () { console.log(this.state) });
        // console.log("state",this.state.file)

        // this.handleImage()
    }

    handleSubmit(event) {
        event.preventDefault()
        let img = this.img.current.value
        let title = this.title.current.value
        let date = this.date.current.value
        let body = this.body.current.value

        console.log(date);


        const filename = this.state.file[0].name

        const thisFormData = new FormData();
        thisFormData.append('element1', this.state.file[0]);
        var requestOptions = {
            method: 'POST',
            body: thisFormData,
            redirect: 'follow'
        };

        fetch("/api/upload/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        const postItem = () => {
            console.log("posting to DB")
            // POST TO DB
            fetch('/api/post', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    image: filename,
                    title: title,
                    date: date,
                    body: body
                })
            }).then(response => {
                console.log("hey i did it")
                console.log(response)
                if (response.status == '200') {
                    this.setState({
                        itemPosted: true
                    })
                }
            })

        }
        postItem()

    }


    render() {
        const { itemPosted } = this.state;
        if (!itemPosted) {
            return (
                <div className="m-5">
                    <h1>New Post</h1>
                    <form onSubmit={this.handleSubmit} encType="multipart/form-data" >

                        <Form.Label>Item Image</Form.Label>
                        <input
                            onChange={this.fileChanged.bind(this)}
                            ref={this.img}
                            type="file" required placeholder="Upload File" />


                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Post Title</Form.Label>
                            <Form.Control ref={this.title} type="text" placeholder="name of post" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Post Date</Form.Label>
                            <Form.Control ref={this.date} type="date" placeholder="date of post" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Post Body</Form.Label>
                            <Form.Control ref={this.body} as="textarea" rows="5" placeholder=" body of post" />
                        </Form.Group>
                        
                        
                        <Button style={{ backgroundColor: '#7C5454' }} variant='dark' type="submit">
                            Submit
        </Button>
                    </form>
                </div>

            );
        } if (itemPosted) {
            return (
                <div>
                    <p className="text-center">Item has been posted!</p>
                    <Panel itemPosted="true"></Panel>
                    {/* <a href="/admin"><Button style={{ backgroundColor: '#dd6717', margin: '0px auto;' }} variant='dark'>Inventory List</Button></a> */}
                </div>
            )
        }
    }
    // if (isLoggedIn) {
    //     return (
    //         <AdminPanel></AdminPanel>

    //     );
    // }
}


export default AddItem;
