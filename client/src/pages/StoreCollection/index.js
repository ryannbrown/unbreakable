// import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
// import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from "react";
// import './style.css';
import Products from "../../components/StoreComponents/Products";
import Cart from "../../components/StoreComponents/Cart";
import Nav from "../../components/Nav";
import { Link, useRouteMatch } from "react-router-dom";
import waveImg from "../../media/wave-img.jpg";
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

  updateHandle = (handle) => {
    this.setState({ handle: handle });
    const ourContext = this.context;
    console.log("updating handle");
    ourContext.grabCollection(handle);
  };

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

  render() {
    const ourContext = this.context;

    console.log(ourContext.collectionProds);

    const { products } = this.state;

    // console.log(collections)

    if (ourContext.collections.length > 0) {
      var collectionList = ourContext.collections.map((item) => {
        return (
          <Link
            onClick={() => {
              this.updateHandle(item.handle);
            }}
            to={`/shop/${item.handle}`}
          >
            {item.title}
          </Link>
        );
      });
    }

    if (ourContext.collectionProds.length > 0) {
      // console.log(products)
      var productList = ourContext.collectionProds.map((item) => {
        return (
            //  <Link to={`/shop/item/${this.props.product.handle}`}>
            //  <Link to={`/shop/${this.state.handle}/${item.handle}`}>
             <Link to={`/shop/${this.state.handle}/${item.handle}`}>
               <img className="product-image" src={item.images[0].src} className="prod-img"></img>
             </Link>
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
                // backgroundColor: `#196196`,
                // opacity: `100%`,
                backgroundBlendMode: `multiply`,
                backgroundPosition: `center top`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`,
                height: `50vh`,
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
            <div className="products-wrapper">
                {productList}
                </div>
              {/* <Products
                products={context.collectionProds}
                client={context.client}
                addVariantToCart={context.addVariantToCart}
              /> */}
            <div className="collection-nav">{collectionList}</div>
            </div>
          </div>
        )}
      </ThemeContextConsumer>
    );
  }
}
