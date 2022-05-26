import React from 'react';
import Helmet from '../components/Helmet';
import ThankTitle from '../assets/images/thanks.png';
import Divier1 from '../assets/images/divier1.png';
import Chuky from '../assets/images/chukyhao.png';



function Thanks() {
  return (
    <div className="thanks-page">
      <Helmet bgcolor='#B4FF9F' />
      <div className="container">
        <div className="thanks-page__letter">
            <div className="thanks-page__letter__title">
              <img src={ThankTitle} alt="" />
            </div>
            <div className="thanks-page__letter__divier">
              <img src={Divier1} alt="" />
            </div>
            <div className="thanks-page__letter__desc">
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            <div className="thanks-page__letter__info">
              <div className="thanks-page__letter__info__block">
              <span>LoremIpsum</span>
              <img src={Chuky} alt="" />
              <span>H. Rackham</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Thanks