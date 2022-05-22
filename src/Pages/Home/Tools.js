import React from 'react';
import useTools from '../../hooks/useTools';
import Tool from './Tool';

const Tools = () => {
  const [tools] = useTools();
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20'>
      {tools.slice(0, 6).map((tool) => (
        <Tool key={tool._id} tool={tool} />
      ))}
    </div>
  );
};

export default Tools;
