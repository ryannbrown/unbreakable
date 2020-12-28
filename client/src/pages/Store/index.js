// import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
// import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
import './style.css';
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
        // this.state = {
        //     isCartOpen: false,
        //     checkout: { lineItems: [] },
        //     products: [],
        //     shop: {},
        //     collections: [],
        //     updateCartClose: false
        //   };
          // this.handleCartClose = this.handleCartClose.bind(this);
          // this.addVariantToCart = this.addVariantToCart.bind(this);
          // this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
          // this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    }


    // updateHandle = (handle) => {
    //   const ourContext = this.context;
    //   console.log("updating handle")
    //   ourContext.grabCollection(handle);
    // }

    render() {
      // console.log(this.props)
        const {collections} = this.props;
        // console.log("products", this.state.products)

        // console.log("collections", collections)

        if (collections.length > 0) {
            var collectionList = collections.map((item) => {
                return (
                  // <Link onClick={() => {this.updateHandle(item.handle)}} to={`/shop/${item.handle}`}>{item.title}</Link>
                  <Link to={`/shop/${item.handle}`}>{item.title}</Link>
                )
            })
        }

        return (  
           <ThemeContextConsumer>
          {context => (
            <div className="App">
                {/* <Nav isCartOpen={this.state.isCartOpen} handleCartClose={this.handleCartClose} handleCartOpen={this.handleCartOpen}></Nav> */}
              <header className="App__header">
                {!this.state.isCartOpen && (
                  <div className="App__view-cart-wrapper">
                    <button
                      className="App__view-cart"
                      onClick={this.handleCartOpen}
                    >
                      Cart
                    </button>
                  </div>
                )}
                <div className="App__title">
                  {/* <h1>{this.state.shop.name}: React Example</h1>
                  <h2>{this.state.shop.description}</h2> */}
                  UNBREAKABLE Store
                </div>
              </header>
              <Products
                products={this.props.products}
                client={this.props.client}
                addVariantToCart={context.addVariantToCart}
              />
              {/* <Cart
                updateCartClose={this.state.updateCartClose}
                checkout={this.state.checkout}
                isCartOpen={this.state.isCartOpen}
                handleCartClose={this.handleCartClose}
                updateQuantityInCart={this.updateQuantityInCart}
                removeLineItemInCart={this.removeLineItemInCart}
              /> */}
              <div>
                {collectionList}
              </div>
              {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeQssDY4fiPH8ZpRknYiyASe_94K2PyODp6bcN7_HsWFEI0Gg/viewform?embedded=true" width="640" height="1014" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
            </div>
          )}
          </ThemeContextConsumer>
        )
            }
          }
