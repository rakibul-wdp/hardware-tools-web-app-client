import React from 'react';

const Tool = ({ tool }) => {
  const { name, img, description, price, minimumOrderQuantity, availableQuantity } = tool;
  return (
    <div className='card card-compact lg:max-w-lg bg-base-100 shadow-xl'>
      <figure>
        <img src={img} alt='tool' />
      </figure>
      <div className='card-body'>
        <div className='flex justify-between items-center'>
          <p className='text-2xl font-bold'>{name}</p>
          <p className='text-md font-bold text-primary'>Price: ${price}</p>
        </div>
        <div className='flex justify-between items-center'>
          <p>Minimum Order Quantity: {minimumOrderQuantity}</p>
          <p>Available Quantity: {availableQuantity}</p>
        </div>
        <p>{description.slice(0, 150)}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
