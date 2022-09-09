import React from 'react';
import PropTypes from 'prop-types';

import Footer from './footer';
import NavBar from './navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-full">
      <NavBar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
