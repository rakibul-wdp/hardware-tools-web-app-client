import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
  const { _id, name, img, description, price, minimumOrderQuantity, availableQuantity } = tool;
  const navigate = useNavigate();

  const navigateDetails = (id) => {
    navigate(`/tool/${id}`);
  };
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
          <p className='italic border rounded bg-primary'>Minimum Order Quantity: {minimumOrderQuantity}</p>
          <p className='italic border rounded bg-primary'>Available Quantity: {availableQuantity}</p>
        </div>
        <p>{description.slice(0, 150)}</p>
        <div className='card-actions justify-end'>
          <button onClick={() => navigateDetails(_id)} className='btn btn-primary'>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
