import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Global Styles just need to be referenced
import globalStyles from './styles/global'; //eslint-disable-line

import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Nav />
      <Content />
      <Footer />
      <div className={globalStyles} />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
