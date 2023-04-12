import React from 'react';
import './Hero.scss';
import graduationCap from '../../assets/images/graduation-cap.svg';
import courseIcon from '../../assets/images/bookmark2.svg';
import paymentIcon from '../../assets/images/payment2.svg';
import userIcon from '../../assets/images/Users.svg';

const Hero = () => {

    const heroIcons = [
        graduationCap,
        courseIcon,
        paymentIcon,
        userIcon
    ]

    const heroTexts = [
        "Students",
        "Course",
        "Payments",
        "Users"
    ]

    const heroNumbers = [
        "243",
        "13",
        "INR 556,000",
        "3"
    ]

    return (
        <main>
            <section className='hero'>
                <div className="container">
                    <div className="hero__wrapper">
                        {
                            heroIcons.map((item, index) => {
                                return (
                                    <div className='hero__wrapper-box'>
                                        <img className='hero__wrapper-box--img' src={item} alt="" />
                                        <p className='hero__wrapper-box--text'>{heroTexts[index]}</p>
                                        <div>
                                            <h3 className='hero__wrapper-number'>{heroNumbers[index]}</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </main>
    );
}

export default Hero;
