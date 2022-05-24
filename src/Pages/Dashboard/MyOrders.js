import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?customerEmail=${user.email}`, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
          }
          return res.json();
        })
        .then((data) => setOrders(data));
    }
  }, [user, navigate]);
  return (
    <div>
      <h2>My Orders Here: {orders.length}</h2>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Customer Name</th>
              <th>Tool Name</th>
              <th>Order Quantity</th>
              <th>Total Price</th>
              <th>Payment</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{o.customerName}</td>
                <td>{o.toolName}</td>
                <td>{o.orderQuantity}</td>
                <td>{o.totalPrice}</td>
                <td>
                  {o.totalPrice && !o.paid && (
                    <Link to={`/dashboard/payment/${o._id}`}>
                      <button className='btn btn-sm btn-success'>pay</button>
                    </Link>
                  )}
                  {o.totalPrice && o.paid && (
                    <div>
                      <p>
                        <span className='text-success'>Paid</span>
                      </p>
                      <p>
                        Transaction id: <span className='text-success'>{o.transactionId}</span>
                      </p>
                    </div>
                  )}
                </td>
                <td>Cancel</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
