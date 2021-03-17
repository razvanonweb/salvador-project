import React from 'react';
import Hero_img from '../../assets/images/jonathan-velasquez-c1ZN57GfDB0-unsplash 1.jpg';

const Hero = () => {
  return (
    <div className="hero__container">
      <img className="hero__bg-img" src={Hero_img} alt="hero-img" />
      <div className="container-xl hero__description">
        <h1 className="hero__description-title">Salvador podcast</h1>
        <p className="hero__description-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <span className="display__none">
            {' '}
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </span>
        </p>
        <a href="#" className="hero__description-button">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Hero;
