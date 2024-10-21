import { useEffect, useState } from "react";
import styles from "./game.module.css";

export default function Game({ gameData }) {
  const [computerNumbers, setComputerNumbers] = useState([]);
  const [gameId, setGameId] = useState("");
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    if (gameData) {
      setComputerNumbers(gameData.computer_numbers);
      setGameId(gameData.game_id);
      setTimestamp(gameData.timestamp);
    }
  }, [gameData]);

  return (
    <div className={styles.game}>
      <h1>Game Started</h1>
      <p>Game ID: {gameId}</p>
      <p>Timestamp: {timestamp}</p>
      <p>Computer Numbers: {computerNumbers.join(", ")}</p>
    </div>
  );
}
