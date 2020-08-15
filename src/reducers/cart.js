import * as types from './../constants/ActionType';
//let data = JSON.parse(localStorage.getItem('CART'));
//let initialState = data ? data : '';
let initialState = [
  {
    product: {
      id: 1,
      name: "iphone 17 china",
      madein: "Made in China",
      image: 'https://didongthongminh.vn/upload_images/2020/08/Oppo-Reno4-Pro-white.png',
      price: 1500,
      inventory: 12,
      rating: 3
    },
    quantity: 5
  },
  {
    product: {
      id: 1,
      name: "iphone 17 china",
      madein: "Made in China",
      image: 'https://didongthongminh.vn/upload_images/2020/08/Oppo-Reno4-Pro-white.png',
      price: 1000,
      inventory: 12,
      rating: 3
    }, quantity: 8
  }
];

const cart = (state = initialState, action) => {
  switch (action.types) {
    case types.ADD_TO_CART:
      console.log('xxx');
      console.log(action);
      return [...state]

    default: return [...state];
  }
}
export default cart;