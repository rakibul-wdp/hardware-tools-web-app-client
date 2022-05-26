import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserReviewRow from './UserReviewRow';

const UserReview = () => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery('review', () =>
    fetch('https://limitless-ocean-18440.herokuapp.com/review', {
      method: 'GET',
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className='mb-16'>
      <h2 className='text-3xl font-bold italic pl-5 mb-5'>Customer Review</h2>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
        {reviews.slice(0, 4).map((review) => (
          <UserReviewRow review={review} key={review._id} />
        ))}
      </div>
    </div>
  );
};

export default UserReview;
