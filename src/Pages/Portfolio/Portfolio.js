import React from 'react';
import PortfolioBanner from './PortfolioBanner';
import PortfolioContact from './PortfolioContact';
import PortfolioProject from './PortfolioProject';
import PortfolioSkills from './PortfolioSkills';

const Portfolio = () => {
  return (
    <div>
      <PortfolioBanner />
      <PortfolioSkills />
      <PortfolioProject />
      <PortfolioContact />
    </div>
  );
};

export default Portfolio;
