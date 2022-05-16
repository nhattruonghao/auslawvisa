import React from 'react';
import { FormattedMessage } from 'react-intl';
import img from '../assets/images/aboutus.png';

function AboutUs() {
    return (
        <div className='about'>
            <div className='container'>
                <div className='about__layout'>
                    <div className='about__layout__text'>
                        <div className='about__layout__text__title'>
                            <span>
                            <FormattedMessage 
                        id='home.about.child1' />
                            </span>
                            <span>
                            <FormattedMessage 
                        id='home.about.child2' />
                                </span>
                        </div>
                        <div className='about__layout__text__desc'>
                            <span>
                            <FormattedMessage 
                        id='home.about.child3' />
                            </span>
                            <span>
                            <FormattedMessage 
                        id='home.about.child4' />
                            </span>
                            <span>
                            <FormattedMessage 
                        id='home.about.child5' />
                                </span>
                        </div>
                    </div>
                    <div className='about__layout__img'>
                        <img src={img} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
