
import React, { Component, useState } from "react";
import { Card, ListGroup, ListGroupItem, Button, Image, CardDeck, Modal } from 'react-bootstrap';
// import App from '../../App'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
var Moment = require('moment')



class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: this.props.isLoggedIn,
            createSession: false,
            editSession: false,
            posts: [],
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



    fetchPosts() {
        fetch(`/api/posts/`)
            .then(res => res.json())
            .then(json => {
                console.log("json", json.data.date)
                this.setState({
                    posts: json.data
                })
            })
    }


    componentDidMount() {

        this.fetchPosts();

    }


    render() {

        var dt = '2016-05-02T00:00:00';


        var showItems = 5;

        console.log(this.state.posts)
        const { createSession, editSession, show, showDialogue, showId, editId } = this.state;
        console.log(editSession)
        const items = this.state.posts.slice(0, showItems).map((item, i) =>
           
                <div key={i} className={`blog-card card-${i}`}>
                     <div className={`blogbox blog-text-box-${i}`}>
                        <p className="blog-title">{item.title}</p>
                    <p className="blog-date libre">{Moment(item.date).format('MMM d')}</p>
                    </div>
                     <a href={`/blog/${item.id}`}>
                <img className="post-img" alt={`${item.itemdesc1}`}
                        src={`https://kathrynjudybrown.s3.amazonaws.com/${item.image}`}
                        onError={this.usePlaceholderImg}
                    />
                   
                     </a>
                </div>
                 
                // </div>

         

        );

        const placeholderText = <div>There are no blog posts</div>


        return (
            <div className="page-content blog-page">
                <div className="blog-text-box">
                <h1 className="blog-page-title libre primaryTextColor"><i>My Blog</i></h1>
                <p className="blog-page-subtitle"><FontAwesomeIcon className="bolt-icon" icon={faBolt}></FontAwesomeIcon>November 6-25th</p>
                </div>
                <div className="blog-date-box">
                <Button className="offerings-btn" variant="basic">June</Button>
                <Button className="offerings-btn" variant="basic">May</Button>
                <Button className="offerings-btn" variant="basic">Apr</Button>
                </div>
       
                <div className="grid">
                    {items}
                    <div className="button-wrapper" >
                <Button className="offerings-btn" variant="basic">Check out my offerings</Button>
                <Button className="offerings-btn" variant="basic">Contact me</Button>
                <Button className="offerings-btn" variant="basic">Home</Button>
                </div>
             
                </div>
            </div>

        )

    }
}
export default Blog




