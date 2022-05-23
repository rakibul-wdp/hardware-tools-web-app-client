import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderModal from './OrderModal';

const ToolDetail = () => {
  const { toolId } = useParams();
  const [tool, setTool] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/tool/${toolId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, []);
  return (
    <div className='card lg:card-side bg-base-100 shadow-xl'>
      <figure>
        <img src={tool.img} alt='Album' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{tool.name}</h2>
        <p>Price: ${tool.price}</p>
        <p>Minimum Order Quantity: {tool.minimumOrderQuantity}</p>
        <p>Available Quantity: ${tool.availableQuantity}</p>
        <p>{tool.description}</p>
        <div className='card-actions justify-end'>
          <label htmlFor='order-modal' className='btn btn-primary'>
            Order
          </label>
        </div>
      </div>
      {tool && <OrderModal tool={tool} />}
    </div>
  );
};

export default ToolDetail;
