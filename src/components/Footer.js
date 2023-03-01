import React from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
      <div className='footerBlock'>
        <div className='footerFlex'>
          <Link to='/'><p>Home</p></Link>
          <Link to='/profile'><p>Profile</p></Link>
          <Link to='/works'><p>Works</p></Link>
        </div>
        <div className='GitHubBlock'>
          <p><a href='https://github.com/YutoMiyata'>GitHub</a></p>
        </div>
      </div>
    </footer>

  )
}

export default Footer
