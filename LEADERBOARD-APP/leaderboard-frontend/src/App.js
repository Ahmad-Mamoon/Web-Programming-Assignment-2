// src/App.js
import React from 'react';
import Leaderboard from './components/leaderboard'; // Import the Leaderboard component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Leaderboard App</h1>
      </header>
      <main>
        <Leaderboard /> {/* Render the Leaderboard component */}
      </main>
    </div>
  );
}

export default App;
