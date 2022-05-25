import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const UserReview = () => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery('review', () =>
    fetch('http://localhost:5000/review', {
      method: 'GET',
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2>Review Here {reviews.length}</h2>
    </div>
  );
};

export default UserReview;
