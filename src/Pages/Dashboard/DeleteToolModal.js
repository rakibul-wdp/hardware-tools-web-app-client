import React from 'react';
import { toast } from 'react-toastify';

const DeleteToolModal = ({ deleteTool, setDeleteTool }) => {
  const { name, _id } = deleteTool;

  const handleDelete = () => {
    fetch(`https://limitless-ocean-18440.herokuapp.com/tool/${_id}`, {
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
          setDeleteTool(null);
        }
      });
  };
  return (
    <div>
      <input type='checkbox' id='delete-tool-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg text-red-500'>Are you sure you want to delete {name}</h3>
          <p className='py-4'>
            You've been selected for a chance to get one year of subscription to use Wikipedia for free!
          </p>
          <div className='modal-action'>
            <button onClick={handleDelete} className='btn btn-sm btn-error'>
              Delete
            </button>
            <label for='delete-tool-modal' className='btn btn-sm'>
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteToolModal;
