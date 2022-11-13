import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
       <>
       { /* Banner Start */ }
        <div className="banner banner-1 banner-4 light-banner">
          <div className="banner-item">
            <div className="banner-inner bg-cover bg-center dark-overlay dark-overlay-2" style={{ backgroundImage: "url('assets/img/banner/7.jpg')" }}>
              <div className="container">
                <img src="assets/img/misc/1.png" alt="img" />
                <h1 className="title">Modernizing The Traditional Italian Pizza</h1>
                <p className="subtitle">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                </p>
                <Link to="#" className="btn-custom primary">View Menu</Link>
              </div>
              <div className="banner-bottom-img">
                <img src="assets/img/veg/2.png" alt="veg" />
                <img src="assets/img/prods/3.png" alt="pizza" />
                <img src="assets/img/veg/12.png" alt="veg" />
              </div>
            </div>
          </div>
        </div>
        { /* Banner End */ }
        { /* About us start */ }
        <div className="section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-lg-30 ct-single-img-wrapper">
                <img src="assets/img/about.jpg" alt="img" />
                <div className="ct-dots" />
              </div>
              <div className="col-lg-6">
                <div className="section-title-wrap mr-lg-30">
                  <h5 className="custom-primary">Sir Slice's Heritage</h5>
                  <h2 className="title">Serving Pizzas By The Slice Since 1987</h2>
                  <p className="subtitle">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                  <p className="subtitle">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </p>
                  <div className="signature">
                    <img src="assets/img/signature.png" alt="signature" />
                  </div>
                  <Link to="menu-v1.html" className="btn-custom">Check our Menu</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        { /* About us End */ }
        { /* Menu Start */ }
        <div className="section section-padding pt-0">
          <div className="container">
            <div className="section-title-wrap section-header text-center">
              <h5 className="custom-primary">Pizza Menu</h5>
              <h2 className="title">Explore Our Menu</h2>
              <p className="subtitle">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="ct-mini-menu-item">
                  <div className="ct-mini-menu-top">
                    <h5>Pepperoni Pizza</h5>
                    <div className="ct-mini-menu-dots" />
                    <span className="custom-primary">14.99$</span>
                  </div>
                  <div className="ct-mini-menu-bottom">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ct-mini-menu-item">
                  <div className="ct-mini-menu-top">
                    <h5>Four Cheese</h5>
                    <div className="ct-mini-menu-dots" />
                    <span className="custom-primary">13.99$</span>
                  </div>
                  <div className="ct-mini-menu-bottom">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ct-mini-menu-item">
                  <div className="ct-mini-menu-top">
                    <h5>Vegetarian</h5>
                    <div className="ct-mini-menu-dots" />
                    <span className="custom-primary">9.99$</span>
                  </div>
                  <div className="ct-mini-menu-bottom">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ct-mini-menu-item">
                  <div className="ct-mini-menu-top">
                    <h5>Barbeque Chicken</h5>
                    <div className="ct-mini-menu-dots" />
                    <span className="custom-primary">13.99$</span>
                  </div>
                  <div className="ct-mini-menu-bottom">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ct-mini-menu-item">
                  <div className="ct-mini-menu-top">
                    <h5>Ham & Cheese</h5>
                    <div className="ct-mini-menu-dots" />
                    <span className="custom-primary">11.99$</span>
                  </div>
                  <div className="ct-mini-menu-bottom">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ct-mini-menu-item">
                  <div className="ct-mini-menu-top">
                    <h5>Specialty Pizza</h5>
                    <div className="ct-mini-menu-dots" />
                    <span className="custom-primary">10.99$</span>
                  </div>
                  <div className="ct-mini-menu-bottom">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        { /* Menu End */ }
        { /* Gallery Start */ }
        <div className="section pt-0">
          <div className="gallery-section">
            <div className="row no-gutters">
              <div className="col-xl-6 col-lg-3 col-md-3 col-6 p-0">
                <Link to="assets/img/ig/1.jpg" className="gallery-thumb">
                <img src="assets/img/ig/1.jpg" alt="ig" />
                </Link>
              </div>
              <div className="col-xl-6 col-lg-3 col-md-3 col-6 p-0">
                <Link to="assets/img/ig/2.jpg" className="gallery-thumb">
                <img src="assets/img/ig/2.jpg" alt="ig" />
                </Link>
              </div>
              <div className="col-xl-6 col-lg-3 col-md-3 col-6 p-0">
                <Link to="assets/img/ig/3.jpg" className="gallery-thumb">
                <img src="assets/img/ig/3.jpg" alt="ig" />
                </Link>
              </div>
              <div className="col-xl-6 col-lg-3 col-md-3 col-6 p-0">
                <Link to="assets/img/ig/4.jpg" className="gallery-thumb">
                <img src="assets/img/ig/4.jpg" alt="ig" />
                </Link>
              </div>
            </div>
            <div className="gallery-bg bg-parallax dark-overlay dark-overlay-2 bg-cover" style={{ backgroundImage: "url('assets/img/subheader.jpg')" }}>
              <div className="section-title-wrap text-center">
                <h5 className="custom-primary">A Community</h5>
                <h2 className="title text-white">Stories of Passion</h2>
                <p className="subtitle text-white">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                </p>
                <Link to="blog-grid.html" className="btn-custom shadow-none">Read Stories</Link>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-xl-6 col-lg-3 col-md-3 col-6 p-0">
                <Link to="assets/img/ig/5.jpg" className="gallery-thumb">
                <img src="assets/img/ig/5.jpg" alt="ig" />
                </Link>
              </div>
              <div className="col-xl-6 col-lg-3 col-md-3 col-6 p-0">
                <Link to="assets/img/ig/6.jpg" className="gallery-thumb">
                <img src="assets/img/ig/6.jpg" alt="ig" />
                </Link>
              </div>
              <div className="col-xl-6 col-lg-3 col-md-3 col-6 p-0">
                <Link to="assets/img/ig/7.jpg" className="gallery-thumb">
                <img src="assets/img/ig/7.jpg" alt="ig" />
                </Link>
              </div>
              <div className="col-xl-6 col-lg-3 col-md-3 col-6 p-0">
                <Link to="assets/img/ig/8.jpg" className="gallery-thumb">
                <img src="assets/img/ig/8.jpg" alt="ig" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        { /* Gallery End */ }
        { /* Blog Start */ }
        <div className="section section-padding pt-0">
          <div className="container">
            <div className="section-title-wrap section-header text-center">
              <h5 className="custom-primary">Latest News</h5>
              <h2 className="title">From Our Blog</h2>
              <p className="subtitle">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </div>
            <div className="row">
              { /* Post Start */ }
              <div className="col-lg-4">
                <article className="post">
                  <h3 className="post-title"> <Link to="blog-single.html">Our all new chicken pizza now available</Link> </h3>
                  <div className="post-meta">
                    <span> <i className="far fa-calendar" /> <Link to="blog-single.html">January 22, 2020</Link> </span>
                    <span> <i className="far fa-user" /> <Link to="#">Fredrick Flow</Link> </span>
                  </div>
                  <div className="post-thumbnail">
                    <Link to="blog-single.html"><img src="assets/img/blog/6.jpg" alt="post thumbnail" /></Link>
                  </div>
                  <div className="post-desc">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                  </div>
                  <Link to="blog-single.html" className="read-more">Read More</Link>
                </article>
              </div>
              { /* Post End */ }
              { /* Post Start */ }
              <div className="col-lg-4">
                <article className="post">
                  <h3 className="post-title"> <Link to="blog-single.html">Changing the way thin crusts are made</Link> </h3>
                  <div className="post-meta">
                    <span> <i className="far fa-calendar" /> <Link to="blog-single.html">January 24, 2020</Link> </span>
                    <span> <i className="far fa-user" /> <Link to="#">Fredrick Flow</Link> </span>
                  </div>
                  <div className="post-thumbnail">
                    <Link to="blog-single.html"><img src="assets/img/blog/2.jpg" alt="post thumbnail" /></Link>
                  </div>
                  <div className="post-desc">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                  </div>
                  <Link to="blog-single.html" className="read-more">Read More</Link>
                </article>
              </div>
              { /* Post End */ }
              { /* Post Start */ }
              <div className="col-lg-4">
                <article className="post">
                  <h3 className="post-title"> <Link to="blog-single.html">New cheese rolls are now available in all branches</Link> </h3>
                  <div className="post-meta">
                    <span> <i className="far fa-calendar" /> <Link to="blog-single.html">January 27, 2020</Link> </span>
                    <span> <i className="far fa-user" /> <Link to="#">Fredrick Flow</Link> </span>
                  </div>
                  <div className="post-thumbnail">
                    <Link to="blog-single.html"><img src="assets/img/blog/3.jpg" alt="post thumbnail" /></Link>
                  </div>
                  <div className="post-desc">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                  </div>
                  <Link to="blog-single.html" className="read-more">Read More</Link>
                </article>
              </div>
              { /* Post End */ }
            </div>
          </div>
        </div>
        { /* Blog End */ } 
       </>
  )
}

export default HomePage