import { React } from 'react'
import Background from './kitten.jpeg'

const Tile = ({ x, y }) => {
  const style = () => (
    {
      backgroundImage: `url(${Background})`,
      backgroundPosition: `${y * 25}% ${((4 - x) * 25)}%`,
      backgroundSize: '250px 250px'
    }
  )

  return(
    <div style={style()} className='tile'>
    </div>
  )
}

export default Tile
