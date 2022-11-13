import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

const Header = () => { 
  const { totalItems } = useSelector( state => state.CartReducer );
  
  const [ headerChange, setHeaderChange ] = useState(false);
  const changeHeader = useMemo(() => ['/'],[]);
  const { pathname, key } = useLocation(); 

  useEffect(()=>{
    changeHeader.includes(pathname) ? setHeaderChange(false) : setHeaderChange(true)
  }, [key, pathname, changeHeader]);
  
  return (
    <header className={`main-header header-1 ${ headerChange ? '' : 'header-absolute header-light' }`}>
        <div className="top-header">
            <div className="container">
                <div className="top-header-inner">
                    <div className="top-header-contacts">
                        <ul className="top-header-nav">
                            <li><Link className="p-0" to="tel:+123456789"><i className="fas fa-phone mr-2" /> +123 456 789</Link> </li>
                        </ul>
                    </div>
                    <ul className="top-header-nav header-cta">
                        <li><Link to="/login">My Account</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container">
            <nav className="navbar">
                { /* Logo */ }
                <Link className="navbar-brand" to="/">
                     <img src={`${ headerChange ? '/assets/img/logo.png' : '/assets/img/logo-light.png' }`} alt="Logo" />
                </Link>
                { /* Menu */ }
                <ul className="navbar-nav">
                    <li className="menu-item">
                        <Link to="/">Home</Link> 
                    </li>
                    <li className="menu-item">
                        <Link to="/about-us">About</Link> 
                    </li>
                    <li className="menu-item">
                        <Link to="/blogs">Blogs</Link> 
                    </li>
                    <li className="menu-item">
                        <Link to="/locations">Locations</Link> 
                    </li>
                    <li className="menu-item menu-item-has-children mega-menu-wrapper">
                        <Link to="/products">Products</Link> 
                    </li>
                    <li className="menu-item">
                        <Link to="/contact-us">Contact Us</Link>
                    </li> 
                </ul>
                <div className="header-controls">
                    <ul className="header-controls-inner">
                        <li className="cart-dropdown-wrapper cart-trigger">
                            <span className="cart-item-count">{totalItems}</span>
                            <Link to={'cart'}><i className="flaticon-shopping-bag" /></Link>
                        </li>
                        <li className="search-dropdown-wrapper search-trigger">
                            <i className="flaticon-search" />
                        </li>
                    </ul>
                    { /* Toggler */ }
                    <div className="aside-toggler aside-trigger">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header