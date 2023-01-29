import React from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footerBlock'>
        <Link to='/'><button>Home</button></Link>
        <Link to='/profile'><button>Profile</button></Link>
        <Link to='/works'><button>Works</button></Link>
    </div>
  )
}

export default Footer
