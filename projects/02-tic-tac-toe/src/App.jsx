import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

import { Square } from "./components/Square";
import { TURNS } from "./constants";
import { checkEndGame, checkWinnerFrom } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { resetGameToStorage, saveGameToStorage } from "./logic/storage";

function App() {
  // const BOARD_INITIAL = ["x", "x", "x", "O", "O", "O", "x", "O", "x"];
  const BOARD_INITIAL = Array(9).fill(null);

  const [board, setBoard] = useState(() => {
    const BOARD_FROM_STORAGE = window.localStorage.getItem("GAME");
    return BOARD_FROM_STORAGE ? JSON.parse(BOARD_FROM_STORAGE) : BOARD_INITIAL;
  });
  const [turn, setTurn] = useState(() => {
    const TURN_FROM_STORAGE = window.localStorage.getItem("TURN");
    return TURN_FROM_STORAGE ? JSON.parse(TURN_FROM_STORAGE) : TURNS.X;
  });
  const [winner, setWinner] = useState(null); // null: not exist winner, and false: empate

  const resetGame = () => {
    setBoard(BOARD_INITIAL);
    setTurn(TURNS.X);
    setWinner(null);

    resetGameToStorage();
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    // change turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // save game
    saveGameToStorage({ newBoard: newBoard, turn: newTurn });
    // review winner
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      // confetti with any library
      confetti();
      setWinner(newWinner); //update winner
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  useEffect(() => {
    const newBoard = [...board];
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;

    saveGameToStorage({ newBoard: newBoard, turn: newTurn });
  }, [turn, board]);

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset game</button>
      <section className="game">
        {board.map((cur, idx) => {
          return (
            <Square key={idx} index={idx} updateBoard={() => updateBoard(idx)}>
              {cur}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}> {TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}> {TURNS.O}</Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}

export default App;
