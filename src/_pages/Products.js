import React, { useEffect, useRef } from 'react'
import Banner from '../_views/Banner'
import ProductBox from '../_components/ProductBox'
import { useSelector, useDispatch } from 'react-redux'
import { productActions } from '../_redux/_actions/ProductActions'

const Products = () => {
  const { products, isLoading, isError } = useSelector(state=>state.ProductReducer);
  const dispatch = useDispatch(); 
  const dataFetchedRef = useRef(false);
  
  useEffect(()=>{
     if (dataFetchedRef.current) return;
     dataFetchedRef.current = true;
     dispatch(productActions.fetch_product());
     dispatch(productActions.get_products());
  }, [dispatch]);

  return (
       <>
            <Banner title="Products"/>

            <div className="section section-padding menu-v2">
               <div className="container">
                    { /* Category Start */ }
                    <div className="menu-category dark-overlay dark-overlay-2" style={{ backgroundImage: "url('assets/img/categories-lg/1.jpg')" }}>
                         <h3>Pizzas</h3>
                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    </div>
                    <div className="row">
                         { isLoading ? 
                              <>
                                  <div className='col-lg-12'>
                                        <div className='alert alert-info'>
                                             Loading
                                        </div>
                                  </div>
                              </> : 
                              <>
                                  {
                                      isError ? 
                                      <>
                                          <div className='col-lg-12'>
                                               <div className='alert alert-danger'>
                                                    {isError}
                                               </div>
                                          </div>
                                      </> : 
                                      <>
                                           { Object.keys(products).length > 0 && 
                                             <>
                                                {
                                                   products?.map((item)=>{
                                                       return <ProductBox key={item.id} data={item} />
                                                   })
                                                }  
                                             </> 
                                           } 
                                      </>
                                  }     
                              </> 
                         } 
                    </div>
                    { /* Category End */ } 
               </div>
            </div>
       </>
  )
}

export default Products