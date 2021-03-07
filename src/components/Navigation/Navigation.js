import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/microphone 1.svg';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handle__mobileMenu = () => {
    let show__mobileMenu = 'flex-center padding-ul';
    if (showMenu) {
      show__mobileMenu += ' show__menu-mobile';
    }
    return show__mobileMenu;
  };

  return (
    <div className="container-fluid p-0 flex-center nav">
      <div className="container-xl">
        <div className="row">
          <div className="col-5 d-flex">
            <Link className="flex-center" to="/">
              <div className="logo-nav flex-center">
                <img src={Logo} alt="Logo" />
              </div>
              <h1 className="logo__text flex-center">Salvador podcast</h1>
            </Link>
          </div>

          <div className="col-7 d-flex justify-content-end menu__navigation">
            <div
              className="hamburger__menu"
              onClick={() => setShowMenu(!showMenu)}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
            <ul className={handle__mobileMenu() + ` col-sm-12`}>
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
        </div>
      </div>
    </div>
  );
};

export default Navigation;
