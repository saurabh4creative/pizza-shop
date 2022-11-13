import React, { useEffect, useRef } from 'react'
import Banner from '../_views/Banner'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { productActions } from '../_redux/_actions/ProductActions';

const ProductDetail = () => {
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const dataFetchedRef = useRef(false);
  const { productDetail } = useSelector((state)=>state.ProductReducer);
  const { name, price, size, image } = productDetail;

  useEffect(()=>{
      if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;

      dispatch(productActions.fetch_product())
      dispatch(productActions.get_detail(id))
  }, [id, dispatch])
     
  return (
       <>
            <Banner title="Product Detail"/>

            <div className="section product-single">
               <div className="container">
                    <div className="row">
                         <div className="col-md-5">
                              { /* Main Thumb */ }
                              <div className="product-thumb">
                                   <img src={`/assets/img/prods/${image}`} alt={name} />
                              </div>
                              { /* /Main Thumb */ }
                         </div>
                         <div className="col-md-7">
                              <div className="product-content">
                                   { /* Product Title */ }
                                   <h2 className="title">{name} Pizza</h2>
                                   { /* /Product Title */ }
                                   <div className="favorite">
                                        <i className="far fa-heart" />
                                   </div> 
                                   { /* Price */ }
                                   <div className="price-wrapper">
                                        <p className="product-price">{price}</p>
                                   </div>
                                   { /* /Price */ }
                                   { /* Product Short Description */ }
                                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                   { /* /Product Short Description */ }
                                   { /* Variations */ }
                                   <div className="customize-variations">
                                        <div className="customize-size-wrapper">
                                             <h5>Size: </h5>
                                             <div className="">
                                                 {size}
                                             </div> 
                                        </div> 
                                   </div>
                                   { /* /Variations */ }
                                   { /* Add To Cart Form */ }
                                   <form className="atc-form" method="post">
                                        <div className="form-group">
                                             <label>Quantity</label>
                                             <div className="qty">
                                                  <span className="qty-subtract"><i className="fas fa-minus" /></span>
                                                  <input type="text" name="qty"  />
                                                  <span className="qty-add"><i className="fas fa-plus" /></span>
                                             </div>
                                        </div>
                                        <button type="submit" name="button" className="btn-custom secondary"> Order <i className="fas fa-shopping-cart" /> </button>
                                   </form>
                                   { /* /Add To Cart Form */ }
                                   { /* Product Meta */ }
                                   <ul className="product-meta">
                                        <li>
                                             <span>SKU: </span>
                                             <div className="product-meta-item">
                                                  <span>N/A</span>
                                             </div>
                                        </li>
                                   </ul>
                                   { /* /Product Meta */ }
                              </div>
                         </div>
                    </div>
               </div>
          </div>
       </>
  )
}

export default ProductDetail