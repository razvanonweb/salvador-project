import React from 'react';
import LogoImg from '../../../assets/icons/microphone 1.svg';

const Logo = () => {
  return (
    <div className="col-6 d-flex">
      <a className="flex-center" href="#">
        <div className="logo__nav flex-center">
          <img src={LogoImg} alt="Logo" />
        </div>
        <h1 className="logo__title flex-center">Salvador podcast</h1>
      </a>
    </div>
  );
};

export default Logo;
