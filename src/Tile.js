import Background from './kitten.jpeg'

const Tile = ({ x, y, size }) => {
  const style = () => {
    const offsetPercentage = 100 / (size - 1)

    return {
      backgroundImage: `url(${Background})`,
      backgroundPosition: `${y * offsetPercentage}% ${100 - (x * offsetPercentage)}%`,
      backgroundSize: `${size * 50}px ${size * 50}px`
    }
  }

  return(
    <div style={style()} className='tile'>
    </div>
  )
}

export default Tile
