import React from 'react';

const PortfolioSkills = () => {
  return (
    <div className='hero min-h-[60vh]'>
      <div className='hero-content flex-col lg:flex-row justify-between w-full'>
        <div className='avatar'>
          <div className='w-[35rem] mask mask-squircle'>
            <img
              src='https://i.ibb.co/z5f7X7m/people-enjoy-online-learning-courses-to-add-new-skills-illustration-suitable-for-landing-page-ui-web.jpg'
              alt=''
            />
          </div>
        </div>
        <div className='mr-16'>
          <h1 className='text-5xl font-bold mb-8 italic'>Skills That I Have</h1>
          <div className='flex items-center mb-5'>
            <p className='md:ml-0 lg:ml-[-10rem] sm:ml-0 font-bold'>React: </p>
            <input
              type='range'
              min='0'
              max='100'
              value='80'
              className='range range-sm bg-error range-primary w-full ml-5 mr-5'
            />
            <p>80%</p>
          </div>
          <div className='flex items-center mb-5'>
            <p className='md:ml-0 lg:ml-[-10rem] sm:ml-0 font-bold'>JavaScript: </p>
            <input
              type='range'
              min='0'
              max='100'
              value='85'
              className='range range-sm bg-error range-primary w-full ml-5 mr-5'
            />
            <p>85%</p>
          </div>
          <div className='flex items-center mb-5'>
            <p className='md:ml-0 lg:ml-[-10rem] sm:ml-0 font-bold'>Node Js: </p>
            <input
              type='range'
              min='0'
              max='100'
              value='50'
              className='range range-sm bg-error range-primary w-full ml-5 mr-5'
            />
            <p>50%</p>
          </div>
          <div className='flex items-center mb-5'>
            <p className='md:ml-0 lg:ml-[-10rem] sm:ml-0 font-bold'>MongoDb: </p>
            <input
              type='range'
              min='0'
              max='100'
              value='70'
              className='range range-sm bg-error range-primary w-full ml-5 mr-5'
            />
            <p>70%</p>
          </div>
          <div className='flex items-center mb-5'>
            <p className='md:ml-0 lg:ml-[-10rem] sm:ml-0 font-bold'>Firebase: </p>
            <input
              type='range'
              min='0'
              max='100'
              value='85'
              className='range range-sm bg-error range-primary w-full ml-5 mr-5'
            />
            <p>85%</p>
          </div>
          <div className='flex items-center mb-5'>
            <p className='md:ml-0 lg:ml-[-10rem] sm:ml-0 font-bold'>Tailwind: </p>
            <input
              type='range'
              min='0'
              max='100'
              value='85'
              className='range range-sm bg-error range-primary w-full ml-5 mr-5'
            />
            <p>85%</p>
          </div>
          <div className='flex items-center mb-5'>
            <p className='md:ml-0 lg:ml-[-10rem] sm:ml-0 font-bold'>Bootstrap: </p>
            <input
              type='range'
              min='0'
              max='100'
              value='90'
              className='range range-sm bg-error range-primary w-full ml-5 mr-5'
            />
            <p>90%</p>
          </div>
          <div className='flex items-center mb-5'>
            <p className='md:ml-0 lg:ml-[-10rem] sm:ml-0 font-bold'>CSS: </p>
            <input
              type='range'
              min='0'
              max='100'
              value='80'
              className='range range-sm bg-error range-primary w-full ml-5 mr-5'
            />
            <p>80%</p>
          </div>
          <div className='flex items-center mb-5'>
            <p className='md:ml-0 lg:ml-[-10rem] sm:ml-0 font-bold'>HTML: </p>
            <input
              type='range'
              min='0'
              max='100'
              value='95'
              className='range range-sm bg-error range-primary w-full ml-5 mr-5'
            />
            <p>95%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSkills;
