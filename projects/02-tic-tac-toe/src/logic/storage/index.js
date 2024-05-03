export const saveGameToStorage = ({ newBoard, turn }) => {
  window.localStorage.setItem("GAME", JSON.stringify(newBoard));
  window.localStorage.setItem("TURN", JSON.stringify(turn));
};

export const resetGameToStorage = () => {
  window.localStorage.removeItem("GAME");
  window.localStorage.removeItem("TURN");
};
