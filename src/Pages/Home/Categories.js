import React from 'react';

const Categories = () => {
  return (
    <div className='bg-gray-300 mb-16 pb-10'>
      <h2 className='text-3xl font-bold italic pt-5 mb-5 pl-5'>POPULAR PRODUCTS CATEGORIES</h2>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <div className='flex flex-col items-center'>
          <img src='https://cdn.makitatools.com/apps/wms/Home/images/popular/combo.png' alt='' />
          <h3 className='font-bold text-lg italic underline'>Combo Kits</h3>
        </div>
        <div className='flex flex-col items-center'>
          <img src='https://cdn.makitatools.com/apps/wms/Home/images/popular/drill.png' alt='' />
          <h3 className='font-bold text-lg italic underline'>Drills & Fastening</h3>
        </div>
        <div className='flex flex-col items-center'>
          <img src='https://cdn.makitatools.com/apps/wms/Home/images/popular/concrete.png' alt='' />
          <h3 className='font-bold text-lg italic underline'>Concrete & Masonry</h3>
        </div>
        <div className='flex flex-col items-center'>
          <img src='https://cdn.makitatools.com/apps/wms/Home/images/popular/ope.png' alt='' />
          <h3 className='font-bold text-lg italic underline'>Outdoor Power Equipment</h3>
        </div>
        <div className='flex flex-col items-center'>
          <img src='https://cdn.makitatools.com/apps/wms/Home/images/popular/mowers.png' alt='' />
          <h3 className='font-bold text-lg italic underline'>Lawn Mowers</h3>
        </div>
        <div className='flex flex-col items-center'>
          <img src='https://cdn.makitatools.com/apps/wms/Home/images/popular/accessories.png' alt='' />
          <h3 className='font-bold text-lg italic underline'>Accessories</h3>
        </div>
      </div>
    </div>
  );
};

export default Categories;
