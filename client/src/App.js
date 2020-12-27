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

// import Page from "./pages/Homepage/index"
import Shop from "./pages/Store/index"
import ShopCollection from "./pages/StoreCollection/index"
// import Page from "./pages/Homepage/index"
import About from "./pages/About"
import Homepage from "./pages/Homepage/index"
import Blog from "./pages/Blog/index"
import BlogPost from "./pages/BlogPost/index"
import Nav from "./components/Nav/index"
import createHistory from 'history/createBrowserHistory';
import {Helmet} from "react-helmet";

// const MyContext = React.createContext();


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
               <Helmet>
                      <meta charSet="utf-8" />
                      <title>Unbreakable</title>
                      <content>Unbreakable by Carolyn Skowron</content>
                      {/* <link rel="canonical" href="http://www.colemandefense.com/" /> */}
                  </Helmet>
               <Nav></Nav>
             <Switch>
               {/* <Route path="/" component={Page}/> */}
               <Route path="/blog/:post" component={BlogPost}/>
             <Route path="/blog" component={Blog}/>
             <Route path="/about" component={About}/>
             <Route exact path="/" component={Homepage}/>
               <Route exact path="/shop" render={(props) => <Shop client={this.props.client} {...props} isCartOpen={isCartOpen} checkout={checkout} products={products } shop={shop} collections={collections} addVariantToCart={this.addVariantToCart}
              handleCartClose={this.handleCartClose} updateCartClose={this.updateCartClose} updateQuantityInCart={this.updateQuantityInCart} removeLineItemInCart={this.removeLineItemInCart} />} />
              <Route path="/shop/:collection" render={(props) => <ShopCollection client={this.props.client} {...props} isCartOpen={isCartOpen} checkout={checkout} products={products } shop={shop} collections={collections} addVariantToCart={this.addVariantToCart}
             handleCartClose={this.handleCartClose} updateCartClose={this.updateCartClose} updateQuantityInCart={this.updateQuantityInCart} removeLineItemInCart={this.removeLineItemInCart} />} />
               <Route path="/" component={Homepage}/>
             
             {/* <Route path="/" component={Page}/> */}
           
             </Switch>
           </Router>
      </div>
    
    );
  }
}

export default App;
