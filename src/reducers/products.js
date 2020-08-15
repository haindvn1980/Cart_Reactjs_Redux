//import
let initialState = [
  {
    id: 1,
    name: "iphone 7 - USA",
    madein: "Made in USA",
    image: 'https://didongthongminh.vn/upload_images/2019/05/Oppo-Reno-4-xanh.png',
    price: 500,
    inventory: 10,
    rating: 4
  },
  {
    id: 1,
    name: "Galary Note 7",
    madein: "Made in Viet Nam",
    image: 'https://didongthongminh.vn/upload_images/2020/08/c2-copper-405x432-1.png',
    price: 600,
    inventory: 11,
    rating: 5
  }
  , {
    id: 1,
    name: "iphone 17 china",
    madein: "Made in China",
    image: 'https://didongthongminh.vn/upload_images/2020/08/Oppo-Reno4-Pro-white.png',
    price: 1000,
    inventory: 12,
    rating: 3
  }
]

const products = (state = initialState, action) => {
  switch (action.type) {

    default: return [...state];
  }
}
export default products;