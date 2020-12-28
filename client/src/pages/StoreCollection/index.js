// import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
// import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from "react";
// import './style.css';
import Products from "../../components/StoreComponents/Products";
import Cart from "../../components/StoreComponents/Cart";
import Nav from "../../components/Nav";
import {Link, useRouteMatch} from "react-router-dom"
import history from '../../App';
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
     handle:''
    };
    // this.handleCartClose = this.handleCartClose.bind(this);
    // this.addVariantToCart = this.addVariantToCart.bind(this);
    // this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    // this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
  }

  // handleCartClose() {
  //     console.log("clicked to close")
  //     this.setState({
  //       isCartOpen: false,
  //     });
  //   }
  // handleCartOpen = () =>  {
  //     console.log("clicked to close")
  //     this.setState({
  //       isCartOpen: true,
  //     });

  //   }

  // navMe =(slug) => {
  //   {this.props.history.push(`/shop/${slug}`)}
  // }
  
  updateHandle = (handle) => {
    const ourContext = this.context;
    console.log("updating handle")
    ourContext.grabCollection(handle);
  }

  componentDidMount() {

    
    const ourContext = this.context;
    console.log("heyyyy collections");
    console.log(this.props.match.params);
    let param = Object.values(this.props.match.params);
    console.log("param", param);

    let handle = param.toString();

    console.log(handle);
    // this.setState({handle: handle})

     ourContext.grabCollection(handle);


    //         this.props.client.collection.fetchByHandle(handle, {productsFirst: 10}).then((collection) => {
    //           // Do something with the collection
    //           console.log("this collection", collection);
    //           console.log("this collection products:", collection.products);
    //           this.setState({collectionProds: collection.products})
    //         });
  }

  // componentWillReceiveProps(nextProps) {
  //   if(this.props.match.params.lesson !== nextProps.match.params.lesson) {
  //     api.getLesson(nextProps.match.params.lesson)
  //       .then((lesson) => {
  //           this.setState({
  //           lesson: lesson[0]
  //         });
  //       });
  //     }
  //   }

  render() {

    const ourContext = this.context;
   

    console.log(ourContext)


    const { products } = this.state;

    // console.log(collections)

    if (ourContext.collections.length > 0) {
        var collectionList = ourContext.collections.map((item) => {
            return (
              // <a onClick={() => {this.navMe(item.title)}}>{item.title}</a>
              // <a href={`/shop/${item.handle}`}>{item.title}</a>
              <Link onClick={() => {this.updateHandle(item.handle)}} to={`/shop/${item.handle}`}>{item.title}</Link>
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
            </div>
          )}
          <div className="App__title">
            {/* <h1>{this.state.shop.name}: React Example</h1>
                  <h2>{this.state.shop.description}</h2> */}
            UNBREAKABLE Store
          </div>
        </header>
        <Products
          products={context.collectionProds}
          client={context.client}
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
        <div>{collectionList}</div>
        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeQssDY4fiPH8ZpRknYiyASe_94K2PyODp6bcN7_HsWFEI0Gg/viewform?embedded=true" width="640" height="1014" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
      </div>
      )}
      </ThemeContextConsumer>
    );
  }
}
