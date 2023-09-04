import Tabs from './components/Tabs';
import './App.css';
import React, { useState } from 'react';

function App() {

  const selections = [
    { tab: "Tab 1", content: "Hi!!! Welcome to Tab 1 content" },
    { tab: "Tab 2", content: "WOW, you made it to the Tab 2 content. Congratulations!" },
    { tab: "Tab 3", content: "Boo! Feast your eyes on the Tab 3 content" }
  ]
  return (
    <div className="App">
      <Tabs selectionsArr={selections} />
    </div>
  );
}

export default App;
