import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid p-0 footer">
      <div className="container-xl footer__container">
        <a href="#" className="footer__container-logo">
          Salvador podcast
        </a>
        <p className="footer-text">“Lorem Ipsum is simply dummy text”</p>
      </div>
      <div className="container-xl">
        <div className="row">
          <div className="col-md">
            <ul className="d-flex footer__list">
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Prezentare
                </a>
              </li>
              <div className="vertical-line"></div>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Beneficii
                </a>
              </li>
              <div className="vertical-line"></div>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Facilitati
                </a>
              </li>
              <div className="vertical-line"></div>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Clienti
                </a>
              </li>
              <div className="vertical-line"></div>
              <li className="footer__item">
                <a className="contact" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md">
            <ul className="d-flex footer__helper-list footer__list">
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Support
                </a>
              </li>
              <div className="vertical-line"></div>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-xl copy__right">
        <p className="copy__right-text">
          © Salvador Podcast · 2021. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
