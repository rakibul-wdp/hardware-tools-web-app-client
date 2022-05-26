import React from 'react';

const CustomerHelp = () => {
  return (
    <div className='mb-16'>
      <h2 className='text-3xl font-bold italic pl-5 mb-5'>How Can We Help...???</h2>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <div className='border rounded flex flex-col items-center bg-primary p-10'>
          <img src='https://cdn.makitatools.com/apps/wms/home/images/help/contact-us.png' alt='' />
          <h3 className='text-lg font-bold underline italic mt-3'>Contact Us</h3>
          <p>Have a question? Need help? Click here to contact us.</p>
        </div>
        <div className='border rounded flex flex-col items-center bg-primary p-10'>
          <img src='https://cdn.makitatools.com/apps/wms/home//images/help/warranty.png' alt='' />
          <h3 className='text-lg font-bold underline italic mt-3'>Warranty</h3>
          <p>Questions about the warranty of your product? Learn more on our Warranty page.</p>
        </div>
        <div className='border rounded flex flex-col items-center bg-primary p-10'>
          <img src='https://cdn.makitatools.com/apps/wms/home//images/help/service.png' alt='' />
          <h3 className='text-lg font-bold underline italic mt-3'>Service</h3>
          <p>Have a tool that needs to be serviced? We’ll help you get back to work.</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerHelp;
