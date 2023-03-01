import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css";
import myLogo from "../../images/yutomiyataLogo.png";

const Nav = () => {
  return (
    <nav>
        <div>
            <Link to='/'>   
                <img className='nav_img' src={myLogo}/>
            </Link>
        </div>
        <ul>
            <li><Link to='/'><p>Home</p></Link></li>
            <li><Link to='/profile'><p>Profile</p></Link></li>
            <li><Link to='/works'><p>Works</p></Link></li>
        </ul>
    </nav>
  )
}

export default Nav
