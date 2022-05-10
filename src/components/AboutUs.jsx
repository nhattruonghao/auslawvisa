import React from 'react';
import img from '../assets/images/aboutus.png';

function AboutUs() {
    return (
        <div className='about'>
            <div className='container'>
                <div className='about__layout'>
                    <div className='about__layout__text'>
                        <div className='about__layout__text__title'>
                            <span>ALL ABOUT AUSTRALIAN VISA LAW</span>
                            <span>AUSTRALIAN VISA LAW</span>
                        </div>
                        <div className='about__layout__text__desc'>
                            <span>
                                Australian Visa Law – The experts – Australian
                                visa – Australian Migration. We are your best
                                choice for an Australian Migration agent.
                                Because we are skilled, concentrated and highly
                                knowledgeable in Australian Visa Law, we bring
                                true focus upon each client’s individual needs
                                and desires and provide continual communication
                                with you in an efficient and cost effective
                                manner.
                            </span>
                            <span>
                                Our professional culture is underpinned by the
                                highest ethical and professional standards.
                            </span>
                            <span>AUSTRALIAN VISA LAW</span>
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
