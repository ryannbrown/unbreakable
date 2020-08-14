
// import React, { Component, useState } from "react";
// import { Card, ListGroup, ListGroupItem, Button, Image, CardDeck, Modal } from 'react-bootstrap';
// // import App from '../../App'
// import "./style.css"
// import $ from 'jquery';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
// var Moment = require('moment')




// class BlogPost extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: this.props.isLoggedIn,
//       createSession: false,
//       editSession: false,
//       posts: [],
//       updatePosts: false,
//       itemDeleted: false,
//       itemPosted: null,
//       pageRefresh: false,
//       show: false,
//       setShow: false

//     };
//     // this.handleDelete = this.handleDelete.bind(this);
//   }

//   usePlaceholderImg(ev) {
//     ev.target.src = 'https://upload.wikimedia.org/wikipedia/commons/1/15/No_image_available_600_x_450.svg'
//     console.log(ev);
//   }



//   fetchPosts(param) {
//     fetch(`/api/posts/${param}`)
//       .then(res => res.json())
//       .then(json => {
//         console.log("json", json)
//         this.setState({
//           posts: json.data[0],
//         })
//       }).then(res => {
//         this.addSpaces()
//       })

//   }

//   addSpaces() {
//     $('.post-body').each(function () {
//       var text = $(this).text();
//       $(this).html(text.replace(/\*/g, '<br><br>'));
//     });
//   }


//   componentDidMount() {

//     let valParam = Object.values(this.props.match.params);
//     let param = valParam.toString();

//     this.fetchPosts(param);


//   }

//   componentDidUpdate() {
//     //  this.addSpaces()
//   }


//   render() {

//     console.log(this.state.posts)
//     console.log(this.state.postBody)
//     const { posts, postBody } = this.state;

//     const placeholderText = <div>There are no blog posts</div>

//     // var sectionStyle = {
//     //     background: `url(https://kathrynjudybrown.s3.amazonaws.com/${posts.image}) no-repeat center center fixed`,
//     //     backgroundSize:'cover'


//     // }


//     return (


//       <article data-name="article-full-bleed-background">
//         <div class="cf" style={{
//           backgroundImage: `url(https://kathrynjudybrown.s3.amazonaws.com/${posts.image})`,
//           backgroundPosition: `center`,
//           backgroundSize: `cover`,
//           backgroundRepeat: `no-repeat`,
//           backgroundAttachment: `fixed`
//           //   cover no-repeat center center fixed`
//         }}>
//           <div class="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
//             <header class="bb b--black-70 pv4">
//               <a href="/blog"><div className="back-link"><FontAwesomeIcon className="bolt-icon" icon={faChevronLeft}></FontAwesomeIcon></div></a>
//               <h3 class="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">{posts.title}</h3>
//               <h4 class="f3 fw4 i lh-title mt0">{Moment(posts.date).format('MMM d, yy')}</h4>
//             </header>
//             <section class="pt5 pb4">
//               <p class="times lh-copy measure f4 mt0 post-body">
//                 {posts.body}
//               </p>
//               <a href="/blog"><div><Button className="offerings-btn w-25" variant="basic">Back</Button>
//           </div></a>
//             </section>
//           </div>
//         </div>
//       </article>


//       // <div>
//       //   <Card className='card'>
//       //     <img className="post-img" alt={`didnt work`}
//       //         src={`https://kathrynjudybrown.s3.amazonaws.com/${posts.image}`}
//       //         onError={this.usePlaceholderImg}
//       //     />
//       //     <p className="text-center center">Post Name: {posts.title}</p>
//       //     <p className="text-center center post-body">Post Body: {posts.body}</p>
//       // </Card>
//       // </div>

//     )

//   }
// }
// export default BlogPost




