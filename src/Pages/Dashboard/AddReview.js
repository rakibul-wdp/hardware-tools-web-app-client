import React from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {
  const addReview = (e) => {
    e.preventDefault();
    const review = {
      rating: e.target.rating.value,
      review: e.target.review.value,
    };
    fetch('http://localhost:5000/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        toast('Review added successfully');
      });
    e.target.reset();
  };
  return (
    <div className='w-100'>
      <h2>Add a Review</h2>
      <form onSubmit={addReview}>
        <label className='label'>
          <span className='label-text'>Rating</span>
        </label>
        <input type='text' name='rating' placeholder='Type here' className='input input-bordered w-full max-w-2xl ' />
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Review</span>
          </label>
          <textarea
            name='review'
            className='textarea textarea-bordered h-56 w-full max-w-2xl'
            placeholder='Bio'
          ></textarea>
        </div>
        <input
          type='submit'
          value={'Add Review'}
          className='btn w-full max-w-xl mt-5 text-center btn-primary cursor-pointer'
        />
      </form>
    </div>
  );
};

export default AddReview;
