import { useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "./components/Square";
import { TURNS } from "./constants";
import { checkWinnerFrom } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";

function App() {
  // const BOARD_INITIAL = ["x", "x", "x", "O", "O", "O", "x", "O", "x"];
  const BOARD_INITIAL = Array(9).fill(null);
  const [board, setBoard] = useState(BOARD_INITIAL);
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null); // null: not exist winner, and false: empate

  const resetGame = () => {
    setBoard(BOARD_INITIAL);
    setTurn(TURNS.X);
    setWinner(null);
  };

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null);
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    // change turn
    setTurn((prev) => (prev === TURNS.X ? TURNS.O : TURNS.X));
    // review winner
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      // confetti with any library
      confetti();
      setWinner(newWinner); //update winner and is asynchronous
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

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
      <WinnerModal />
    </main>
  );
}

export default App;
