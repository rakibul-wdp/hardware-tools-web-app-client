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
  }, [tool, toolId]);
  return (
    <div className='card lg:card-side bg-base-100 shadow-xl my-16'>
      <figure className='w-full'>
        <img src={tool.img} alt='Album' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title font-bold text-2xl'>{tool.name}</h2>
        <p className='border rounded font-bold text-primary w-80 py-2 px-3'>Price: ${tool.price}</p>
        <p className='border rounded font-bold text-primary w-80 py-2 px-3'>
          Minimum Order Quantity: {tool.minimumOrderQuantity}
        </p>
        <p className='border rounded font-bold text-primary w-80 py-2 px-3'>
          Available Quantity: ${tool.availableQuantity}
        </p>
        <p>{tool.description}</p>
        <div className='card-actions justify-center'>
          <label htmlFor='order-modal' className='btn btn-primary w-full'>
            Order
          </label>
        </div>
      </div>
      {tool && <OrderModal tool={tool} setTool={setTool} />}
    </div>
  );
};

export default ToolDetail;
