import React from 'react'
import { Link } from 'react-router-dom'


const Banner = (props) => {
  return (
    <div className="subheader dark-overlay dark-overlay-2" style={{ backgroundImage: "url('/assets/img/subheader.jpg')", minHeight:400 }}>
        <div className="container">
            <div className="subheader-inner">
                <h1>{props.title}</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item">{props.title}</li> 
                    </ol>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Banner