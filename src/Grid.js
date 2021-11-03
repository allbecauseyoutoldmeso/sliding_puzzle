import { useState } from 'react'
import Cell from './Cell'

const Grid = ({ size, cells, handleClick }) => {
  return(
    <div className='grid'>
      {[...Array(size)].map((_e, i) => {
        return(
           <div className='row'>
            {
              cells.filter((cell) => (cell.position.x === i)).map((cell) => {
                return <Cell data={cell} handleClick={handleClick} size={size}/>
              })
            }
           </div>
        )
      })}
    </div>
  )
}

export default Grid
