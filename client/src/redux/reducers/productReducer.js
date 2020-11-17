import { GET_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, PRODUCTS_LOADING } from '../actions/types';

const initialState = {
    products: [],
    loading: false
}

export default function(state = initialState, action){
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false
            }
            break;
        case ADD_PRODUCT:
            return {
                ...state,
                products: [action.payload, ...state.products]            
            }
            break;
        case UPDATE_PRODUCT:
            return {
                ...state          
            }
            break;
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product._id !== action.payload)
            }
            break;
        case PRODUCTS_LOADING:
            return {
                ...state,
                loading: true
            }
            break;
        default:
            return state;
            break;
    }
}