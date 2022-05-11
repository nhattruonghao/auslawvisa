import React from 'react';
import background from '../assets/images/backgroundcontact.png';

function Contact() {
    return (
        <div className='contact'>
            <img src={background} alt='' className='contact__bg' />
            <div className='container'>
                <div className='contact__layout'>
                    

                    <div className='contact__layout__mainform'>
                    <div className='contact__layout__subform'>
                        <ul className='contact__layout__subform__list'>
                            <li className='contact__layout__subform__item__title'>
                                <span>CONTACT US</span>
                            </li>
                            <li className='contact__layout__subform__item'>
                                <i class='bx bxs-home'></i>
                                <span>
                                    Shop 2/60 Santa Cruz Blvd., Clear Island
                                    Waters Gold Coast, Queensland Australia
                                </span>
                            </li>
                            <li className='contact__layout__subform__item'>
                                <i class='bx bxs-phone'></i>
                                <span>+0-11-475-1433</span>
                            </li>
                            <li className='contact__layout__subform__item'>
                                <i class='bx bxs-envelope'></i>
                                <span>admin@flannerylaw.com.au</span>
                            </li>

                            <li className='contact__layout__subform__item__social'>
                                <i class='bx bxl-instagram-alt'></i>
                                <i class='bx bxl-twitter'></i>
                                <i class='bx bxl-linkedin'></i>
                                <i class='bx bxl-whatsapp'></i>
                            </li>
                        </ul>
                    </div>
                        <div className='contact__layout__mainform__left'></div>
                        <div className='contact__layout__mainform__right'>
                            <div className='contact__layout__mainform__title'>
                                <span>GET A QUOTE</span>
                                <span>CONSULTING FORM</span>
                            </div>
                            <div className='contact__layout__mainform__form'>
                                <input type='text' name='name' id='' placeholder='Your name' />
                                <input type='number' name='phone' id='' placeholder='Your number' />
                                <input type='email' name='phone' id='' placeholder='Your email'/>
                                <textarea type='text' name='message' id='' placeholder='Your message'/>
                                <button className='contact__layout__mainform__button'>
                                SEND
                            </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
