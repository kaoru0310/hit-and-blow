import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const startGame = async () => {
    setLoading(true);
    try {
      const response = await fetch("/start-game", {
        method: "POST",
      });
      const data = await response.json();
      console.log(data); // Use the data to initialize the game
      setLoading(false);
    } catch (error) {
      console.error("Error starting game:", error);
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hit and Blow Game
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Click the button below to start the game.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={startGame}
        disabled={loading}
      >
        {loading ? "Loading..." : "Start Game"}
      </motion.button>
    </div>
  );
}
