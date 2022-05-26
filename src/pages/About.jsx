import React from 'react';
import Helmet from '../components/Helmet';
import Background from '../assets/images/bgabout.png';

function About() {

  return (
    <div className="about-page">
      <div className="about-page__bg" style={{backgroundImage: `url(${Background})`}}>
            
            <div className="about-page__bg__text">
              <span>Welcome to</span>
              <span>Australian Visa Law</span>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="about-page__content">
              <div className="about-page__content__title">
                <h3>
                ABOUT US
                </h3>
              </div>
              <div className="about-page__content__desc">
                <p>
                "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
                </p>
              </div>
            </div>
          </div>
      </div>
  )
}

export default About