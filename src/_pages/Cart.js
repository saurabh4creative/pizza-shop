import React, { useEffect, useState } from 'react'
import Banner from '../_views/Banner'
import { useSelector, useDispatch } from 'react-redux'
import { CartActions } from '../_redux/_actions/CartActions'
import { Link } from 'react-router-dom'
import ProductCart from '../_components/ProductCart'

const Cart = () => {
  const dispatch = useDispatch(); 
  const cartData = useSelector(state=>state.CartReducer);
  const { items, products, totalItems } = cartData; 
  const [ total, setTotal ] = useState(0);
  const [ gst, setGst ] = useState(0); 
    
  useEffect(()=>{
      dispatch( CartActions.get_cart_products(items) ); 
  }, [totalItems, dispatch, items]);
 

  useEffect(()=>{
     let value = 0;
     for (const item of products) {
         value += item.Qty * item.price; 
     }
     setTotal(value);
     setGst(value*18/100);
  }, [products]);
     
  return (
       <>
            <Banner title="Cart"/>

            <section className="section">
               <div className="container">
                    { /* Cart Table Start */ }
                    <table className="ct-responsive-table">
                         <thead>
                              <tr>
                                   <th className="remove-item" />
                                   <th>Product</th>
                                   <th>Price</th>
                                   <th>Qunantity</th>
                                   <th>Total</th>
                              </tr>
                         </thead>
                         <tbody>
                              {
                                   products.map((items)=>{
                                        return <ProductCart key={items.id} data={items} />
                                   })  
                              }
                         </tbody>
                    </table>
                    { /* Cart Table End */ }
                    { /* Cart form Start */ }
                    <div className="row ct-cart-form">
                         <div className="offset-lg-6 col-lg-6">
                              <h4>Cart Total</h4>
                              <table>
                                   <tbody>
                                        <tr>
                                             <th>Subtotal</th>
                                             <td>{total}</td>
                                        </tr>
                                        <tr>
                                             <th>Tax</th>
                                             <td>{gst} <span className="small">(18%)</span> </td>
                                        </tr>
                                        <tr>
                                             <th>Total</th>
                                             <td><b>{ Math.round(total + gst) }</b> </td>
                                        </tr>
                                   </tbody>
                              </table>
                              <Link to="/checkout" className="btn-custom primary btn-block">Proceeed to Checkout</Link>
                         </div>
                    </div>
                    { /* Cart form End */ }
               </div>
            </section> 
       </>
  )
}

export default Cart