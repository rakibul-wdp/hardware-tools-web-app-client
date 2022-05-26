import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import CustomerHelp from './CustomerHelp';
import Tools from './Tools';
import UserReview from './UserReview';

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Tools />
      <CustomerHelp />
      <UserReview />
    </div>
  );
};

export default Home;
