import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container-xl p-0 footer__container">
        <Link to="/" className="footer__container-logo">
          Salvador podcast
        </Link>
        <p>“Lorem Ipsum is simply dummy text”</p>
      </div>
      <div className="container-xl p-0 footer__menu">
        <div className="row">
          <div className="col-md">
            <ul className="d-flex">
              <li>
                <Link to="/prezentare">Prezentare</Link>
              </li>
              <li>
                <Link to="/beneficii">Beneficii</Link>
              </li>
              <li>
                <Link to="/facilitati">Facilitati</Link>
              </li>
              <li>
                <Link to="/clienti">Clienti</Link>
              </li>
              <li>
                <Link className="contact" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md footer__menu-helper">
            <ul className="d-flex padding-ul footer__menu-helper-ul">
              <li>
                <Link to="/support">Support</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-xl copy-right p-0">
        <p>© Salvador Podcast · 2021. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
