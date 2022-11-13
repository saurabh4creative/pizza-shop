import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../_views/Banner'

const NotFound = () => {
  return (
     <>
         <Banner title="Page Not Found" />
         <div className="page-404-wrapper">
            <div className="page-404-text">
                  <h1>Page Not Found</h1>
                  <p>Sorry, the page you're looking for does not exist</p>
                  <Link to="/" className="btn-custom">Go Back Home</Link>
            </div>
            <div className="banner-bottom-img">
                  <img src="assets/img/veg/2.png" alt="veg" />
                  <img src="assets/img/prods/3.png" alt="pizza" />
                  <img src="assets/img/veg/12.png" alt="veg" />
            </div>
        </div>
     </>
  )
}

export default NotFound