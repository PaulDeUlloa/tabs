import Tabs from './components/Tabs';
import './App.css';
import React, { useState } from 'react';

function App() {

  const selections = [
    { tab: "Tab 1", content: "Here is Tab 1 content" },
    { tab: "Tab 2", content: "Here is Tab 2 content" },
    { tab: "Tab 3", content: "Here is Tab 3 content" }
  ]
  return (
    <div className="App">
      <Tabs itemArr={selections} />
    </div>
  );
}

export default App;
