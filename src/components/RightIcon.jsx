import React from 'react';
import vietnam from '../assets/images/icon/vn120.png';
import uk from '../assets/images/icon/uk120.png';
import {
    selectPopupLanguage,
    togglePopupLanguage,
} from '../features/Ui/uiSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectLanguage,
    changeLanguage,
} from '../features/language/languageSlice';
import { FormattedMessage } from 'react-intl';


function RightIcon() {
    const language = useSelector(selectLanguage);
    const dispatch = useDispatch();

    const HandleTogglePopupLanguage = () => {
        dispatch(togglePopupLanguage());
    }

    const languageData = [
        {
            display: 'Vietnamese',
            value: 'vi',
            img: vietnam,
        },
        {
            display: 'English',
            value: 'en',
            img: uk,
        },
    ];
    return (
        <div className='right-icon' onClick={() => HandleTogglePopupLanguage()}>
            <div className='right-icon__content'>
                <div className='right-icon__flat'>
                    {languageData.map((item, index) => {
                        if (item.value.includes(language)) {
                            return <img key={index} src={item.img} alt='' />;
                        }
                    })}
                </div>
                <div className='right-icon__title'><FormattedMessage id='lang' /></div>
            </div>
        </div>
    );
}

export default RightIcon;
