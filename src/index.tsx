import React from 'react';
import ReactDOM from 'react-dom';

import { globals } from './styles/global';

const App = () => {
  return (
    <>
      <nav>This is big boy nav</nav>
      <main className={globals}>this is main</main>
      <footer>this is footer</footer>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
