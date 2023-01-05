import {CellValueEnum} from "../enum/cellValueEnum";

class GameBoard {
  constructor (height, width) {
    this.height = height
    this.width = width
    this.board = new Array(this.height)
      .fill(new Array(this.width).fill(0))
  }

  placeDice (color, columnNumber) {
    for (let i = 0; i < this.height; i++) {
      if (this.board[columnNumber][i] === 0) {
        this.board[columnNumber][i] = color
        break
      }
    }
  }

  isPlayable (columnNumber) {
    for (let i = 0; i < this.height; i++) {
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
  constructor (boardHeight, boardWidth) {
    this.board = new GameBoard(boardHeight, boardWidth)
    this.players = [new Player(CellValueEnum.RED), new Player(CellValueEnum.BLUE)]
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
