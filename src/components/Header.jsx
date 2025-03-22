import React from 'react';
import programmersImg from '../img/programmers.png';

const Header = () => {
  return (
    <header className="mt-4 mb-10">
      <a href="/">
        <img className='inline-block' src={programmersImg} alt="안나오자나" />
      </a>
      <a className='inline-block text-6xl' href="/">programmers</a>
      <hr className='mt-10' />
    </header>
  );
};

export default Header;