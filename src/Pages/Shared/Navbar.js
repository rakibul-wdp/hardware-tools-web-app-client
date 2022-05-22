import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/tools'>Tools</Link>
      </li>
      <li>
        <Link to='/blogs'>Blogs</Link>
      </li>
      <li>
        <Link to='/portfolio'>Portfolio</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </>
  );
  return (
    <div className='bg-primary px-12'>
      <div className='flex justify-between items-center'>
        <img
          className='w-28 h-14'
          src='https://cdn4.vectorstock.com/i/1000x1000/45/38/logo-for-hardware-tools-vector-33274538.jpg'
          alt=''
        />
        <h2 className='text-2xl font-bold font-serif'>Hardware Tools</h2>
        <h2 className='font-bold'>Sign Up/Login</h2>
      </div>
      <div className='navbar'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex='0' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
              </svg>
            </label>
            <ul
              tabIndex='0'
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold'
            >
              {menuItems}
            </ul>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex mr-[32%] font-bold'>
          <ul className='menu menu-horizontal p-0'>{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
