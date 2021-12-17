import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { medsListReducer, medsDetailsReducer } from "./reducers/medsReducers.js";
import { doctorsListReducer, doctorsDetailsReducer } from "./reducers/doctorsReducers.js";
import { ambulancesListReducer, ambulancesDetailsReducer } from "./reducers/ambulancesReducers.js";

const reducer = combineReducers({
  doctorsList: doctorsListReducer,
  ambulancesList: ambulancesListReducer,
  medsList: medsListReducer,
  medsDetails: medsDetailsReducer,
  doctorsDetails: doctorsDetailsReducer,
  ambulancesDetails: ambulancesDetailsReducer,
  
});
const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
