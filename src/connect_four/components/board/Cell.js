import * as PropTypes from 'prop-types'
import { CellValueEnum } from '../../enum/cellValueEnum'

function Cell ({ value, id }) {
  const diceClasses = {
    EMPTY: 'white',
    RED: 'red',
    BLUE: 'blue'
  }

  return (
    <div className="cell" id={id}>
      <div className={`dice ${Math.floor(Math.random() * 10) % 2 === 0 ? 'red' : 'blue'} `}/>
    </div>
  )
}

Cell.propTypes = {
  value: PropTypes.string,
  id: PropTypes.number,
}

Cell.defaultProps = {
  value: CellValueEnum.EMPTY,
}

export default Cell
