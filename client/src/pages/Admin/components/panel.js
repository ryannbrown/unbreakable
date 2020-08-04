
import React, { Component, useState } from "react";
import { Card, ListGroup, ListGroupItem, Button, Image, CardDeck, Modal, Accordion } from 'react-bootstrap';
// import App from '../../App'

import AddItem from './additem'
import UpdateItem from './updateitem'
// import EditItem from '../EditItem/index.js'
// import EditNewItem from '../EditNewItem/index.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
var Moment = require('moment');


class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: this.props.isLoggedIn,
            createSession: false,
            editSession: false,
            posts: [],
            leads: [],
            leadToDelete: '',
            updatePosts: false,
            itemDeleted: false,
            itemPosted: null,
            pageRefresh: false,
            show: false,
            setShow: false
        };
        // this.handleDelete = this.handleDelete.bind(this);
    }

    usePlaceholderImg(ev) {
        ev.target.src = 'https://upload.wikimedia.org/wikipedia/commons/1/15/No_image_available_600_x_450.svg'
        console.log(ev);
    }

    addItem = (event) => {
        this.setState({
            createSession: true
        })
    }
    editItem = (name, uuid) => {
        console.log("editting", uuid)
        this.setState({
            editSession: true,
            editId: uuid
        })
    }
    refreshFeed = (event) => {
        this.setState({
            pageRefresh: true
        }, console.log(this.state.pageRefresh))
    }

    handleShow = (name, id) => {
        console.log("Modal for:", name)
        console.log("id to delete:", id)
        this.setState({
            show: true,
            setShow: true,
            showDialogue: name,
            showId: id
        })
    }
    handleShowLead = (name, id) => {
        console.log("Modal for:", name)
        console.log("id to delete:", id)
        this.setState({
            leadModal: true,
            leadToDelete: id
        })
    }
    closeShowLead = (name, id) => {
        console.log("Modal for:", name)
        console.log("id to delete:", id)
        this.setState({
            leadModal: false,
            })
    }
    handleClose = () => {
        this.setState({
            show: false,
            setShow: false
        })
    }


    fetchPosts() {
        fetch(`/api/posts/`)
            .then(res => res.json())
            .then(json => {
                console.log("json", json)
                this.setState({
                    posts: json.data
                })
            })
    }

    fetchLeads() {
        fetch(`/api/leads/`)
            .then(res => res.json())
            .then(json => {
                console.log("leads", json)
                this.setState({
                    leads: json.data
                })
            })
    }



    handleDelete = (id, type) => {

            let item_id = id
            console.log("deleting", item_id)
    
            const deleteItem = () => {
                console.log("posting to DB")
                // POST TO DB
                fetch('/api/remove_post', {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: item_id,
                    })
                })
                this.setState({
                    itemDeleted: true,
                    show: false
                })
            }
            deleteItem();
            this.fetchPosts()
        }

    deleteLead = id => {
        let item_id = id
        console.log("deleting", item_id)

        const deleteItem = () => {
            console.log("posting to DB")
            // POST TO DB
            fetch('/api/remove_lead', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: item_id,
                })
            })
            this.setState({
                leadModal:false
            })
        }
        deleteItem();
        this.fetchPosts()
    }

    componentDidMount() {

        this.fetchPosts();
        this.fetchLeads();

    }


    render() {

        console.log(this.state.posts)
        const { createSession, editSession, show, showDialogue, showId, editId, leadModal, leadToDelete } = this.state;
        console.log(editSession)
        const posts = this.state.posts.map((item, i) =>
            <Card key={i} className='card'>
                <span onClick={() => this.handleShow(item.title, item.id)} className="delete-icon"><FontAwesomeIcon icon={faTrash} /></span>
                <span onClick={() => this.editItem(item.title, item.id)} className="edit-icon"><FontAwesomeIcon icon={faEdit} /></span>
                <img className="post-img" alt={`${item.itemdesc1}`}
                    src={`https://kathrynjudybrown.s3.amazonaws.com/${item.image}`}
                    onError={this.usePlaceholderImg}
                />
                <h1 className="pa2">{item.title}</h1>
                <p className="post-body">{Moment(item.date).format('LL')}</p>

                <Modal centered show={show} onHide={this.handleClose}>

                    <Modal.Header closeButton>
                        <Modal.Title>Delete Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete {showDialogue}?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Cancel
                            </Button>
                        <Button variant="danger" onClick={() => this.handleDelete(showId)}>
                            Delete
                                </Button>
                    </Modal.Footer>
                </Modal>

            </Card>
        );
        const leads = this.state.leads.map((item, i) =>



            // <Card key={i} className='card'>
            //     <span onClick={() => this.handleShow(item.name, item.id)}  className="delete-icon"><FontAwesomeIcon icon={faTrash} /></span>
            //     {/* <span onClick={() => this.editItem(item.name, item.id)}  className="edit-icon"><FontAwesomeIcon icon={faEdit} /></span> */}
            //     {/* <img className="post-img" alt={`${item.itemdesc1}`}
            //         src={`https://kathrynjudybrown.s3.amazonaws.com/${item.image}`}
            //         onError={this.usePlaceholderImg}
            //     /> */}
            //     <h1 className="pa2">{item.name}</h1>
            //     <h1 className="post-body">{item.message}</h1>
            //     <p className="post-body">{item.date}</p>

            //     <Modal centered show={show} onHide={this.handleClose}>

            //             <Modal.Header closeButton>
            //                 <Modal.Title>Delete Item</Modal.Title>
            //             </Modal.Header>
            //             <Modal.Body>Are you sure you want to delete {showDialogue}?</Modal.Body>
            //             <Modal.Footer>
            //                 <Button variant="secondary" onClick={this.handleClose}>
            //                     Cancel
            //                 </Button>
            //                 <Button variant="danger" onClick={() => this.handleDelete(showId)}>
            //                     Delete
            //                     </Button>
            //             </Modal.Footer>
            //         </Modal>

            // </Card>

            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            {item.name} || {Moment(item.date).format('LLL')} <span onClick={() => this.handleShowLead(item.name, item.id)} className="">
                                <FontAwesomeIcon icon={faTrash} /></span>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body><h4>{item.email}</h4>
                         <p>{item.message}</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

        );

        const placeholderText = <div>There are no items in inventory</div>


        if (editSession) {
            return (
                <UpdateItem id={editId} />
            )
        }

        if (createSession) {
            return (
                <AddItem />
            )
        }


        if (this.state.posts.length === 0) {
            return (
                <div className="text-center m-5">
                    <Button style={{ backgroundColor: '#7C5454', marginTop: `25%` }} variant='dark' onClick={this.addItem}>Add Item</Button>
                    <div className="mt-5">Blog Posts:</div>
                    <div className="mt-3">
                        {placeholderText}
                    </div>
                </div>
            )
        }

        if (!createSession) {

            return (

                <div className="text-center m-5">

                    <Button style={{ backgroundColor: '#86BFFF', marginTop: `10%` }} variant='dark' onClick={this.addItem}>Add Item</Button>
                    {/* <i onClick={this.refreshFeed} style={{display: 'block'}} className="mt-3">refresh</i> */}
                    <h1 className="ma5 lorem primaryTextColor">Blog Posts:</h1>
                    <CardDeck>
                        {posts}
                    </CardDeck>
                    <h1 className="ma5 lorem primaryTextColor">Leads:</h1>
                    
                        {leads}
                   
                    {leadModal ? (
                        <div className="lead-modal">
                            <h2>Do you want to delete lead?</h2>
                            <button onClick={() => this.deleteLead(leadToDelete)}>Yes</button>
                            <button onClick= {() => this.closeShowLead()}>No</button>
                            </div>
                    ):( <div></div> )
        }
                </div>
            )
        }

    }
}
export default Panel




