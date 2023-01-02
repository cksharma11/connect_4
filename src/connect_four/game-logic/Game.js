class GameBoard {
  constructor () {
    this.board = new Array(6)
      .fill(new Array(7).fill(0))
  }

  placeDice (color, columnNumber) {
    for (let i = 0; i < 6; i++) {
      if (this.board[columnNumber][i] === 0) {
        this.board[columnNumber][i] = color
      }
    }
  }

  isPlayable (columnNumber) {
    for (let i = 0; i < 6; i++) {
      if (this.board[columnNumber][i] === 0) {
        return true
      }
    }
    return false
  }
}

class Player {
  constructor (color) {
    this.color = color
  }
}

class Game {
  constructor () {
    this.board = new GameBoard()
    this.players = [new Player('RED'), new Player('BLUE')]
    this.currentPlayer = this.players[0]
  }

  play (columnNumber) {
    this.board.placeDice(this.currentPlayer.color, columnNumber)
    this.hasWon()
  }

  isPlayable (columnNumber) {
    this.board.isPlayable(columnNumber)
  }

  hasWon () {

  }
}
