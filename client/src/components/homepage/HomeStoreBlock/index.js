
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
        <div>
          <div className="home-store-block" style={{
            backgroundImage: `url(${merch})`,
            backgroundColor: `#F9F8F0`,
            opacity: `90%`,
            backgroundBlendMode: `multiply`,
            backgroundPosition: `center right`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            // backgroundAttachment: `fixed`,
            height: `100vh`,
            display: `flex`,
            alignItems: `center`,
            position: `relative`
          }}>
           
           <div className="home-store-content">
             {/* <div> */}
               <h2>Online store</h2>
               <h2> coming soon!</h2>
             {/* </div> */}
           </div>
          </div>
        </div>
    )

  }
}