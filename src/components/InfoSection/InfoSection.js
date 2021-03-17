import React from 'react';
import bgImage from '../../assets/images/convertkit-waxDxYM2XI4-unsplash 1.jpg';

const InfoSection = () => {
  return (
    <div className="container-fluid p-0 info__section">
      <img className="info__section-img" src={bgImage} alt="bgImage" />
      <div className="container-xl">
        <div className="info__section-description">
          <p className="info__section-title">Lorem ipsum dolor sit amet.</p>
          <p className="info__section-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
            <span>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.{' '}
            </span>
          </p>
          <p className="info__section-title">Lorem ipsum dolor sit amet.</p>
          <p className="info__section-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
            <span>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.{' '}
            </span>
          </p>
          <p className="info__section-title">Lorem ipsum dolor sit amet.</p>
          <p className="info__section-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
            <span>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.{' '}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
