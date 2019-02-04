import React from 'react';

const Footer = () => {
  const currentYear = (new Date()).getFullYear();
  return (
    <footer className='bg-light-purple pa2'>
      <span className='white'>Copyright © {`${currentYear === 2019 ? '' : '2019 - '}${currentYear}`} by <a className='white' href='http://www.uritservices.com' target='__blank'><i><strong>uRi</strong>tServices</i></a></span>
    </footer>
  );
}

export default Footer;