import React from 'react';
import useTools from '../../hooks/useTools';
import { toast } from 'react-toastify';

const ManageTools = () => {
  const [tools] = useTools();

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/tool/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Tool deleted successfully`);
        }
      });
  };
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
                  <button onClick={() => handleDelete(tool._id)} className='btn btn-sm btn-error'>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTools;
