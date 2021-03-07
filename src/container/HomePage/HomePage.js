import React from 'react';
import Hero_img from '../../assets/images/jonathan-velasquez-c1ZN57GfDB0-unsplash 1.jpg';
import { Link } from 'react-router-dom';
import Micro from '../../assets/icons/microphone offer.svg';
import User from '../../assets/icons/user-circle 1.svg';
import Youtube from '../../assets/icons/youtube-logo 1.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Headphones_bkg from '../../assets/images/c-d-x-PDX_a_82obo-unsplash 1.jpg';
import Double_Quotes from '../../assets/icons/“.svg';

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container-fluid p-0">
      <div className="hero__container">
        <div className="hero__bkg"></div>
        <div className="hero__bkg-img">
          <img src={Hero_img} alt="hero-img" />
        </div>
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
          <Link to="/contact" className="hero__description-button">
            Contact
          </Link>
        </div>
      </div>

      <div className="box__section">
        <div className="container-xl">
          <div className="row box__section-row">
            <div className="col-sm-12 col-md-4 mb-3">
              <div className="box__section-box me-2">
                <img src={Micro} alt="micro" />
                <p className="box__section-title">Lorem ipsum</p>
                <p className="box__section-description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </p>
                <Link to="/see-more" className="box__section-button">
                  see more
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mb-3">
              <div className="box__section-box mx-1">
                <img src={User} alt="user" />
                <p className="box__section-title">Lorem ipsum</p>
                <p className="box__section-description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </p>
                <Link to="/see-more" className="box__section-button">
                  see more
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 m-0">
              <div className="box__section-box ms-2">
                <img src={Youtube} alt="you-tube" />
                <p className="box__section-title">Lorem ipsum</p>
                <p className="box__section-description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </p>
                <Link to="/see-more" className="box__section-button">
                  see more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid line__after__slider__section">
        <div className="line__after__slider__section-img">
          <img src={Micro} alt="micro" />
        </div>
      </div>

      <div className="slider__section">
        <Slider {...settings}>
          <div className="slider__section-box1">
            <div className="slider__section__main__description">
              <div className="container-xl">
                <p className="slider__section-box1-title">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="slider__section-box1-description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <img
                  className="slider__section-box1-double-quotes"
                  src={Double_Quotes}
                  alt='"'
                />
              </div>
            </div>
            <div className="slider__section-box1-description-bottom">
              <div className="container-xl d-flex justify-content-end">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <img
              className="slider__section-box1-bkg-img"
              src={Headphones_bkg}
              alt="headphones-bkg"
            />
          </div>
          <div className="slider__section-box1">
            <div className="slider__section__main__description">
              <div className="container-xl">
                <p className="slider__section-box1-title">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="slider__section-box1-description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <img
                  className="slider__section-box1-double-quotes"
                  src={Double_Quotes}
                  alt='"'
                />
              </div>
            </div>
            <div className="slider__section-box1-description-bottom">
              <div className="container-xl d-flex justify-content-end">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <img
              className="slider__section-box1-bkg-img"
              src={Headphones_bkg}
              alt="headphones-bkg"
            />
          </div>
          <div className="slider__section-box1">
            <div className="slider__section__main__description">
              <div className="container-xl">
                <p className="slider__section-box1-title">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="slider__section-box1-description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <img
                  className="slider__section-box1-double-quotes"
                  src={Double_Quotes}
                  alt='"'
                />
              </div>
            </div>
            <div className="slider__section-box1-description-bottom">
              <div className="container-xl d-flex justify-content-end">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <img
              className="slider__section-box1-bkg-img"
              src={Headphones_bkg}
              alt="headphones-bkg"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomePage;
