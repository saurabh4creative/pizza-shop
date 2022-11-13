import ProductConstents from "../_constents/ProductConstents";
import axios from 'axios';
import { API_URL } from "../../_helpers/Config";

const fetch_product = () => {
    return {
        type : ProductConstents.FETCH_START
    }
}

const get_products = () => {
    return async (dispatch) => { 
        await axios.get(`${API_URL}/products`).then((res)=>{
            dispatch({
                type : ProductConstents.FETCH_PRODUCTS,
                payload : res.data
            })
        }).catch((error)=>{
            dispatch({
                type : ProductConstents.FETCH_ERROR,
                payload : error.message
            })
        })
    } 
}

const get_detail = (id) => {
    return async (dispatch) => {
        await axios.get(`${API_URL}/products/${id}`).then((res)=>{
            dispatch({
                type : ProductConstents.FETCH_DETAIL,
                payload : res.data
            })
        }).catch((error)=>{
            dispatch({
                type : ProductConstents.FETCH_ERROR,
                payload : error.message
            })
        })
    }
}

export const productActions = {
    fetch_product, 
    get_products,
    get_detail 
}