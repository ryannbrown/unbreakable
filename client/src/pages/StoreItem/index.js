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

export default class StoreItem extends Component {
  static contextType = ThemeContextConsumer;

  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      products: [],
      handle: "",
      collection: ""
    };
  }

  componentDidMount() {
    const ourContext = this.context;
    let collection = this.props.match.params.collection;
    let item = this.props.match.params.item
    this.setState({ item: item
    , collection: collection });
    // console.log(handle);
    ourContext.grabProduct(item);
  }
  
  render() {
    const ourContext = this.context;
    // console.log(ourContext);
    
    console.log(ourContext.thisProduct == true)
    
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

    return (
      <ThemeContextConsumer>
        {(context) => (
          <div className="App">
              <Link className="product-back-btn" to={`/${this.state.collection}/${this.state.handle}`}> Back to {this.state.collection}</Link>
            <div className="product-block">
              <div className="product-description">
              </div>

            </div>
          </div>
        )}
      </ThemeContextConsumer>
    );
  }
}
