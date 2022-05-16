import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo2.png';
import whatsapp from '../assets/images/whatsapp.png';
import { useDispatch, useSelector } from 'react-redux';
import {selectMenuMobile, toggleMenuMobile, closeMenuMobile, openMenuMobile} from '../features/Ui/uiSlice';
import {FormattedMessage} from 'react-intl';

const mainNav = [
    {
        display: 'Home',
        path: '/',
    },
    {
        display: 'Services',
        path: '/services',
    },
    {
        display: 'Blog',
        path: '/blog',
    },
    {
        display: 'About',
        path: '/about',
    },
    {
        display: 'FAQS',
        path: '/faqs',
    },
];
function Header() {
    const handleToggleMenu = () => {
        dispatch(toggleMenuMobile());
    };
    const handleCloseMobileMenu = () => {
        dispatch(closeMenuMobile());
    }
    const handleOpenMobileMenu = () => {
        dispatch(openMenuMobile());
    }

    const dispatch = useDispatch();
    const toggleMenu = useSelector(selectMenuMobile);
    const headerRef = useRef(null);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef && headerRef.current.classList.remove('shrink');
            }
        });
    }, []);
        useEffect(() => {
            const checkIfClickedOutside = e => {
                // If the menu is open and the clicked target is not within the menu,
                // then close the menu
                if (toggleMenu && headerRef.current && !headerRef.current.contains(e.target)) {
                    handleCloseMobileMenu()
                }
              }
              document.addEventListener("mousedown", checkIfClickedOutside, false)
          return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside, false)
          }
        }, [toggleMenu])
        
    return (
        <div
            className='header'
            style={{ backgroundColor: `${toggleMenu ? 'white' : ''}` }}
            ref={headerRef}
        >
            <div className='container'>
                <div className='header__logo'>
                    <Link to='/'>
                        <img src={logo} alt='' />
                    </Link>
                </div>
                <div className='header__menu__left'>
                    {mainNav.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className='header__menu__left__item'
                            >
                                <Link to={item.path}
                                >
                                    <FormattedMessage
                                    id={`header-menu.item${index+1}`} />
                                    
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <div className='header__menu__right'>
                    <div className='header__menu__right__contact'>
                        <img src={whatsapp} alt='' />
                        <span>+0-11-475-1433</span>
                    </div>
                    <div
                        className='header__menu__mobile-toggle'
                        onClick={handleToggleMenu}
                    >
                        <i className='bx bx-menu-alt-left'></i>
                    </div>
                </div>
            </div>
            <div
                className='header__menu__mobile'
                style={{
                    transform: toggleMenu ? 'scaleY(1)' : 'scaleY(0)',
                    opacity: toggleMenu ? '1' : '0',
                }}
            >
                <div className='container'>
                    {mainNav.map((item, index) => {
                        return (
                            <Link key={index}
                            className='header__menu__mobile__item'
                            onClick={()=> handleCloseMobileMenu()} to={item.path}>
                                    <span>{item.display}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Header;
