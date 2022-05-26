import React from 'react';

const Categories = () => {
  return (
    <div className='my-16 pb-10'>
      <h2 className='text-3xl font-bold italic pt-5 mb-5 pl-5'>POPULAR PRODUCTS CATEGORIES</h2>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        <div className='card max-w-lg bg-primary shadow-xl'>
          <figure className='px-10 pt-10'>
            <img
              src='https://cdn.makitatools.com/apps/wms/Home/images/popular/combo.png'
              alt='Shoes'
              className='rounded-xl'
            />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title italic underline'>Combo Kits</h2>
          </div>
        </div>
        <div className='card max-w-lg bg-primary shadow-xl'>
          <figure className='px-10 pt-10'>
            <img
              src='https://cdn.makitatools.com/apps/wms/Home/images/popular/drill.png'
              alt='Shoes'
              className='rounded-xl'
            />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title italic underline'>Drills & Fastening</h2>
          </div>
        </div>
        <div className='card max-w-lg bg-primary shadow-xl'>
          <figure className='px-10 pt-10'>
            <img
              src='https://cdn.makitatools.com/apps/wms/Home/images/popular/concrete.png'
              alt='Shoes'
              className='rounded-xl'
            />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title italic underline'>Concrete & Masonry</h2>
          </div>
        </div>
        <div className='card max-w-lg bg-primary shadow-xl'>
          <figure className='px-10 pt-10'>
            <img
              src='https://cdn.makitatools.com/apps/wms/Home/images/popular/ope.png'
              alt='Shoes'
              className='rounded-xl'
            />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title italic underline'>Outdoor Power Equipment</h2>
          </div>
        </div>
        <div className='card max-w-lg bg-primary shadow-xl'>
          <figure className='px-10 pt-10'>
            <img
              src='https://cdn.makitatools.com/apps/wms/Home/images/popular/mowers.png'
              alt='Shoes'
              className='rounded-xl'
            />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title italic underline'>Lawn Mowers</h2>
          </div>
        </div>
        <div className='card max-w-lg bg-primary shadow-xl'>
          <figure className='px-10 pt-10'>
            <img
              src='https://cdn.makitatools.com/apps/wms/Home/images/popular/accessories.png'
              alt='Shoes'
              className='rounded-xl'
            />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title italic underline'>Accessories</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
