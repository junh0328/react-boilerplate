import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import HomeChanged from './pages/HomeChanged';

function App() {
  return (
    //Link를 쓰는 Navigation 컴포넌트는 Router 안에 포함시켜줘야 한다!
    <HashRouter>
      <Route path="/" exact={true} component={HomeChanged} />
    </HashRouter>
  );
}

export default App;
