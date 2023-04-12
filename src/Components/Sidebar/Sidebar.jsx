import React from 'react';
import './Sidebar.scss';
import Logo from '../../assets/images/Logo.svg';
import userPhoto from '../../assets/images/user-photo.jpg';
import homeIcon from '../../assets/images/home-icon.svg';
import courseIcon from '../../assets/images/bookmark-icon.svg';
import studentsIcon from '../../assets/images/graduation-icon.svg';
import paymentIcon from '../../assets/images/payment-icon.svg';
import reportIcon from '../../assets/images/report-icon.svg';
import settingIcon from '../../assets/images/settings-icon.svg';
import signOut from '../../assets/images/sign-out.svg';

const Sidebar = () => {


    const userIcons = [
        homeIcon,
        courseIcon,
        studentsIcon,
        paymentIcon,
        reportIcon,
        settingIcon
    ];

    const userTexts = [
        "Home",
        "Course",
        "Students",
        "Payment",
        "Report",
        "Settings"
    ];



    return (
        <nav className='nav'>
            <div className="nav__container">
                <img src={Logo} alt="logo" />
                <div className='nav__wrapper'>
                    <img className='nav__wrapper-img' src={userPhoto} alt="userPhoto" />
                    <h2 className='nav__wrapper-title'>Karthi Madesh</h2>
                    <p className='nav__wrapper-text'>Admin</p>
                </div>
                <ul className='nav__list'>
                    {
                        userIcons.map((item, index) => {
                            return (
                                <li className='nav__list-item'>
                                    <img className='nav__list-item--img' src={item} alt="icons" />
                                    <a className='nav__list-item--link' href="#">{userTexts[index]}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className='nav__out'>
                    <a className='nav__out-text' href='#'>Logout</a>
                    <a href="#"><img src={signOut} alt="" /></a>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;
