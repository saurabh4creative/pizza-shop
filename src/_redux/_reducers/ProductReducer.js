import ProductConstents from "../_constents/ProductConstents";

const initialState = {
    isLoading : false,
    isError   : false,
    products  : {},
    productDetail : {}
};

const ProductReducer = (state = initialState, action) => {
     switch (action.type){
          case ProductConstents.FETCH_START :
              return {
                  ...state,
                  isLoading : true,
                  isError   : false,
                  products  : [],
                  productDetail : [],
              }
          case ProductConstents.FETCH_PRODUCTS :
              return {
                   ...state,
                   isLoading : false,
                   isError   : false,
                   products  : action.payload,
                   productDetail : [],
              }
          case ProductConstents.FETCH_DETAIL : 
              return {
                  ...state,
                  isLoading : false,
                  isError   : false,
                  products  : [],
                  productDetail  : action.payload
              }       
          case ProductConstents.FETCH_ERROR :
              return {
                  ...state,
                  isLoading : false,
                  isError   : action.payload,
                  products  : [],
                  productDetail : [],
              }    
          default : return state;    
     }
}

export default ProductReducer;