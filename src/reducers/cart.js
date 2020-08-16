import * as Types from './../constants/ActionType';
let data = JSON.parse(localStorage.getItem('CART'));
let initialState = data ? data : '';

const cart = (state = initialState, action) => {
  let { product, quantity } = action;
  let index = -1;
  switch (action.type) {
    case Types.ADD_TO_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity = state[index].quantity + 1;
      } else {
        state.push({
          product,
          quantity
        });
      }
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state]

    case Types.DELETE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state]

    case Types.UPDATE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity = quantity;
      }
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state]


    default: return [...state];
  }
}

let findProductInCart = (cart, product) => {
  var index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
}
export default cart;