import React from 'react';
import { FormattedMessage } from 'react-intl';
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
                                <span>
                                {<FormattedMessage 
                        id='home.contact-form.title-sub' />}
                                </span>
                            </li>
                            <li className='contact__layout__subform__item'>
                                <i className='bx bxs-home'></i>
                                <span>
                                    Shop 2/60 Santa Cruz Blvd., Clear Island
                                    Waters Gold Coast, Queensland Australia
                                </span>
                            </li>
                            <li className='contact__layout__subform__item'>
                                <i className='bx bxs-phone'></i>
                                <span>+0-11-475-1433</span>
                            </li>
                            <li className='contact__layout__subform__item'>
                                <i className='bx bxs-envelope'></i>
                                <span>admin@flannerylaw.com.au</span>
                            </li>

                            <li className='contact__layout__subform__item__social'>
                                <i className='bx bxl-instagram-alt'></i>
                                <i className='bx bxl-twitter'></i>
                                <i className='bx bxl-linkedin'></i>
                                <i className='bx bxl-whatsapp'></i>
                            </li>
                        </ul>
                    </div>
                        <div className='contact__layout__mainform__left'></div>
                        <div className='contact__layout__mainform__right'>
                            <div className='contact__layout__mainform__title'>
                                <span>
                                <FormattedMessage 
                        id='home.contact-form.title1-main' />
                                </span>
                                <span>
                                <FormattedMessage 
                        id='home.contact-form.title2-main' />
                                    </span>
                            </div>
                            <div className='contact__layout__mainform__form'>
                            <FormattedMessage 
                        id='home.contact-form.form1' >
                            {
                                placeholder => 
                                    <input type='text' name='name' id='' placeholder={placeholder} />
                            }
                        </FormattedMessage>

                        <FormattedMessage 
                        id='home.contact-form.form2' >
                            {
                                placeholder => 
                                <input type='number' name='phone' id='' placeholder={placeholder} />
                            }
                        </FormattedMessage>
                        <FormattedMessage 
                        id='home.contact-form.form3' >
                            {
                                placeholder => 
                                <input type='email' name='phone' id='' placeholder={placeholder}/>
                            }
                        </FormattedMessage>
                        <FormattedMessage 
                        id='home.contact-form.form4' >
                            {
                                placeholder => 
                                <textarea type='text' name='message' id='' placeholder={placeholder}/>
                            }
                        </FormattedMessage>
                                <button className='contact__layout__mainform__button'>
                                    < FormattedMessage 
                                    id='home.contact-form.btn'
                                    />                        
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
