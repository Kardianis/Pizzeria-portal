import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import PageNav from '../PageNav/Page.Nav';

const MainLayout = ({children}) => (
  <div>
    <Header />
    <main>
      {props.children}
      <PageNav />
    </main>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};


export default MainLayout;
