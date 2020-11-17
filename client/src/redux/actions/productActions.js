import axios from 'axios';
import { GET_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, PRODUCTS_LOADING } from './types';

export const getProducts = () => dispatch => {
    dispatch(setProductsLoading());
    axios.get('http://localhost:3000/api/product/all').then(res =>
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
    );
};

export const addProduct = (product) => dispatch => {
    axios.post('http://localhost:3000/api/product/create', product).then(res =>
        dispatch({
            type: ADD_PRODUCT,
            payload: res.data
        })
    );
};

export const updateProduct = (product) => dispatch => {
    axios.put(`http://localhost:3000/api/product/update/${product._id}`, product).then(res =>
        dispatch({
            type: UPDATE_PRODUCT,
            payload: res.data
        })
    );
};

export const deleteProduct = (id) => dispatch => {
    axios.delete(`http://localhost:3000/api/product/delete/${id}`).then(res =>
        dispatch({
            type: DELETE_PRODUCT,
            payload: id
        })
    );
};

export const setProductsLoading = () => {
    return {
        type: PRODUCTS_LOADING
    };
};