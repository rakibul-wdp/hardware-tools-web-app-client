import React from 'react';
import useTools from '../../hooks/useTools';
import Tool from './Tool';

const Tools = () => {
  const [tools] = useTools();
  return (
    <div className='my-20'>
      <h2 className='text-3xl font-bold italic pl-5 mb-5'>Tools or Product</h2>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {tools.slice(0, 6).map((tool) => (
          <Tool key={tool._id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
