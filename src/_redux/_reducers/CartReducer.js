import CartConstest from "../_constents/CartConstent";

const storageData = JSON.parse(localStorage.getItem('Cart'));
const { items, totalItems } = storageData ? storageData : {};

const initialState = {
     isLoading  : false,
     isError    : false,
     items      : items ? items : {},
     totalItems : totalItems ? totalItems : 0,
     products   : []
};

const CartReducer = (state = initialState, action) => {
     switch(action.type){
           case CartConstest.CART_START : 
               return {
                    ...state,
                    isLoading  : true,
                    isError    : false,
               }

           case CartConstest.ADD_TO_CART :
               const productID = action.payload.id;
               const productQty = action.payload.qty;
               
               if( state.items[productID] ){
                    state.items[productID] += productQty;
               }
               else{
                    state.items[productID] = productQty
               } 
               
               const _cart = {
                    items : {...state.items},
                    totalItems : state.totalItems  + productQty
               }

               localStorage.setItem('Cart', JSON.stringify(_cart));
               
               return {
                    ...state,
                    isLoading  : false,
                    isError    : false,
                    totalItems : state.totalItems  + productQty
               }

            case CartConstest.GET_ALL_PRODUCTS :

               return {
                    ...state,
                    isLoading  : false,
                    isError    : false,
                    products   : action.payload
               }
            
            case CartConstest.DECREASE_QTY :
               
               const existingQty = state.items[action.payload];
               
               if( existingQty <= 1 ){
                    delete state.items[action.payload];
               }else{
                    state.items[action.payload] = existingQty - 1;
               }
 
               state.totalItems = state.totalItems - 1;

               const _cartDecrease = {
                    items : state.items,
                    totalItems : state.totalItems
               }

               localStorage.setItem('Cart', JSON.stringify(_cartDecrease));

               return {...state};
               
            case CartConstest.INCREASE_QTY :
               
               const existingQtyNew = state.items[action.payload];
                
               state.items[action.payload] = existingQtyNew + 1;
               state.totalItems = state.totalItems + 1;

               const _cartIncrease = {
                    items : state.items,
                    totalItems : state.totalItems
               }

               localStorage.setItem('Cart', JSON.stringify(_cartIncrease));

               return {...state};

            case CartConstest.DELETE_CART :
               
               const deleteQty = state.items[action.payload];
               delete state.items[action.payload]; 
 
               state.totalItems = state.totalItems - deleteQty;

               const _cartDelete = {
                    items : state.items,
                    totalItems : state.totalItems
               }

               localStorage.setItem('Cart', JSON.stringify(_cartDelete));

               return {...state};

            default : return state    
     }
}

export default CartReducer;