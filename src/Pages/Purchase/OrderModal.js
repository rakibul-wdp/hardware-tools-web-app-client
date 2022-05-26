import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const OrderModal = ({ tool, setTool }) => {
  const { _id, name, price, minimumOrderQuantity, availableQuantity } = tool;
  const [user] = useAuthState(auth);
  const [totalPrice, setTotalPrice] = useState('');
  const { toolId } = useParams();

  const forPrice = (e) => {
    setTotalPrice(e.target.value * price);
  };

  let error;

  const handleOrder = (e) => {
    e.preventDefault();
    const order = {
      customerId: _id,
      toolName: name,
      customerName: user.displayName,
      customerEmail: user.email,
      orderQuantity: e.target.orderQuantity.value,
      totalPrice: totalPrice,
      phone: e.target.phone.value,
      address: e.target.address.value,
    };

    if (order.orderQuantity >= parseInt(minimumOrderQuantity) && order.orderQuantity <= parseInt(availableQuantity)) {
      const updateAvailableQuantity = availableQuantity - order.orderQuantity;
      fetch(`https://limitless-ocean-18440.herokuapp.com/tool/${toolId}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ availableQuantity: updateAvailableQuantity }),
      })
        .then((res) => res.json())
        .then((data) => {
          toast('Quantity Update successfully');
        });

      fetch('https://limitless-ocean-18440.herokuapp.com/order', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          toast('Order Place successfully');
        });
    } else {
      console.log('error');
      return (error = <p>Order is not less than minimumOrderQuantity</p>);
    }
    e.target.reset();
    setTool('');
  };
  return (
    <div>
      <input type='checkbox' id='order-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <label htmlFor='order-modal' className='btn btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </label>
          <h3 className='font-bold text-xl text-center text-primary'>Order for: {name}</h3>
          <form onSubmit={handleOrder} className='ml-5'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              name='name'
              disabled
              value={user?.displayName || ''}
              className='input w-full max-w-sm mx-auto border-b-2 border-primary border-0'
            />
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              name='email'
              disabled
              value={user?.email || ''}
              className='input w-full max-w-sm mx-auto border-b-2 border-primary border-0'
            />
            <label className='label'>
              <span className='label-text'>Order Quantity</span>
            </label>
            <input
              type='text'
              name='orderQuantity'
              onChange={forPrice}
              placeholder='Order Quantity'
              className='input w-full max-w-sm mx-auto border-b-2 border-primary border-0'
            />
            {error}
            <label className='label'>
              <span className='label-text'>Total Price</span>
            </label>
            <input
              type='text'
              disabled
              value={totalPrice}
              className='input w-full max-w-sm mx-auto border-b-2 border-primary border-0'
            />
            <label className='label'>
              <span className='label-text'>Phone Number</span>
            </label>
            <input
              type='text'
              name='phone'
              placeholder='Phone Number'
              className='input w-full max-w-sm mx-auto border-b-2 border-primary border-0'
            />
            <label className='label'>
              <span className='label-text'>Address</span>
            </label>
            <input
              type='text'
              name='address'
              placeholder='Address'
              className='input w-full max-w-sm mx-auto border-b-2 border-primary border-0 mb-4'
            />
            <input
              type='submit'
              value='Order'
              className='btn btn-primary w-full max-w-sm mx-auto border-b-2 border-primary border-0'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
