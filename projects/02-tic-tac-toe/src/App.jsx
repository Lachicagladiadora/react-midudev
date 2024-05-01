import { useState } from "react";
import "./App.css";

const TURNS = {
  X: "x",
  O: "o",
};

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard();
  };

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
};

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  // const BOARD_INITIAL = ["x", "x", "x", "O", "O", "O", "x", "O", "x"];
  const BOARD_INITIAL = Array(9).fill(null);
  const [board, setBoard] = useState(BOARD_INITIAL);
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null); // null: not exist winner, and false: empate

  const checkWinner = (boardToCheck) => {
    // revisamos todas las combinaciones ganadoras
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    //  si no hay ganador
    return null;
  };

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
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      // confetti with any library
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
      {winner !== null && (
        <section className="winner">
          <div className="text">
            <h2>{winner === false ? "empate" : `winner: `}</h2>
            <header className="win">
              {winner && <Square>{winner}</Square>}
            </header>
            <footer>
              <button onClick={resetGame}>Start again</button>
            </footer>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
