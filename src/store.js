import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// import { data } from "./data";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderHistoryListReducer,
  orderPayReducer,
} from "./reducers/orderReducers";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
import {
  userProfileDetailsReducer,
  userRegisterReducer,
  userSigninReducer,
} from "./reducers/userReducers";

const initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {},
    paymentMethod: "PayPal",
  },
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userRegister: userRegisterReducer,

  userSignin: userSigninReducer,
  orderCreate: orderCreateReducer,

  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderHistoryList: orderHistoryListReducer,

  userDetails: userProfileDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
