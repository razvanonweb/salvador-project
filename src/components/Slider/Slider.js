import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Bg_1 from '../../assets/images/c-d-x-PDX_a_82obo-unsplash 1.jpg';
import Bg_2 from '../../assets/images/jukka-aalho-_t9c-kmMjl8-unsplash 1.jpg';
import Bg_3 from '../../assets/images/convertkit-waxDxYM2XI4-unsplash 1.jpg';
import Double_Quotes from '../../assets/icons/“.svg';

const SliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider__section">
      <Slider {...settings}>
        <div className="slider__section-box">
          <div className="slider__section-description">
            <div className="container-xl">
              <p className="slider__description-title">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="slider__description-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <img className="double__quotes-img" src={Double_Quotes} alt='"' />
            </div>
          </div>
          <div className="slider__bottom-description">
            <div className="container-xl d-flex justify-content-end">
              <p className="bottom__description-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <img
            className="slider__section-box1-bkg-img"
            src={Bg_1}
            alt="headphones-bkg"
          />
        </div>
        <div className="slider__section-box">
          <div className="slider__section-description">
            <div className="container-xl">
              <p className="slider__description-title">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="slider__description-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <img className="double__quotes-img" src={Double_Quotes} alt='"' />
            </div>
          </div>
          <div className="slider__bottom-description">
            <div className="container-xl d-flex justify-content-end">
              <p className="bottom__description-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <img
            className="slider__section-box1-bkg-img"
            src={Bg_2}
            alt="headphones-bkg"
          />
        </div>
        <div className="slider__section-box">
          <div className="slider__section-description">
            <div className="container-xl">
              <p className="slider__description-title">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="slider__description-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <img className="double__quotes-img" src={Double_Quotes} alt='"' />
            </div>
          </div>
          <div className="slider__bottom-description">
            <div className="container-xl d-flex justify-content-end">
              <p className="bottom__description-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <img
            className="slider__section-box1-bkg-img"
            src={Bg_3}
            alt="headphones-bkg"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderSection;
