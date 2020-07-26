import axiosClient from './../config/axios';
import Swal from 'sweetalert2'

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
} from './../types';

//Add new products
export function newProductAction(product){
    return async(dispatch) => {
        dispatch(addProduct())
        try {
            //Save the product in db
            await axiosClient.post('/products', product);
            //if its all ok
            dispatch(addProductSuccess(product))
            Swal.fire('Correct', 'The product was saved successfully', 'success')
        } catch(err) {

            //if is an error
            dispatch(addProductError(true))
            Swal.fire({
                icon: 'error',
                title: 'There was an error',
                text: 'There was an error, try again'
            })
        }
    }  
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
})

const addProductSuccess = (product) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

const addProductError = (state) => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
})


export function getProductsAction() {
    return async(dispatch) => {
        dispatch(getProducts());

        try {
            const res = await axiosClient.get('/products');
            dispatch(getProductsSuccess(res.data));
        } catch(err) {
            dispatch(getProductsError(true));
        }
    }
}

const getProducts = () => ({
    type: GET_PRODUCTS,
    payload: true
})

const getProductsSuccess = (products) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: products
})

const getProductsError = (state) => ({
    type: GET_PRODUCTS_ERROR,
    payload: state
})

export function getProductAction(productId) {
    return async (dispatch) => {
        dispatch(getProduct());

        try {
            const res = await axiosClient.get(`/products/${productId}`);
            dispatch(getProductSuccess(res.data));
        } catch (err) {
            dispatch(getProductError(true));
        }
    }
}

const getProduct = () => ({
    type: GET_PRODUCT,
    payload: true
})

const getProductSuccess = (product) => ({
    type: GET_PRODUCT_SUCCESS,
    payload: product
})

const getProductError = (state) => ({
    type: GET_PRODUCT_ERROR,
    payload: state
})

export function deleteProductAction(productId) {
    return async (dispatch) => {
        dispatch(deleteProduct(productId));

        try {
            await axiosClient.delete(`/products/${productId}`);
            dispatch(deleteProductSuccess(productId));
            Swal.fire("Deleted", "The product was deleted", "success");
        } catch(err) {
            console.log(err);
            dispatch(deleteProductError);
        }
    }
}

const deleteProduct = (productId) => ({
    type: DELETE_PRODUCT,
    payload: productId
})

const deleteProductSuccess = (productId) => ({
    type: DELETE_PRODUCT_SUCCESS,
    payload: productId
})

const deleteProductError = (state) => ({
    type: DELETE_PRODUCT_ERROR,
    payload: state
})