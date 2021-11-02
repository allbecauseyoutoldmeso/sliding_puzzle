import { React, useState } from 'react'
import Cell from './Cell'
import CellGenerator from './CellGenerator'
import TileUpdater from './TileUpdater'

const Grid = ({ size }) => {
  const [cells, setCells] = useState(new CellGenerator(size).cells)

  const updateCells = (clickedCell) => {
    const tileUpdater = new TileUpdater(cells, clickedCell)
    tileUpdater.updateCells()
    setCells([...tileUpdater.cells ])
  }

  return(
    <div className='grid'>
      {[...Array(size)].map((_e, i) => {
        return(
           <div className='row'>
            {
              cells.filter((cell) => (cell.position.x === i)).map((cell) => {
                return <Cell data={cell} handleClick={updateCells}/>
              })
            }
           </div>
        )
      })}
    </div>
  )
}

export default Grid
