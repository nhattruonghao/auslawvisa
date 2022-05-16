import React, { useState } from 'react';
import Grid from '../components/Grid';
import servicesData from '../assets/fake-data/servicesData';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import {selectLanguage} from '../features/language/languageSlice'

function ServicesItem() {
    const language = useSelector(selectLanguage);
    const [langg, setLang] = useState(language);

    return (
        <div className='services'>
            <div className='container'>
                <div className='services__title'>
                    <span>
                        <FormattedMessage 
                        id='home.title-services.sub' />
                    </span>
                    <span><FormattedMessage 
                        id='home.title-services.main' /></span>
                   
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
                                                {item.lang[language].title}
                                            </div>
                                            <div className="services__item__content__desc">
                                                {item.lang[language].desc}
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
