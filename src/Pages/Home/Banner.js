import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  const navigateToBuy = () => {
    navigate('/buyTools');
  };
  return (
    <div
      className='hero min-h-[60vh]'
      style={{
        backgroundImage: 'url(https://bynder.sbdinc.com/m/43bda639029a263f/Drupal_Medium-DW_ToughSeries_G1.jpg)',
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>Speed Work...!!!</h1>
          <p className='mb-5'>
            If you have super shop of hardware relate tool and gear. Then you need to import product for more sales. We
            provide qualitifull hardware related tools. You can buy now our product.
          </p>
          <button onClick={navigateToBuy} className='btn btn-primary'>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
