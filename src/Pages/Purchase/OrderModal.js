import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const OrderModal = ({ tool }) => {
  const { name, price } = tool;
  const [user, loading, error] = useAuthState(auth);
  const [totalPrice, setTotalPrice] = useState('');

  const forPrice = (e) => {
    setTotalPrice(e.target.value * price);
  };
  return (
    <div>
      <input type='checkbox' id='order-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <label htmlFor='order-modal' className='btn btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </label>
          <h3 className='font-bold text-lg'>Order for: {name}</h3>
          <form>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input type='text' name='name' disabled value={user?.displayName || ''} className='input w-full max-w-xs' />
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input type='email' name='email' disabled value={user?.email || ''} className='input w-full max-w-xs' />
            <label className='label'>
              <span className='label-text'>Order Quantity</span>
            </label>
            <input
              type='text'
              name='orderQuantity'
              onChange={forPrice}
              placeholder='Order Quantity'
              className='input w-full max-w-xs'
            />
            <label className='label'>
              <span className='label-text'>Total Price</span>
            </label>
            <input type='text' disabled value={totalPrice} className='input w-full max-w-xs' />
            <label className='label'>
              <span className='label-text'>Phone Number</span>
            </label>
            <input type='text' name='phone' placeholder='Phone Number' className='input w-full max-w-xs' />
            <label className='label'>
              <span className='label-text'>Address</span>
            </label>
            <input type='text' name='address' placeholder='Address' className='input w-full max-w-xs' />
            <input type='submit' value='Order' className='btn btn-primary w-full max-w-xs' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
