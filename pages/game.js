import React, { useState } from 'react';
import axios from 'axios';

export default function Game() {
  const [computerNumbers, setComputerNumbers] = useState([]);
  const [gameId, setGameId] = useState('');
  const [timestamp, setTimestamp] = useState('');

  const startGame = async () => {
    try {
      const response = await axios.post('http://localhost:8000/start-game');
      const { computer_numbers, game_id, timestamp } = response.data;
      setComputerNumbers(computer_numbers);
      setGameId(game_id);
      setTimestamp(timestamp);
    } catch (error) {
      console.error('Error starting game:', error);
    }
  };

  return (
    <div>
      <h1>Hit and Blow Game</h1>
      <button onClick={startGame}>Start Game</button>
      {computerNumbers.length > 0 && (
        <div>
          <h2>Game ID: {gameId}</h2>
          <h2>Timestamp: {timestamp}</h2>
          <h2>Computer's Numbers:</h2>
          <ul>
            {computerNumbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
