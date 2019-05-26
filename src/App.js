import React from 'react';
import './App.css';

import { Provider } from 'react-redux'; //wrap everything with this provder
import store from './store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Yazan</h1>
      </header>
    </div>
  );
}

export default App;
