import React from 'react';
import Header from './components/common/Header/Header';
import Main from './components/pages/Home';
import './styles/App.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
    </div>
  );
}

export default App;
