import React from 'react';
import { FormattedMessage } from 'react-intl';
import BackgroundFooter from '../assets/images/footer2.png';
import ImageItem1 from '../assets/images/footeritem1.jpg';
import ImageItem2 from '../assets/images/footeritem2.jpg';

function Footer() {
    return (
        <div
            className='footer'
            style={{ backgroundImage: `url(${BackgroundFooter})` }}
        >
                    <div className="container">
            
            
            <div className='footer__content'>
                <div className='footer__content__left'>
                    <div className='footer__content__left__images'>
                        <img src={ImageItem1} alt='' />
                        <img src={ImageItem2} alt='' />
                    </div>
                    <div className='footer__content__left__text'>
                        <span>
                            <FormattedMessage
                            id='home.footer.left'
                            />
                        </span>
                    </div>
                </div>
                <div className='footer__content__right'>
                    <ul className='contact-list'>
                        <li className='contact-item-title'>
                            <span><FormattedMessage
                            id='home.footer.title-right'
                            /></span>
                        </li>

                        <li className='contact-item'>
                            <i className='bx bxs-home'></i>
                            <span>
                                Shop 2/60 Santa Cruz Blvd., Clear Island Waters
                                Gold Coast, Queensland Australia
                            </span>
                        </li>
                        <li className='contact-item'>
                            <i className='bx bxs-phone'></i>
                            <span>+0-11-475-1433</span>
                        </li>
                        <li className='contact-item'>
                            <i className='bx bxs-envelope'></i>
                            <span>admin@flannerylaw.com.au</span>
                        </li>
                        <li className='contact-item'>
                            <i className='bx bxl-skype'></i>
                            <span>+0-11-475-1433</span>
                        </li>
                        <li className='contact-item'>
                            <i className='bx bxl-whatsapp'></i>
                            <span>+0-11-475-1433</span>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Footer;
