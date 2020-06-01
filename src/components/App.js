import React from 'react';
import { connect } from 'react-redux';

import PostList from './PostList';

export const App = () => {
  return (
    <div className='ui container'>
      <PostList />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
