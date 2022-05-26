import React from 'react';

const UserReviewRow = ({ review }) => {
  return (
    <div className='border rounded p-10'>
      <p className='text-center'>
        {review.rating === '1' ? (
          <div className='rating'>
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' defaultChecked />
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
          </div>
        ) : (
          ''
        )}
      </p>
      <p className='text-center'>
        {review.rating === '2' ? (
          <div className='rating'>
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' defaultChecked />
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
          </div>
        ) : (
          ''
        )}
      </p>
      <p className='text-center'>
        {review.rating === '3' ? (
          <div className='rating'>
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' defaultChecked />
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
          </div>
        ) : (
          ''
        )}
      </p>
      <p className='text-center'>
        {review.rating === '4' ? (
          <div className='rating'>
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' defaultChecked />
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
          </div>
        ) : (
          ''
        )}
      </p>
      <p className='text-center'>
        {review.rating === '5' ? (
          <div className='rating'>
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' defaultChecked />
          </div>
        ) : (
          ''
        )}
      </p>
      <p>{review.review.slice(0, 500)}</p>
    </div>
  );
};

export default UserReviewRow;
