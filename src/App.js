import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function plusCount() {
    setCount(count + 1);
  }

  function minusCount() {
    if(count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <section className="couner-container">
          <h1 className="title">{count}</h1>
          <div className="button-block">
            <button
              className="button"
              onClick={plusCount}>
                +
            </button>
            <button
              className="button"
              onClick={minusCount}
            >
              -
            </button>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
