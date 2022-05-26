import React from 'react';

const BusinessSummary = () => {
  return (
    <div className='mb-16'>
      <h2 className='text-3xl font-bold italic pl-5 mb-5'>We Proud for our Business</h2>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        <div className='card lg:max-w-lg bg-base-100 shadow-xl'>
          <figure className='px-10 pt-10'>
            <div className='avatar'>
              <div className='w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                <img
                  src='https://thumbs.dreamstime.com/b/customer-service-icon-vector-illustration-client-symbol-customer-service-icon-vector-illustration-client-symbol-web-sites-170904571.jpg'
                  alt=''
                />
              </div>
            </div>
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title text-primary text-3xl'>100k+</h2>
            <p className='font-bold'>Customer We Served...!!!</p>
          </div>
        </div>
        <div className='card lg:max-w-lg bg-base-100 shadow-xl'>
          <figure className='px-10 pt-10'>
            <div className='avatar'>
              <div className='w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                <img
                  src='https://media.istockphoto.com/vectors/earning-growth-icon-vector-id939238878?k=20&m=939238878&s=612x612&w=0&h=7awD9FH66qFmH9oqUr2wuJTkDtfvLIyOAY2ZhKZ1Nbk='
                  alt=''
                />
              </div>
            </div>
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title text-primary text-3xl'>130M+</h2>
            <p className='font-bold'>Annual Revenue...!!!</p>
          </div>
        </div>
        <div className='card lg:max-w-lg bg-base-100 shadow-xl'>
          <figure className='px-10 pt-10'>
            <div className='avatar'>
              <div className='w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                <img src='https://cdn-icons-png.flaticon.com/512/651/651191.png' alt='' />
              </div>
            </div>
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title text-primary text-3xl'>70k+</h2>
            <p className='font-bold'>Customer Reviews...!!!</p>
          </div>
        </div>
        <div className='card lg:max-w-lg bg-base-100 shadow-xl'>
          <figure className='px-10 pt-10'>
            <div className='avatar'>
              <div className='w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4__Lyi4lFZc-uEuIPnfHSydH0gbwcakKD_A&usqp=CAU'
                  alt=''
                />
              </div>
            </div>
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title text-primary text-3xl'>35k+</h2>
            <p className='font-bold'>Tools or Products...!!!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
