import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import languageSlice, {selectLanguage, changeLanguage } from '../features/language/languageSlice';
import { selectPopupLanguage, togglePopupLanguage } from '../features/Ui/uiSlice';
import vietnam from '../assets/images/icon/vietnam.png';
import uk from '../assets/images/icon/uk.png';
import {FormattedMessage} from 'react-intl'


function PopupLanguage() {
    const languageData =[
        {
            display: 'Vietnamese',
            value: 'vi',
            img: vietnam,
        },
        {
            display: 'English',
            value: 'en',
            img: uk,
        }
    ];
    const styleItemLanguage = {
        border: '2px solid #6953A8',
        color: '#6953A8',
        backgroundColor: '#fff'
    }
    const languageStore = useSelector(selectLanguage);
    const popupLanguageStore = useSelector(selectPopupLanguage);
    

    const dispatch = useDispatch();

    const HandleChangeLanguage = (item) => {
        dispatch(changeLanguage(item));
    }

    const HandleTogglePopupLanguage = () => {
        console.log(popupLanguageStore);
        dispatch(togglePopupLanguage())
    }

  return (
    <div className="language" style={{display: popupLanguageStore ? 'block' : 'none'}}>
        <div className="language__content">
            <div className="language__content__title">
                <h3>
                    <FormattedMessage
                    id="popuplang.title"
                    defaultMessage='Select Language'
                    />
                    </h3>
            </div>
            <div className="language__content__select">
                {
                    languageData.map ((item, index) => {
                        return(
                            <div key={index} className="language__content__item"
                            style={languageStore === item.value ? styleItemLanguage : {}}
                            onClick={() => HandleChangeLanguage(item.value)}
                            >
                                <img src={item.img} alt="" />
                                <span>
                                {item.display}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="language__content__button" onClick={HandleTogglePopupLanguage} >
            <FormattedMessage
                    id="popuplang.button"
                    defaultMessage='Ok'
                    />
            </div>
        </div>
    </div>
  )
}

export default PopupLanguage