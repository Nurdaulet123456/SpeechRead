import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLogout = () => {
  return (
    <>
        <Link className='btn' to={'/profile'}>Go to Profile</Link>
    </>
  );
}

export default ButtonLogout;
