import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  medsListReducer,
  medsDetailsReducer,
} from "./reducers/medsReducers.js";
import {
  doctorsListReducer,
  doctorsDetailsReducer,
} from "./reducers/doctorsReducers.js";
import {
  ambulancesListReducer,
  ambulancesDetailsReducer,
} from "./reducers/ambulancesReducers.js";
import { cartReducer } from "./reducers/cartReducers.js";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducers.js";

import { orderCreateReducer , orderDetailsReducer } from "./reducers/orderReducers.js";

const reducer = combineReducers({
  doctorsList: doctorsListReducer,
  ambulancesList: ambulancesListReducer,
  medsList: medsListReducer,
  medsDetails: medsDetailsReducer,
  doctorsDetails: doctorsDetailsReducer,
  ambulancesDetails: ambulancesDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
