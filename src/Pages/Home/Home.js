import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
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
      <BusinessSummary />
    </div>
  );
};

export default Home;
