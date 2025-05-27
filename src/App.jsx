import React from 'react';
import Mainrouter from './router/Mainrouter';
import Navbar from './component/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Mainrouter />
    </div>
  );
};

export default App;
