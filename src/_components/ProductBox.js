import React from 'react'
import { Link } from 'react-router-dom'
import { CartActions } from '../_redux/_actions/CartActions';
import { useDispatch, useSelector } from 'react-redux'

const ProductBox = (props) => {
  
  const { isLoading } = useSelector(state=>state.CartReducer);  
  const {name, id, price, size, image} = props.data;
  const dispatch = useDispatch(); 
  
  const add_to_cart = (id) => { 
      dispatch(CartActions.add_to_cart(id)); 
  }

  return (
    <div className="col-lg-4 col-md-6">
        <div className="product">
            <div className="favorite">
                <i className="far fa-heart" />
            </div>
            <Link className="product-thumb" to={`/products/${id}`}> 
                <img src={`assets/img/prods-sm/${image}`} alt={name} /> 
            </Link>
            <div className="product-body">
                <div className="product-desc">
                    <h4> <Link to={`/products/${id}`}>{name}</Link> </h4>
                    <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc</p>
                    <Link to="#" className="btn-custom light btn-sm shadow-none" data-toggle="modal" data-target="#customizeModal"> {size} <i className="fas fa-plus" /> </Link>
                </div>
                <div className="product-controls">
                    <p className="product-price">
                         {price}
                    </p>
                    <button onClick={()=>{add_to_cart(id)}} className="order-item btn-custom btn-sm shadow-none">{isLoading ? 'Adding' : 'Order'} <i className="fas fa-shopping-cart" /> </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductBox