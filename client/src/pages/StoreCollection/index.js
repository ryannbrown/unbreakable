// import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
// import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
// import './style.css';
import Products from "../../components/StoreComponents/Products";
import Cart from "../../components/StoreComponents/Cart";
import Nav from "../../components/Nav"



export default class StoreCollection extends Component {

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
          this.handleCartClose = this.handleCartClose.bind(this);
          this.addVariantToCart = this.addVariantToCart.bind(this);
          this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
          this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    }


    addVariantToCart(variantId, quantity) {
        console.log(variantId, quantity)
        variantId.replace("=", "")
        // console.log("adding: ", quantity)
        this.setState({
          isCartOpen: true,
        });
    
        const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
        const checkoutId = this.props.checkout.id;
    
        return this.props.client.checkout
          .addLineItems(checkoutId, lineItemsToAdd)
          .then((res) => {
            this.setState({
              checkout: res,
            });
          });
      }
    
      updateQuantityInCart(lineItemId, quantity) {
        const checkoutId = this.state.checkout.id;
        const lineItemsToUpdate = [
          { id: lineItemId, quantity: parseInt(quantity, 10) },
        ];
    
        return this.props.client.checkout
          .updateLineItems(checkoutId, lineItemsToUpdate)
          .then((res) => {
            this.setState({
              checkout: res,
            });
          });
      }
    
      removeLineItemInCart(lineItemId) {
        const checkoutId = this.state.checkout.id;
    
        return this.props.client.checkout
          .removeLineItems(checkoutId, [lineItemId])
          .then((res) => {
            this.setState({
              checkout: res,
            });
          });
      }

      
    handleCartClose() {
        console.log("clicked to close")
        this.setState({
          isCartOpen: false,
        });
      }
    handleCartOpen = () =>  {
        console.log("clicked to close")
        this.setState({
          isCartOpen: true,
        });
      }

      componentDidMount() {
        console.log("heyyyy collections")
              console.log(this.props.match.params);
              let param = Object.values(this.props.match.params);
              console.log("param", param);
        
              let handle = param.toString();
        
                console.log(handle)
        
        
                this.props.client.collection.fetchByHandle(handle, {productsFirst: 10}).then((collection) => {
                  // Do something with the collection
                  console.log("this collection", collection);
                  console.log("this collection products:", collection.products);
                  this.setState({products: collection.products})
                });
        
        
            }

componentDidUpdate(){
    // console.log("store", this.state.isCartOpen)
}

    render() {
        const {collections} = this.props;

        console.log(collections)

        if (collections.length > 0) {
            var collectionList = collections.map((item) => {
                return (
                  <a href={`/shop/${item.handle}`}>{item.title}</a>
                )
            })
        }

        return (
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
                products={this.state.products}
                client={this.props.client}
                addVariantToCart={this.addVariantToCart}
              />
              <Cart
                updateCartClose={this.state.updateCartClose}
                checkout={this.state.checkout}
                isCartOpen={this.state.isCartOpen}
                handleCartClose={this.handleCartClose}
                updateQuantityInCart={this.updateQuantityInCart}
                removeLineItemInCart={this.removeLineItemInCart}
              />
              <div>
                {collectionList}
              </div>
              {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeQssDY4fiPH8ZpRknYiyASe_94K2PyODp6bcN7_HsWFEI0Gg/viewform?embedded=true" width="640" height="1014" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
            </div>
          );
    }
}