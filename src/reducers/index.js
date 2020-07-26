import { combineReducers } from "redux";

import productReducer from './productsReducer';

export default combineReducers({
    product: productReducer
})