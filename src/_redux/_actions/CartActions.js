import CartConstest from "../_constents/CartConstent"
import axios from 'axios'
import { API_URL } from "../../_helpers/Config"

const cart_start = () => {
    return {
        type : CartConstest.CART_START
    }
}

const add_to_cart = (id, qty = 1) => {
    return async (dispatch) => {
        await axios.get(`${API_URL}/products/${id}`).then((res)=>{
            if(res.data){
                const body = {
                    id : res.data.id,
                    qty : qty
                } 
                dispatch({
                    type : CartConstest.ADD_TO_CART,
                    payload : body
                })
            }
        }).catch((error)=>{
            console.log(error);
        })
    }  
}

const get_cart_products = (data) => {
    const list = Object.keys(data).join('&id=');
    return async(dispatch) => {
        await axios.get(`http://localhost:3004/products/?id=${list}`).then((res)=>{
             
             const productList = res.data;
             const productCart = data;
             
             for( const [, value] of Object.entries(productList) ){
                value['Qty'] = productCart[value.id];
             }
             
             dispatch ({
                type : CartConstest.GET_ALL_PRODUCTS,
                payload : productList
             })
        }).catch((err)=>{
             console.log(err);
        })
    } 
}

const decrease_qty = (id) => {
    return {
        type : CartConstest.DECREASE_QTY,
        payload : id
    }
}

const increase_qty = (id) => {
    return {
        type : CartConstest.INCREASE_QTY,
        payload : id
    }
}

const delete_cart = (id) => {
    return {
        type : CartConstest.DELETE_CART,
        payload : id
    }
}

export const CartActions = {
    add_to_cart,
    get_cart_products,
    decrease_qty,
    increase_qty,
    delete_cart,
    cart_start
}