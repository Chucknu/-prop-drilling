// src/App.js
import React from 'react';
import './App.css';
import { AppProvider } from './AppContext';
import ParentView from './ParentView';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <ParentView />
      </AppProvider>
    </div>
  );
}

export default App;
