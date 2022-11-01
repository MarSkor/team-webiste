import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { useRouter } from 'next/router'


const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const [open, setOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const router = useRouter()
    // console.log(router)
    const path = router?.asPath;
    
    const changeBackground = () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 60) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    })


    const toggleNav = () => {
        setOpen(!open)
        setIsActive(!isActive);
    }



  return (
    <nav className={navbar ? 'navbar colorChange' : 'navbar'} style={{background: `${path == "/" ? "" : "var(--black-nav)"}`}}>
        <div className="nav-wrapper" >
            <div className='logo'>
                <Link href="/" className='logo-link' >
                    team<span>.</span>
                </Link>
            </div>

            <ul className={open ? 'nav-links active' : 'nav-links'} >
                 <li className='nav-item' >
                    <Link 
                    onClick={() => setOpen(false)} 
                    className={path == "/product" ? "nav-link active" : "nav-link"} 
                    href="/">
                        Product
                    </Link>
                </li>
                <li className='nav-item' >
                    <Link 
                    onClick={() => setOpen(false)} 
                    className={path == "/blog" ? "nav-link active" : "nav-link "}  
                    href="/blog" >
                        Blog
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link 
                    onClick={() => setOpen(false)} 
                    className={path == "/contact" ? "nav-link active" : "nav-link"} 
                    href="/contact">
                        Contact
                    </Link>
                </li>
                <Link className='nav-link' href="#">
                    <button 
                    type='button' 
                    className={path == "/" ? "btn btn-nav btn-nav-light" : "btn btn-nav btn-nav-dark"} 
                    href="/getaccess">
                        Get Access
                    </button>
                </Link>
            </ul>

            <div onClick={toggleNav} className={isActive ? 'nav-icon active' : 'nav-icon'} >
                {open ? <FiX className='icon icon-nav'/> : <FiMenu className='icon icon-nav'/>}
            </div>
        </div>
    </nav>
  )
}

export default Navbar