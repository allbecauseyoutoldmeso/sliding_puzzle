import Cell from './Cell'
import TileMover from './TileMover'
import TileScramber from './TileScramber'

const Grid = ({ size, cells, setCells }) => {


  const moveTile = (clickedCell) => {
    const tileMover = new TileMover(cells, clickedCell)
    tileMover.moveTile()
    setCells([...tileMover.cells ])
  }

  const scrambleTiles = () => {
    const tileScrambler = new TileScramber(cells)
    tileScrambler.scrambleTiles()
    setCells([...tileScrambler.cells ])
  }

  return(
    <>
      <div className='grid'>
        {[...Array(size)].map((_e, i) => {
          return(
             <div className='row'>
              {
                cells.filter((cell) => (cell.position.x === i)).map((cell) => {
                  return <Cell data={cell} handleClick={moveTile} size={size}/>
                })
              }
             </div>
          )
        })}
      </div>
      <button onClick={scrambleTiles}>Scramble Tiles</button>
    </>
  )
}

export default Grid