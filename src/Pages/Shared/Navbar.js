import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-primary px-12'>
      <div className='flex justify-between items-center'>
        <img
          className='w-28 h-14'
          src='https://cdn4.vectorstock.com/i/1000x1000/45/38/logo-for-hardware-tools-vector-33274538.jpg'
          alt=''
        />
        <h2 className='text-2xl font-bold font-serif'>Hardware Tools</h2>
        <h2>Sign Up/Login</h2>
      </div>
    </div>
  );
};

export default Navbar;
