new Vue({
  el: "#app",
  data: {
    board: Array(9).fill(""),
    currentPlayer: "X",
    message: "Player X's turn",
  },
  methods: {
    makeMove(index) {
      if (this.board[index] == "" && !this.checkWinner()) {
        this.board[index] = this.currentPlayer;
        if (this.checkWinner()) {
          this.message = `Player ${this.currentPlayer} wins!`;
        } else if (this.board.every((cell) => cell != "")) {
          this.message = "It's a tie!";
        } else {
          this.currentPlayer = this.currentPlayer == "X" ? "O" : "X";
          this.message = `Player ${this.currentPlayer}'s turn`;
        }
      }
    },
    checkWinner() {
      const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      return winningCombos.some((combo) => {
        const [a, b, c] = combo;
        return (
          this.board[a] &&
          this.board[a] == this.board[b] &&
          this.board[a] == this.board[c]
        );
      });
    },
    resetGame() {
      this.board = Array(9).fill("");
      this.currentPlayer = "X";
      this.message = "Player X's turn";
    },
  },
});
