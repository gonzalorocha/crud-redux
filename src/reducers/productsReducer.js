import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_PRODUCT,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_ERROR,
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR
} from './../types'


//Each reducer have his own state
const initialState = {
    products: [],
    error: false,
    loading: false,
    selectedProduct: null
}

export default function(state = initialState, action){
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                loading: action.payload,
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                products: action.payload,
            }
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case GET_PRODUCT:
            return {
                ...state,
                loading: action.payload,
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                selectedProduct: action.payload
            }
        case GET_PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case ADD_PRODUCT: 
            return {
                ...state,
                loading: action.payload,
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [ ...state.products, action.payload]
            }
         case ADD_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DELETE_PRODUCT: 
            return {
                ...state,
                selectedProduct: action.payload,
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }
         case DELETE_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
} 