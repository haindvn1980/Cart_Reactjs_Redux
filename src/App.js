import React, { Component } from 'react';
import Header from './components/Header.js';
//import Products from './components/Products.js';
import ProductsContainer from './containers/ProductsContainer.js';
import Message from './components/Message.js';
import Cart from './components/Cart.js';
import Footer from './components/Footer.js';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer />
            <Message />
            <Cart />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
