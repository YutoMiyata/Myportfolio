import React from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footerBlock'>
      <div className='footerFlex'>
        <Link to='/'><button>Home</button></Link>
        <Link to='/profile'><button>Profile</button></Link>
        <Link to='/works'><button>Works</button></Link>
      </div>
      <div className='GitHubBlock'>
        <button><a href='https://github.com/YutoMiyata'>GitHub</a></button>
      </div>
    </div>
  )
}

export default Footer
