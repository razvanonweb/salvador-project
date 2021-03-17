import React from 'react';
import Micro from '../../assets/icons/microphone offer.svg';
import User from '../../assets/icons/user-circle 1.svg';
import Youtube from '../../assets/icons/youtube-logo 1.svg';

const OfferSection = () => {
  return (
    <div className="offer__section">
      <div className="container-xl">
        <div className="row offer__section-row">
          <div className="col-sm-12 col-md-4 mb-3">
            <div className="offer__section-box">
              <img className="offer__section-img" src={Micro} alt="micro" />
              <p className="offer__section-title">Lorem ipsum</p>
              <p className="offer__section-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <span>
                  Lorem Ipsum has been the industry's standard dummy text.
                </span>
              </p>
              <a href="#" className="offer__section-button">
                see more
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 mb-3">
            <div className="offer__section-box">
              <img className="offer__section-img" src={User} alt="user" />
              <p className="offer__section-title">Lorem ipsum</p>
              <p className="offer__section-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <span>
                  Lorem Ipsum has been the industry's standard dummy text.
                </span>
              </p>
              <a href="#" className="offer__section-button">
                see more
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 m-0">
            <div className="offer__section-box">
              <img
                className="offer__section-img"
                src={Youtube}
                alt="you-tube"
              />
              <p className="offer__section-title">Lorem ipsum</p>
              <p className="offer__section-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <span>
                  Lorem Ipsum has been the industry's standard dummy text.
                </span>
              </p>
              <a href="#" className="offer__section-button">
                see more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
