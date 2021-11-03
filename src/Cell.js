import Tile from './Tile'

const Cell = ({ data, handleClick, size }) => {
  const style = () => (
    {
      width: '50px',
      height: '50px'
    }
  )

  return(
    <div style={style()} className='cell' onClick={() => handleClick(data)}>
      {!!data.tile && <Tile {...data.tile} size={size} />}
    </div>
  )
}

export default Cell
