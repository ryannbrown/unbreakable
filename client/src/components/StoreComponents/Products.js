import React, { Component } from 'react';
import Product from './Product';
import {
  ThemeContextConsumer,
  ThemeContextProvider,
} from "../../utils/themeContext";
import {Link} from "react-router-dom"

class Products extends Component {
  static contextType = ThemeContextConsumer;
  
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      products: [],
      handle: "",
      item: "",
      thisProduct: []
    };
  }

componentDidMount() {
  const ourContext = this.context;
  let item = this.props.match.params.item
  this.setState({ item: item });
  // console.log(handle);
  ourContext.grabProduct(item);

}

componentDidUpdate() {
  const ourContext = this.context;
  console.log(ourContext.thisProduct)
}

  render() {
    const ourContext = this.context;

if (ourContext.thisProduct.options) {
  return (
    <ThemeContextConsumer>
    {(context) => (
      <div className="App">
          <Link className="product-back-btn" to="/shop/most-popular">Back to Shop</Link>
        {/* <h1>{context.thisProduct.title}</h1> */}
        <div className="product-block">
      <Product
      updateQuantityInCart={context.updateQuantityInCart}
        addVariantToCart={context.addVariantToCart}
        client={this.props.client}
        key={context.thisProduct.id.toString()}
        product={context.thisProduct}
        lineItemId={this.props.lineItemId}
      />
        </div>
    </div>
    )}
    </ThemeContextConsumer>
  );
} else return (<div>Nothing here bro</div>)
  }
}

export default Products;
