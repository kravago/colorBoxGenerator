import React from 'react';
import './App.css';
import BoxList from './BoxList';
import NewBoxForm from './NewBoxForm';

function App() {
  return (
    <div className="App">
      <NewBoxForm />
      <BoxList />
    </div>
  );
}

export default App;
