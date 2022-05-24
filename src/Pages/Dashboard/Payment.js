import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51L30Y5AlY90NoFY70Ep7dbv81ZfBgsPWnQ344MhZ5aDjCYL3BcYcHOHssJH73Y0uk448io0geOqxw5sRAY5uc7RD00PceuYiWL'
);

const Payment = () => {
  const { paymentId } = useParams();
  const url = `http://localhost:5000/order/${paymentId}`;

  const { data: payment, isLoading } = useQuery(['order', paymentId], () =>
    fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className=' mx-auto my-28'>
      <div className='card w-50 max-w-md bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h1 className='text-2xl font-bold text-success'>Hello {payment.customerName}</h1>
          <h2 className='card-title text-primary'>Pay for {payment.toolName}</h2>
          <p>Order Quantity: {payment.orderQuantity}</p>
          <p>Total Price: {payment.totalPrice}</p>
          <p>Please pay: ${payment.totalPrice}</p>
        </div>
      </div>
      <div className='card flex-shrink-0 w-50 max-w-md shadow-2xl'>
        <div className='card-body'>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
