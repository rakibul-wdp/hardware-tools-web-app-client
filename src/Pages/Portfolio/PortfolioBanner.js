import React from 'react';

const PortfolioBanner = () => {
  return (
    <div className='hero min-h-[60vh] mt-10'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='avatar'>
          <div className='w-[35rem] mask mask-hexagon'>
            <img src='https://i.ibb.co/5K062wH/IMG-20210522-185106.jpg' alt='' />
          </div>
        </div>
        <div>
          <h1 className='text-5xl font-bold italic'>Full Stack Web Developer</h1>
          <p className='py-6'>
            Hi...! My name is Md. Rakibul Islam. I'm a full stack web developer and problem solver(by JavaScript). I'm
            expert with React.js and Google search. I can develop full stack web application by React.js with better
            performance.
          </p>
          <button className='btn btn-primary'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBanner;
