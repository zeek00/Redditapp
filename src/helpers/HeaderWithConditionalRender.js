import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header'; // Replace with the actual path to your Header component
import PostsRoutes from '../app/routes'; // Replace with the actual path to your PostsRoutes file (if applicable)

const HeaderWithConditionalRender = () => {
  const location = useLocation();

  // Check if the current location is the homepage route
  const isHomepage = location.pathname === `/${PostsRoutes.homePageRoute()}`;
  console.log(isHomepage)
  // Conditionally render the Header component based on the route
  return isHomepage ? null : <Header />;
};

export default HeaderWithConditionalRender;