import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  medsListReducer,
  medsDetailsReducer,
  medsDeleteReducer,
  medsCreateReducer,
  medsUpdateReducer,
} from "./reducers/medsReducers.js";
import {
  doctorsListReducer,
  doctorsDetailsReducer,
} from "./reducers/doctorsReducers.js";
import {
  ambulancesListReducer,
  ambulancesDetailsReducer,
} from "./reducers/ambulancesReducers.js";
import { appoinmentCreateReducer } from "./reducers/appoinmentReducers.js";
import { cartReducer } from "./reducers/cartReducers.js";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from "./reducers/userReducers.js";

import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderListMyReducer,
  orderListReducer,
} from "./reducers/orderReducers.js";

const reducer = combineReducers({
  doctorsList: doctorsListReducer,
  ambulancesList: ambulancesListReducer,
  medsList: medsListReducer,
  medsDetails: medsDetailsReducer,
  medsDelete: medsDeleteReducer,
  medsCreate: medsCreateReducer,
  medsUpdate: medsUpdateReducer,
  doctorsDetails: doctorsDetailsReducer,
  ambulancesDetails: ambulancesDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
  orderList: orderListReducer,
  appoinmentCreate: appoinmentCreateReducer,
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
