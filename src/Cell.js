import { React } from 'react'
import Tile from './Tile'

const Cell = ({ data, handleClick }) => {
  return(
    <div className='cell' onClick={() => handleClick(data)}>
      {!!data.tile && <Tile {...data.tile} />}
    </div>
  )
}

export default Cell
