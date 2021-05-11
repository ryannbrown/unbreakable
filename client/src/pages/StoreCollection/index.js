// import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
// import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from "react";
// import './style.css';
import Products from "../../components/StoreComponents/Products";
import Cart from "../../components/StoreComponents/Cart";
import Nav from "../../components/Nav";
import { Link, useRouteMatch } from "react-router-dom";
import waveImg from "../../media/wave-img.png";
import history from "../../App";
import {
  ThemeContextConsumer,
  ThemeContextProvider,
} from "../../utils/themeContext";

export default class StoreCollection extends Component {
  static contextType = ThemeContextConsumer;

  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      products: [],
      handle: "",
    };
  }

  updateHandle = (handle, i) => {
    let activeClass = document.getElementsByClassName('is-lit');
    if (activeClass.length > 0) {
      activeClass[0].classList.remove('is-lit')
    }
    // console.log(activeClass)
    this.setState({ handle: handle });
    const ourContext = this.context;
    console.log("updating handle");
    ourContext.grabCollection(handle);
    let makeActive = document.getElementById(`store-link-${i}`);
    // console.log(thisHere.classList);
    makeActive.classList.add("is-lit")
  };

  makeFirstLinkActive = () => {
    // will only fire if no other links are active 
    if (document.getElementsByClassName('is-lit').length == 0) {
      // saves arrays as object
      let thisHere = document.getElementsByClassName('linkz')
      // grabs last one which happens to be most popular. If Most Popular collection gets deleted, we will have issues.
      let mostPop = thisHere[0]
      if (mostPop) {
        // makes it bold
        mostPop.classList.add('is-lit')
      }
    }
  }
  componentDidMount() {

  
    const ourContext = this.context;
    // console.log("heyyyy collections");
    // console.log(this.props.match.params);
    let param = Object.values(this.props.match.params);
    // console.log("param", param);
    let handle = param.toString();
    this.setState({ handle: handle });
    // console.log(handle);
    ourContext.grabCollection(handle);
  }

  componentDidUpdate() {
    this.makeFirstLinkActive()
 
  }

  render() {
    
    const ourContext = this.context;
    const { products } = this.state;

    // if (ourContext.collections.length > 0) {
    //   document.getElementById('store-link-0').classList.add("is-lit")
    // }

    // console.log(collections)

    if (ourContext.collections.length > 0) {
      
      var collectionList = ourContext.collections.map((item,i) => {
        return (
          <Link className="linkz" id={`store-link-${i}`}
            onClick={() => {
              this.updateHandle(item.handle, i);
            }}
            to={`/shop/${item.handle}`}
          >
            {item.title}
          </Link>
        );
      });
    }

    if (ourContext.collectionProds.length > 0) {
      var productList = ourContext.collectionProds.map((item, i) => {
        return (
   
            <div className={`prod-block number-${i}`}>
                <Link to={`/shop/${this.state.handle}/${item.handle}`}>
         
               <img src={item.images[0].src} className={`prod-img item-${i}`}></img>
            </Link>
        </div>
        )
      } )
    }

    return (
      <ThemeContextConsumer>
        {(context) => (
          <div className="App">
            <header
              style={{
                backgroundImage: `url(${waveImg})`,
                backgroundBlendMode: `multiply`,
                backgroundPosition: `center top`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`,
                height: `25vh`,
                width: "100%",
                color: "white",
                display: `flex`,
                flexDirection: "column",
                alignItems: `center`,
                justifyContent: "center",
                position: `relative`,
                
              }}
              className="App__header"
            >
              {!this.state.isCartOpen && (
                <div className="App__view-cart-wrapper"></div>
              )}
              <div className="App__title">
                <h1>Shop Unbreakable Merchandise</h1>
              </div>
            </header>
              <h1 className="collection-title">{this.state.handle}</h1>
            <div className="products-block">
              {context.collectionProds.length > 0 ?
            <div className="products-wrapper">
                {productList}
                </div> : <div className="products-wrapper collection-empty"><i>Sorry, but there appear to be no items available in this collection, try another!</i></div>
              }
            <div className="collection-nav">{collectionList}</div>
            </div>
          </div>
        )}
      </ThemeContextConsumer>
    );
  }
}
