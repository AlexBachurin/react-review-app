import React from 'react';
import './App.css';
import Review from './Review'
function App() {
  return (
    <section className="container">

      <div className="title">
        <h2>our reviews</h2>
        <div className="underline"></div>
      </div>
      <Review></Review>
    </section>
  );
}

export default App;
