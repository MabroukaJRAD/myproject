import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
import AuthReducer from "./AuthReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  AuthReducer: AuthReducer,
});

export default reducers;
