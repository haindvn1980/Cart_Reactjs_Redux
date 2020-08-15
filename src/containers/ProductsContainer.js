import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Products from './../components/Products'
import Product from './../components/Product';
import { actAddToCart } from './../actions/index';


class ProductsContainer extends Component {
  render() {
    let { products } = this.props;
    return (
      <Products>
        {this.showProducts(products)}
      </Products>
    );
  }

  showProducts(products) {
    let result = null;
    let { onAddToCart } = this.props;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <Product
          key={index}
          product={product}
          onAddToCart={onAddToCart} />
      })
    }
    return result;
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1));
    }
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      madein: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    })
  ).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
