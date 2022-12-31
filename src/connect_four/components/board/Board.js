import * as PropTypes from 'prop-types'
import Cell from './Cell'
import { CellValueEnum } from '../../enum/cellValueEnum'

function Board ({ height, width }) {
  return (
    <div className="board">
      {new Array(width).fill(0).map((_, id) => {
        return (
          <div className="row">
            {new Array(height).fill(0).map((_, id2) => {
              return <Cell id={2 * id * id2} value={CellValueEnum.EMPTY}/>
            })}
          </div>
        )
      })}
    </div>
  )
}

Board.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
}

Board.defaultProps = {
  width: 7,
  height: 6
}

export default Board
