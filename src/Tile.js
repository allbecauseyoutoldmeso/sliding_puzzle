import { React } from 'react'

const Tile = ({ x, y }) => {
  return(
    <div className='tile'>
      {`${x}, ${y}`}
    </div>
  )
}

export default Tile
