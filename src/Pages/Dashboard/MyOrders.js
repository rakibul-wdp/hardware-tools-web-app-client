import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?customerEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);
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
                <td>Pay</td>
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
