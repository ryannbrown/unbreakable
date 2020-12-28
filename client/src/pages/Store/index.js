// import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
// import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
import './style.css';
import waveImg from "../../media/wave-img.jpg"
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
          var productList = products.map((item) => {
            return (
                //  <Link to={`/shop/item/${this.props.product.handle}`}>
             
                 <Link to={`/shop`}>
                   <img className="product-image" src={item.images[0].src} className="prod-img"></img>
                 </Link>
            )
          } )
        }

        return (  
           <ThemeContextConsumer>
          {context => (
            <div className="App">
              <header  style={{
          backgroundImage: `url(${waveImg})`,
          // backgroundColor: `#196196`,
          // opacity: `100%`,
          backgroundBlendMode: `multiply`,
          backgroundPosition: `center top`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          // backgroundAttachment: `fixed`,
          // height: `${this.props.height}`,
          height: `50vh`,
          width: "100%",
          color: 'white',
          display: `flex`,
          flexDirection: "column",
          alignItems: `center`,
          justifyContent: "center",
          position: `relative`,
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
              {/* <Products
                products={this.props.products}
                client={this.props.client}
                addVariantToCart={context.addVariantToCart}
              /> */}
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
