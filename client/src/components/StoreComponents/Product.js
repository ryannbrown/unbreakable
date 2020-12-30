import React, { Component } from "react";
import { Link } from "react-router-dom";
import VariantSelector from "./VariantSelector";


class Product extends Component {
  constructor(props) {
    super(props);

    let defaultOptionValues = {};
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    this.state = {
      selectedOptions: defaultOptionValues,
      selectedVariantQuantity: 0,
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.findImage = this.findImage.bind(this);
  }

  findImage(images, variantId) {
    const primary = images[0];

    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  }

  handleOptionChange(event) {
    const target = event.target;
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;

    const selectedVariant = this.props.client.product.helpers.variantForOptions(this.props.product,selectedOptions);

    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image,
    });
  }

  quantChange(action, id, quant) {
    console.log(action);
    if (action === "+") {
      this.setState({
        selectedVariantQuantity: this.state.selectedVariantQuantity + 1,
      });
      // this.props.addVariantToCart(id, quant)
    } else if (action === "-" && this.state.selectedVariantQuantity >= 1) {
      this.setState({
        selectedVariantQuantity: this.state.selectedVariantQuantity - 1,
      });
    }
  }

  handleQuantityChange(event) {
    console.log(event);
    if (event.target.value >= 0) {
      this.setState({
        selectedVariantQuantity: event.target.value,
      });
    }
  }


  render() {


    // console.log(htmlDescription)
    // console.log(this.props.product);
    // console.log( this.state.selectedVariantQuantity)
    let variantImage =
      this.state.selectedVariantImage || this.props.product.images[0];
    let variant = this.state.selectedVariant || this.props.product.variants[0];
    let variantQuantity = this.state.selectedVariantQuantity || 0;
    let variantSelectors = this.props.product.options.map((option) => {
      return (
        <VariantSelector
          handleOptionChange={this.handleOptionChange}
          key={option.id.toString()}
          option={option}
        />
      );
    });
    return (
      <div className="Product">
        <div className="prod-left">
          {/* <Link to={`/shop/item/${this.props.product.handle}`}> */}
          {this.props.product.images.length ? (
            <img
              src={variantImage.src}
              alt={`${this.props.product.title} product shot`}
            />
          ) : null}
        </div>
        <div className="prod-right">
          <div className="product-col">
            <h1 className="prod-title">{this.props.product.title}</h1>
            <span className="prod-price">${variant.price}</span>
            <div className="prod-description"/>
            <div
  dangerouslySetInnerHTML={{
    __html: this.props.product.descriptionHtml
  }}></div>

            {variantSelectors}
            <div className="product-row">
              {/* <span onClick={()=>{this.quantChange('+', variant.id, variantQuantity)}}>+</span> */}
              <div className="qty-product">Qty</div>
              <input
                min="0"
                type="number"
                defaultValue={0}
                value={variantQuantity}
                onChange={this.handleQuantityChange}
              ></input>
              {/* <span onClick={()=>{this.quantChange('-', variant.id, variantQuantity)}}>-</span> */}
              <button
                className="Product__buy button"
                onClick={() =>
                  this.props.addVariantToCart(variant.id, variantQuantity)
                }
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
