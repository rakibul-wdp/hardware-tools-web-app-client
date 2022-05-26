import React from 'react';

const PortfolioProject = () => {
  return (
    <div>
      <h2 className='text-5xl font-bold text-center mb-10 italic'>Here Is My Best Four Project</h2>
      <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mb-16'>
        <div>
          <h2 className='font-bold ml-5 text-lg mb-2'>
            Live Website:{' '}
            <a className='text-primary italic' href='https://capture-wild-nature.web.app/' target='_blank'>
              Capture Wild Nature
            </a>
          </h2>
          <div className='carousel carousel-center max-w-lg p-4 space-x-4 bg-neutral rounded-box'>
            <div className='carousel-item'>
              <img src='https://i.ibb.co/NgqgYnG/Capture-1.png' className='rounded-box w-56' alt='' />
            </div>
            <div className='carousel-item'>
              <img src='https://i.ibb.co/ys7y8mp/Capture-2.png' className='rounded-box w-56' alt='' />
            </div>
            <div className='carousel-item'>
              <img src='https://i.ibb.co/6wHtMzw/Capture-3.png' className='rounded-box w-56' alt='' />
            </div>
          </div>
        </div>
        <div>
          <h2 className='font-bold ml-5 text-lg mb-2'>
            Live Website:{' '}
            <a className='text-primary italic' href='https://bicycle-warehouse-a579e.web.app/' target='_blank'>
              Warehouse Management
            </a>
          </h2>
          <div className='carousel carousel-center max-w-lg p-4 space-x-4 bg-neutral rounded-box'>
            <div className='carousel-item'>
              <img src='https://i.ibb.co/t45D3Hq/warehouse-1.png' className='rounded-box w-56' alt='' />
            </div>
            <div className='carousel-item'>
              <img src='https://i.ibb.co/yFxnZnS/warehouse-2.png' className='rounded-box w-56' alt='' />
            </div>
            <div className='carousel-item'>
              <img src='https://i.ibb.co/51yNrst/warehouse-3.png' className='rounded-box w-56' alt='' />
            </div>
          </div>
        </div>
        <div>
          <h2 className='font-bold ml-5 text-lg mb-2'>
            Live Website:{' '}
            <a
              className='text-primary italic'
              href='https://typing-zone-for-assignment-9-by-md-rakibul-islam.netlify.app/'
              target='_blank'
            >
              Typing Zone
            </a>
          </h2>
          <div className='carousel carousel-center max-w-lg p-4 space-x-4 bg-neutral rounded-box'>
            <div className='carousel-item'>
              <img src='https://i.ibb.co/wYRwjk8/typing-1.png' className='rounded-box w-56' alt='' />
            </div>
            <div className='carousel-item'>
              <img src='https://i.ibb.co/g47H4mw/typing-2.png' className='rounded-box w-56' alt='' />
            </div>
            <div className='carousel-item'>
              <img src='https://i.ibb.co/ygmZSw7/typing-3.png' className='rounded-box w-56' alt='' />
            </div>
          </div>
        </div>
        <div>
          <h2 className='font-bold ml-5 text-lg mb-2'>
            Live Website:{' '}
            <a
              className='text-primary italic'
              href='https://pigeon-fair-for-assignment-8-by-md-rakibul-islam.netlify.app/'
              target='_blank'
            >
              Pigeon Fair
            </a>
          </h2>
          <div className='carousel carousel-center max-w-lg p-4 space-x-4 bg-neutral rounded-box'>
            <div className='carousel-item'>
              <img src='https://i.ibb.co/qFzNdfv/pigeon-1.png' className='rounded-box w-56' alt='' />
            </div>
            <div className='carousel-item'>
              <img src='https://i.ibb.co/NZN4M0T/pigeon-2.png' className='rounded-box w-56' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProject;
