import { combineReducers } from "redux";
import CartReducer from "./_reducers/CartReducer";
import ProductReducer from "./_reducers/ProductReducer";

const RootReducer = combineReducers({
    ProductReducer, CartReducer
})

export default RootReducer;