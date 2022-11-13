import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
        <footer className="ct-footer footer-dark">
            { /* Top Footer */ }
            <div className="container">
                <div className="footer-top">
                    <div className="footer-logo">
                        <img src="/assets/img/logo-light.png" alt="logo" />
                    </div>
                    <div className="footer-buttons">
                        <Link to="#"> <img src="/assets/img/android.png" alt="download it on the app store" /></Link>
                        <Link to="#"> <img src="/assets/img/ios.png" alt="download it on the app store" /></Link>
                    </div>
                </div>
            </div>
            { /* Middle Footer */ }
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                            <h5 className="widget-title">Information</h5>
                            <ul>
                                <li> <Link to="index-2.html">Home</Link> </li>
                                <li> <Link to="blog-grid.html">Blog</Link> </li>
                                <li> <Link to="about-us.html">About Us</Link> </li>
                                <li> <Link to="menu-v1.html">Menu</Link> </li>
                                <li> <Link to="contact-us.html">Contact Us</Link> </li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                            <h5 className="widget-title">Top Items</h5>
                            <ul>
                                <li> <Link to="#">Pepperoni</Link> </li>
                                <li> <Link to="#">Swiss Mushroom</Link> </li>
                                <li> <Link to="#">Barbeque Chicken</Link> </li>
                                <li> <Link to="#">Vegetarian</Link> </li>
                                <li> <Link to="#">Ham & Cheese</Link> </li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                            <h5 className="widget-title">Others</h5>
                            <ul>
                                <li> <Link to="checkout.html">Checkout</Link> </li>
                                <li> <Link to="cart.html">Cart</Link> </li>
                                <li> <Link to="menu-item-v1.html">Product</Link> </li>
                                <li> <Link to="locations.html">Locations</Link> </li>
                                <li> <Link to="legal.html">Legal</Link> </li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-widget">
                            <h5 className="widget-title">Social Media</h5>
                            <ul className="social-media">
                                <li> <Link to="#" className="facebook"> <i className="fab fa-facebook-f" /> </Link> </li>
                                <li> <Link to="#" className="pinterest"> <i className="fab fa-pinterest-p" /> </Link> </li>
                                <li> <Link to="#" className="google"> <i className="fab fa-google" /> </Link> </li>
                                <li> <Link to="#" className="twitter"> <i className="fab fa-twitter" /> </Link> </li>
                            </ul>
                            <div className="footer-offer">
                                <p>Signup and get exclusive offers and coupon codes</p>
                                <Link to="#" className="btn-custom btn-sm shadow-none">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { /* Footer Bottom */ }
            <div className="footer-bottom">
                <div className="container">
                    <ul>
                        <li> <Link to="#">Privacy Policy</Link> </li>
                        <li> <Link to="#">Refund Policy</Link> </li>
                        <li> <Link to="#">Cookie Policy</Link> </li>
                        <li> <Link to="#">Terms & Conditions</Link> </li>
                    </ul>
                    <div className="footer-copyright">
                        <p> Copyright © 2020 <Link to="#">AndroThemes</Link> All Rights Reserved. </p>
                        <Link to="#" className="back-to-top">Back to top <i className="fas fa-chevron-up" /> </Link>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer