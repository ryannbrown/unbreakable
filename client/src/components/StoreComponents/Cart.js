import React, {Component} from 'react';
import LineItem from './LineItem';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.listener=null;
    this.state = {
      isCartOpen: this.props.isCartOpen,
    };

    this.openCheckout = this.openCheckout.bind(this);
  }

  openCheckout() {
    window.open(this.props.checkout.webUrl);
  }

  componentDidUpdate() {
    console.log(this.props.isCartOpen)
    // console.log(this.props.updateQuantityInCart)
  }

  render() {
    console.log("update cart close", this.props.updateCartClose)
    let line_items = this.props.checkout.lineItems.map((line_item) => {
      return (
        <LineItem
          updateQuantityInCart={this.props.updateQuantityInCart}
          removeLineItemInCart={this.props.removeLineItemInCart}
          key={line_item.id.toString()}
          line_item={line_item}
        />
      );
    });

    return (
      <div className={`Cart ${this.props.isCartOpen && !this.props.updateCartClose ? 'Cart--open' : ''}`}>
        <header className="Cart__header">
          <h2>Your cart</h2>
          <button
            onClick={this.props.handleCartClose}
            className="Cart__close">
            ×
          </button>
        </header>
        <ul className="Cart__line-items">
          {line_items}
        </ul>
        <footer className="Cart__footer">
        <div className="grid__item medium-up--one-half cart-note">
      <label for="CartSpecialInstructions" className="cart-note__label small--text-center">{this.props.checkout.note}</label>
      {/* <textarea placeholder="Special Requests" name="note" id="CartSpecialInstructions" className="cart-note__input" data-cart-notes>{ this.props.checkout.note}</textarea> */}
    </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Subtotal</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {this.props.checkout.subtotalPrice}</span>
            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Taxes</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {this.props.checkout.totalTax}</span>
            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Total</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {this.props.checkout.totalPrice}</span>
            </div>
          </div>
          <button className="Cart__checkout button" onClick={this.openCheckout}>Checkout</button>
        </footer>
      </div>
    )
  }
}

export default Cart;
