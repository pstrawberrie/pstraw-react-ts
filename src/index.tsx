import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import globalStyles from './styles/global';

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
