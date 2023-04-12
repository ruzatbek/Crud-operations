import React from 'react';
import backIcon from '../../assets/images/back-circle.svg';
import searchIcon from '../../assets/images/search-icon.svg';
import notificationIcon from '../../assets/images/notification.svg';
import './Header.scss';


const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__wrapper">
                    <button className='header__wrapper-btn'>
                        <img src={backIcon} alt="back-icon" />
                    </button>
                    <div className='header__wrapper-right'>
                        <div className='header__wrapper-input'>
                            <input className='header__wrapper-right--input' type="text" placeholder='Search' />
                            <img className='header__wrapper-icon' src={searchIcon} alt="notification-icon" />
                        </div>
                        <img src={notificationIcon} alt="notification" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
