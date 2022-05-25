import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import DeleteByAdminOrderModal from './DeleteByAdminOrderModal';

const ManageOrders = () => {
  const [deleteOrderAdmin, setDeleteOrderAdmin] = useState(null);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery('allOrder', () =>
    fetch('http://localhost:5000/allOrder', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  const statusChange = (id, order) => {
    const status = order.status;
    fetch(`http://localhost:5000/allOrder/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast('Quantity Update successfully');
      });
  };
  return (
    <div>
      <h2>Manage Orders {orders.length}</h2>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Tool Name</th>
              <th>Order Quantity</th>
              <th>Total Price</th>
              <th>Payment Status</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.toolName}</td>
                <td>{order.orderQuantity}</td>
                <td>{order.totalPrice}</td>
                {order.status ? (
                  <td>
                    <button onClick={() => statusChange(order._id, order)} className='btn btn-sm btn-success'>
                      {order.status}
                    </button>
                  </td>
                ) : (
                  <td>
                    <button className='btn btn-sm btn-info'>Unpaid</button>
                  </td>
                )}
                {!order.status && (
                  <td>
                    <label
                      onClick={() => setDeleteOrderAdmin(order)}
                      for='delete-tool-by-admin-modal'
                      className='btn btn-sm btn-error'
                    >
                      Cancel
                    </label>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteOrderAdmin && (
        <DeleteByAdminOrderModal
          deleteOrderAdmin={deleteOrderAdmin}
          setDeleteOrderAdmin={setDeleteOrderAdmin}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default ManageOrders;
