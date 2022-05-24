import React, { useState } from 'react';
import useTools from '../../hooks/useTools';

import DeleteToolModal from './DeleteToolModal';

const ManageTools = () => {
  const [tools] = useTools();
  const [deleteTool, setDeleteTool] = useState(null);
  return (
    <div>
      <h2>Manage Tools {tools.length}</h2>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Tool Image</th>
              <th>Tool Name</th>
              <th>Available Quantity</th>
              <th>Order Quantity</th>
              <th>Per Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool, index) => (
              <tr key={tool._id}>
                <th>{index + 1}</th>
                <td>
                  <div className='avatar'>
                    <div className='w-16 mask mask-squircle'>
                      <img src={tool.img} alt='tool' />
                    </div>
                  </div>
                </td>
                <td>{tool.name}</td>
                <td>{tool.availableQuantity}</td>
                <td>{tool.minimumOrderQuantity}</td>
                <td>{tool.price}</td>
                <td>
                  <label onClick={() => setDeleteTool(tool)} for='delete-tool-modal' className='btn btn-sm btn-error'>
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteTool && <DeleteToolModal deleteTool={deleteTool} setDeleteTool={setDeleteTool} />}
    </div>
  );
};

export default ManageTools;
