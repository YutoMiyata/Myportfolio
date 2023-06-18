import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css";
import myLogo from "../../images/yutomiyataLogo.png";
import { useState , useEffect} from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

const Nav = () => {

  // ハンバーガーメニュー
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // デバイスの幅に応じて切り替えるポイントを設定
    };

    handleResize(); // 初回レンダリング時に実行

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
        <div>
            <Link to='/'>   
                <img className='nav_img' src={myLogo}/>
            </Link>
        </div>
        {isMobile ? (
        <div>
            <div onClick={toggleMenu} className='humberger'>
              {isOpen ? <FaTimes className='close-icon' /> : <GiHamburgerMenu className='open-icon' />}
            </div>
            {isOpen && (
                <div className='is-open animate-nav'>
                    <ul className='is-open-list'>
                      <li><Link to='/'><p>Home</p></Link></li>
                      <li><Link to='/profile'><p>Profile</p></Link></li>
                      <li><Link to='/works'><p>Works</p></Link></li>
                    </ul>
                </div>
            )}
        </div>
      ) : (
        <ul>
            <li><Link to='/'><p>Home</p></Link></li>
            <li><Link to='/profile'><p>Profile</p></Link></li>
            <li><Link to='/works'><p>Works</p></Link></li>
        </ul>
      )}

    </nav>
  )
}

export default Nav
