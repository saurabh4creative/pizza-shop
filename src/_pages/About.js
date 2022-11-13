import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../_views/Banner'

const About = () => {
  return (
      <>
           <Banner title="About Us" />

           { /* About us start */ }
            <div className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-lg-30 ct-single-img-wrapper">
                            <img src="/assets/img/auth.jpg" alt="img" />
                            <div className="ct-dots" />
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-wrap mr-lg-30">
                                <h5 className="custom-primary">About Us</h5>
                                <h2 className="title">Serving Pizzas By The Slice Since 1987</h2>
                                <p className="subtitle">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                                <p className="subtitle">
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </p>
                                <div className="signature">
                                    <img src="/assets/img/signature.png" alt="signature" />
                                </div>
                                <Link to="/products" className="btn-custom">Check our Menu</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { /* About us End */ }
            { /* Infographics Start */ }
            <div className="section section-padding bg-cover bg-center bg-parallax dark-overlay dark-overlay-2" style={{ backgroundImage: "url('/assets/img/subheader-2.jpg')" }}>
                <div className="container">
                    <div className="section-title-wrap section-header text-center">
                        <h2 className="title text-white">Our success Story</h2>
                        <p className="subtitle text-white">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="ct-infographic-item">
                                <i className="flaticon-employee" />
                                <h4>24,934</h4>
                                <p>Happy Customers</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="ct-infographic-item">
                                <i className="flaticon-pizza-slice" />
                                <h4>65,317</h4>
                                <p>Pizzas Made</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="ct-infographic-item">
                                <i className="flaticon-cheese" />
                                <h4>4,658</h4>
                                <p>Cheese Rolls</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="ct-infographic-item">
                                <i className="flaticon-soda" />
                                <h4>67,335</h4>
                                <p>Drinks Served</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { /* Infographics End */ }
            { /* Team members Start */ }
            <div className="section section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-lg-30">
                            <div className="section-title-wrap">
                                <h5 className="custom-primary">Our Backbone</h5>
                                <h2 className="title">Meet The Team</h2>
                                <p className="subtitle">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                                <p className="subtitle">
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </p>
                            </div>
                            <Link to="#" className="btn-custom">View All</Link>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="ct-team-item">
                                        <div className="ct-team-thumb">
                                            <img src="/assets/img/team/1.jpg" alt="team" />
                                        </div>
                                        <div className="ct-team-desc">
                                            <h5>Miranda Blue</h5>
                                            <span>Executive Chef</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="ct-team-item">
                                        <div className="ct-team-thumb">
                                            <img src="/assets/img/team/2.jpg" alt="team" />
                                        </div>
                                        <div className="ct-team-desc">
                                            <h5>Jonathan Flock</h5>
                                            <span>Assistant Chef</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="ct-team-item">
                                        <div className="ct-team-thumb">
                                            <img src="/assets/img/team/3.jpg" alt="team" />
                                        </div>
                                        <div className="ct-team-desc">
                                            <h5>Mich Jean</h5>
                                            <span>Assistant Chef</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="ct-team-item">
                                        <div className="ct-team-thumb">
                                            <img src="/assets/img/team/4.jpg" alt="team" />
                                        </div>
                                        <div className="ct-team-desc">
                                            <h5>Andrew Lumber</h5>
                                            <span>Assistant Chef</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { /* Team members End */ } 
      </>
  )
}

export default About