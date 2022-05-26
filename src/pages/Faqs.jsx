import React, { useEffect, useState } from 'react';
import Helmet from '../components/Helmet';
import { General, General2 } from '../assets/fake-data/faqs';
import Grid from '../components/Grid';

const Faqs = () =>  {
    const [data, setData] = useState(General)
    const [data2, setData2] = useState(General2)

    
    const HandleClick = (id) => {
        const temp = [...data];
        for (let index = 0; index < temp.length; index++) {
            if(temp[index].id === id ){
                temp[index].active = !temp[index].active;
            }
            setData(temp);
        }
    };
    const HandleClick2 = (id) => {
        const temp = [...data2];
        for (let index = 0; index < temp.length; index++) {
            if(temp[index].id === id ){
                temp[index].active = !temp[index].active;
            }
            setData2(temp);
        }
    };
    console.log(data)

    return (
        <div className='faqs-page'>
            <Helmet bgcolor='#B4FF9F' />
            <div className='faqs'>
                <div className='container'>
                    <div className='faqs__first'>
                        <h2>FREQUENTLY ASKED QUESTIONS</h2>
                    </div>
                    <div className='faqs__content'>
                        <div className='faqs__content__block'>
                            <div className='faqs__content__block__title'>
                                <h3>Generel</h3>
                            </div>

                            <div className='faqs__content__block__list'>
                                {data.map((item, index) => {
                                    return (
                                        <div
                                            className='faqs__content__block__item'
                                            key={index}
                                            onClick={() => HandleClick(item.id)}
                                        >
                                            <div className='faqs__content__block__question'>
                                                {item.question}
                                            </div>
                                            <div
                                                className='faqs__content__block__answer'
                                                style={{
                                                    display:
                                                        item && item.active === true
                                                            ? 'block'
                                                            : '',
                                                }}
                                            >
                                                {item.answer}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className='faqs__content__block'>
                            <div className='faqs__content__block__title'>
                                <h3>Application FAQs</h3>
                            </div>

                            <div className='faqs__content__block__list'>
                                {data2.map((item, index) => {
                                    return (
                                        <div
                                            className='faqs__content__block__item'
                                            key={index}
                                            onClick={() => HandleClick2(item.id)}
                                        >
                                            <div className='faqs__content__block__question'>
                                                {item.question}
                                            </div>
                                            <div
                                                className='faqs__content__block__answer'
                                                style={{
                                                    display:
                                                        item && item.active === true
                                                            ? 'block'
                                                            : '',
                                                }}
                                            >
                                                {item.answer}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faqs;
