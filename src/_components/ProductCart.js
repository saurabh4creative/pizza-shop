import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { CartActions } from '../_redux/_actions/CartActions'

const ProductCart = (props) => {
  const {id, name, price, image, size, Qty} = props.data;
  const dispatch = useDispatch();
  
  const increaseQty = (id) => {
      dispatch( CartActions.increase_qty(id) ); 
  }

  const decreaseQty = (id) => {
      dispatch( CartActions.decrease_qty(id) ); 
  }

  const deleteCart = (id) => {
      dispatch( CartActions.delete_cart(id) ); 
  }

  return (
    <tr id={id}>
        <td className="remove">
            <button onClick={()=>{deleteCart(id)}} type="button" className="close-btn close-danger remove-from-cart">
                <span /><span />
            </button>
        </td>
        <td data-title="Product">
            <div className="cart-product-wrapper">
                <img src={`/assets/img/prods-sm/${image}`} alt="prod1" />
                <div className="cart-product-body">
                    <h6><Link to={`/products/${id}`}>{name}</Link></h6> 
                    <p>{size}</p>
                </div>
            </div>
        </td>
        <td data-title="Price"> <strong>{price}</strong> </td>
        <td className="quantity" data-title="Quantity">
            <div className='sdas'>
                <button onClick={()=>{decreaseQty(id)}} className='btn btn-danger'>-</button>
                <button className='btn'>{Qty}</button> 
                <button onClick={()=>{increaseQty(id)}} className='btn btn-danger'>+</button>
            </div>
        </td>
        <td data-title="Total"> <strong>{price*Qty}</strong> </td>
    </tr> 
  )
}

export default ProductCart