// import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
// import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
import './style.css';
import waveImg from "../../media/wave-img.png"
import Products from "../../components/StoreComponents/Products";
import Cart from "../../components/StoreComponents/Cart";
import Nav from "../../components/Nav"
import {Link} from "react-router-dom"
import { ThemeContextConsumer, ThemeContextProvider } from "../../utils/themeContext";



export default class Store extends Component {

    constructor(props) {
        super(props);

        this.listener = null;
        this.state = {
            isCartOpen: this.props.isCartOpen,
            checkout: this.props.checkout,
            products: this.props.products,
            shop: this.props.shop,
            collections: this.props.collections,
            updateCartClose: this.props.updateCartClose
          };
    }

    makeActiveLink = () => {
      console.log("make active")
    }

    render() {
        const {collections, products} = this.props;


        if (collections.length > 0) {
            var collectionList = collections.map((item) => {
                return (
                  <Link to={`/shop/${item.handle}`}>{item.title}</Link>
                )
            })
        }
        if (products.length > 0) {
          console.log(products)
          var productList = products.map((item, i) => {
            return (
              <div className={`prod-block ${i}`}>
                <Link onClick={this.makeActiveLink} to={`/shop/item/${this.props.product.handle}`}>
                 {/* <Link to={`/shop`}> */}
                    <img src={item.images[0].src} className={`prod-img ${i}`}></img>
                 </Link>
             </div>
            )
          } )
        }

        return (  
           <ThemeContextConsumer>
          {context => (
            <div className="App">
              <header  style={{
          backgroundImage: `url(${waveImg})`,
          backgroundBlendMode: `multiply`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          height: `25vh`,
          width: "100%",
          color: 'white',
          display: `flex`,
          flexDirection: "column",
          alignItems: `center`,
          justifyContent: "center",
          position: `relative`,
          marginTop: '80px'
        }} className="App__header">
                {!this.state.isCartOpen && (
                  <div className="App__view-cart-wrapper">
                  </div>
                )}
                <div className="App__title">
                  <h1>Shop Unbreakable Merchandise
                    </h1>
                </div>
              </header>
              <h1 className="collection-title">All Merchandise</h1>
              <div className="products-block">
              <div className="products-wrapper">
                {productList}
                </div>
              <div className="collection-nav">
                {collectionList}
              </div>
              </div>
            </div>
          )}
          </ThemeContextConsumer>
        )
            }
          }
