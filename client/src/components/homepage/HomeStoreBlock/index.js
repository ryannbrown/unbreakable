
import React, { Component } from 'react';

import './style.css';
import merch from "../../../media/merch.png"





export default class HomeStoreBlock extends Component {

  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top"
    };
  }


  componentDidMount() {
 
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {





    return (
    
           <div className="home-store-content">
             <div className="home-store-text">
             {/* <div> */}
               <h2>Online store</h2>
               <h2> coming soon!</h2>
             {/* </div> */}
             </div>
             <div className="home-store-img" style={{
            backgroundImage: `url(${merch})`,
            // backgroundColor: `rgb(244 244 236)`,
            opacity: `90%`,
            backgroundBlendMode: `multiply`,
            backgroundPosition: `center right`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            // backgroundAttachment: `fixed`,
            width: '100%',
            height: `100vh`
          }}></div>
           </div>

    )

  }
}