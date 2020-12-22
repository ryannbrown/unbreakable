import React , {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Container, Nav, Button, Col, Row, Card } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Nav from "./components/Nav"

// import Page from "./pages/Homepage/index"
import Shop from "./pages/Store/index"
import ShopCollection from "./pages/StoreCollection/index"
import Homepage from "./pages/Homepage/index"
import createHistory from 'history/createBrowserHistory';


class App extends Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {},
      collections: [],
      updateCartClose: false
    };


  }

  componentWillMount() {
    this.props.client.collection.fetchAllWithProducts().then((collections) => {
      // Do something with the collections
      // console.log(collections);
      // console.log(collections[1].title);
      this.setState({
        collections: collections,
      });
    });

    this.props.client.checkout.create().then((res) => {
      this.setState({
        checkout: res,
      });
    });

    this.props.client.product.fetchAll().then((res) => {
      console.log("products", res);
      this.setState({
        products: res,
      });
    });

    this.props.client.shop.fetchInfo().then((res) => {
      this.setState({
        shop: res,
      });
    });
  }

  handleCartClose = () => {
    console.log("clicked to close")
    this.setState({
      isCartOpen: false,
    });
  }
handleCartOpen = () =>  {
    console.log("clicked to open")
    this.setState({
      isCartOpen: true,
    });
  }
  
 

  componentDidUpdate(prevState) {
    // if (this.state.updateCartClose !== prevState.updateCartClose && this.state.isCartOpen == true) {
    //   console.log(this.state.isCartOpen, "updated app")
    //   this.setState({
    //     updateCartClose: true
    //   })
    // }
  }

  render() {

    const {isCartOpen, checkout, products, shop, collections } = this.state;

    return (
      <div className="App">
           <Router>
           <Nav checkout={checkout} isCartOpen={this.state.isCartOpen} handleCartClose={this.handleCartClose} handleCartOpen={this.handleCartOpen}></Nav>
             <Switch>
               {/* <Route path="/" component={Page}/> */}
               <Route exact path="/shop" render={(props) => <Shop client={this.props.client} {...props} isCartOpen={isCartOpen} checkout={checkout} products={products } shop={shop} collections={collections} addVariantToCart={this.addVariantToCart}
              handleCartClose={this.handleCartClose} updateCartClose={this.updateCartClose} updateQuantityInCart={this.updateQuantityInCart} removeLineItemInCart={this.removeLineItemInCart} />} />

              <Route path="/shop/:collection" render={(props) => <ShopCollection client={this.props.client} {...props} isCartOpen={isCartOpen} checkout={checkout} products={products } shop={shop} collections={collections} addVariantToCart={this.addVariantToCart}
             handleCartClose={this.handleCartClose} updateCartClose={this.updateCartClose} updateQuantityInCart={this.updateQuantityInCart} removeLineItemInCart={this.removeLineItemInCart} />} />
               <Route path="/" component={Homepage}/>
             </Switch>
           </Router>
      </div>
    
    );
  }
}

export default App;
