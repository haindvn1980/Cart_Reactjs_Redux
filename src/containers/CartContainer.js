import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as message from './../constants/Message.js'
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from '../components/CartResult.js';
import { actRemoveProductInCart, actChangeMessage, actUpdateProductInCart } from './../actions/index'

class CartContainer extends Component {
  render() {
    let { cart } = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    );
  }

  showCartItem = (cart) => {
    let result = <tr>{message.MSG_CART_EMPTY}</tr>;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          < CartItem
            key={index}
            item={item}
            index={index}
            onDeleteProductInCart={this.props.onDeleteProductInCart}
            onChangeMessage={this.props.onChangeMessage}
            onUpdateProductInCart={this.props.onUpdateProductInCart}
          />
        );
      });
    }
    return result;
  }
  showTotalAmount = (cart) => {
    let result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />
    }
    return result;
  }
}


CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        madein: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onDeleteProductInCart: PropTypes.func.isRequired,
  onUpdateProductInCart: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: (product) => {
      dispatch(actRemoveProductInCart(product));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message))
    },
    onUpdateProductInCart: (product, quantity) => {
      dispatch(actUpdateProductInCart(product, quantity))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
