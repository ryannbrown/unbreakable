import React, { Component } from "react";
import Client from 'shopify-buy';
require('dotenv').config();
const { Provider, Consumer } = React.createContext();
// import { ThemeContextProvider } from "./utils/themeContext";


const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_TOKEN,
  
});
 class ThemeContextProvider extends Component {
   constructor(props) {
    super(props);

    this.listener = null;
     this.state = {
       isCartOpen: false,
       checkout: { lineItems: [] },
      //  checkout: (JSON.parse(localStorage.getItem('checkout'))) || null,
       products: [],
       shop: {},
       collections: [],
       isCartOpen: false,
       collectionProds: []
       
     };
     this.addVariantToCart = this.addVariantToCart.bind(this);
     this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
     this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
   }
  


  componentDidMount() {

    console.log(this.state.checkout)
//    const getSavedCheckout = () => {
//       var storedCheckout = localStorage.getItem('checkout')
//       var parsedCheckout = JSON.parse(storedCheckout)
// // console.log(parsedCheckout, "retrieved from storage");
// // this.setState({checkout: storedCheckout})
//     }

//     getSavedCheckout();
  

 client.collection.fetchAllWithProducts().then((collections) => {
    // Do something with the collections
    // console.log(collections);
    // console.log(collections[1].title);
    this.setState({
      collections: collections,
    });
  });

 client.checkout.create().then((res) => {
    console.log(res, "app")
    this.setState({
      checkout: res,
    });
  });

 client.product.fetchAll().then((res) => {
    // console.log("products", res);
    this.setState({
      products: res,
    });
  });

 client.shop.fetchInfo().then((res) => {
    this.setState({
      shop: res,
    });
  });
}

componentDidUpdate() {
  // console.log(this.state.checkout);
  // console.log(this.state.checkout.lineItems);
}

  toggleTheme = () => {
    console.log('toggle theme')
    this.setState(prevState => {
      return {
        theme: prevState.theme === "Day" ? "Night" : "Day"
      };
    });
  };

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


grabCollection = (handle) => {client.collection.fetchByHandle(handle, {productsFirst: 10}).then((collection) => {
    // Do something with the collection
    // console.log("this collection", collection);
    // console.log("this collection products:", collection.products);
    // this.setState({collectionProds: collection.products})
    this.setState({collectionProds: collection.products})
  });
}


addVariantToCart(variantId, quantity) {
  console.log("adding variant", variantId, quantity)
  console.log(variantId, quantity)
  variantId.replace("=", "")
  // console.log("adding: ", quantity)
  this.setState({
    isCartOpen: true,
  });

  const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
  const checkoutId = this.state.checkout.id;

  return client.checkout
    .addLineItems(checkoutId, lineItemsToAdd)
    .then((res) => {
      localStorage.setItem('checkout', JSON.stringify(res))
      console.log(res, "checkout")
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

  return client.checkout
    .updateLineItems(checkoutId, lineItemsToUpdate)
    .then((res) => {
      this.setState({
        checkout: res,
      });
    });
}

removeLineItemInCart(lineItemId) {
  const checkoutId = this.state.checkout.id;

  return client.checkout
    .removeLineItems(checkoutId, [lineItemId])
    .then((res) => {
      this.setState({
        checkout: res,
      });
    });
}

  render() {
    return (
      <Provider
        value={{ 
          // theme: this.state.theme,
          //  toggleTheme: this.toggleTheme, 
           isCartOpen: this.state.isCartOpen,
            handleCartOpen: this.handleCartOpen,
            handleCartClose: this.handleCartClose,
            checkout: this.state.checkout,
            collections:this.state.collections,
            products: this.state.products,
            shop: this.state.shop,
            addVariantToCart: this.addVariantToCart,
            removeLineItemInCart: this.removeLineItemInCart,
            updateQuantityInCart: this.updateQuantityInCart,
            grabCollection: this.grabCollection,
            collectionProds: this.state.collectionProds
           }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
