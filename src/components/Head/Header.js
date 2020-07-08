import React from 'react';
import '../Head/Header.css';
import Cart from '../Head/Cart';
import Account from '../Head/Account';

const Header = () =>{
    return(
        <header className="main-header">
            <div className="logo">
                <a href="/">Logo</a>
            </div><nav className="main-nav">
            <ul className="main-nav__Cat">
                    <li className="main-nav__Cat_name">Men</li>
                    <li className="main-nav__Cat_name">women</li>
                    <li className="main-nav__Cat_name">kids</li>
                </ul>
                <ul className="main-nav__items">
                    <li className="main-nav__item">
                    <Cart />
                    </li>
                    <li className="main-nav__item">
                        <Account />
                    </li>
                </ul>
                
            </nav>
        </header>
    );
}

export default Header;

