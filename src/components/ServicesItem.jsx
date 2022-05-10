import React from 'react';
import Grid from '../components/Grid';
import servicesData from '../assets/fake-data/servicesData';

function ServicesItem() {
    return (
        <div className='services'>
            <div className='container'>
                <div className='services__title'>
                    <span>THIS IS WHAT WE ARE GOOD AT</span>
                    <span>OUR SERVICES</span>
                </div>
                <div className="services__list">
                    <Grid col={3} mdCol={3} smCol={2} xsCol={1} gap={20}>
                        {
                            servicesData.map((item, index) => {
                                return(
                                    <div key={index} className="services__item" >
                                        <div className="services__item__icon">
                                        <img src={item.img} alt="" />
                                        </div>
                                        <div className="services__item__content">
                                            <div className="services__item__content__title">
                                                {item.title}
                                            </div>
                                            <div className="services__item__content__desc">
                                                {item.desc}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default ServicesItem;
