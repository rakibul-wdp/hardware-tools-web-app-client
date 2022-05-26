import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };
  const menuItems = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/tools'>Tools</Link>
      </li>
      {user && (
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
      )}
      <li>
        <Link to='/blogs'>Blogs</Link>
      </li>
      <li>
        <Link to='/portfolio'>Portfolio</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      {user && (
        <li>
          <Link to='/about'>{user.displayName}</Link>
        </li>
      )}
    </>
  );
  return (
    <div className='bg-primary px-12'>
      <div className='flex justify-between items-center'>
        <div className='avatar'>
          <div className='w-20 mask mask-hexagon'>
            <img src='https://i.ibb.co/Ss56tg3/logo-fav.png' alt='' />
          </div>
        </div>
        <h2 className='text-2xl font-bold font-serif'>Hardware Tools</h2>
        {user ? (
          <button className='btn btn-ghost font-bold' onClick={logout}>
            Sign Out
          </button>
        ) : (
          <Link className='btn btn-ghost font-bold' to='/login'>
            SignUp / Login
          </Link>
        )}
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
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold text-lg'
            >
              {menuItems}
            </ul>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex font-bold text-lg'>
          <ul className='menu menu-horizontal p-0'>{menuItems}</ul>
        </div>
        <div className='navbar-end'>
          <label tabIndex='1' htmlFor='dashboard-sidebar' className='btn btn-ghost lg:hidden'>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
