import { useState } from 'react'
import Grid from './Grid'
import SelectSize from './SelectSize'
import Button from './Button'
import CellGenerator from './CellGenerator'
import TileMover from './TileMover'
import TileScramber from './TileScramber'

const App = () => {
  const [size, setSize] = useState(5)
  const [cells, setCells] = useState(new CellGenerator(size).cells)
  const [scrambled, setScrambled] = useState(false)

  const updateSize = (event) => {
    const value = parseInt(event.target.value)
    setSize(value)
    const cellGenerator = new CellGenerator(value)
    setCells([...cellGenerator.cells ])
    setScrambled(false)
  }

  const moveTile = (clickedCell) => {
    const tileMover = new TileMover(cells, clickedCell)
    tileMover.moveTile()
    setCells([...tileMover.cells ])
  }

  const toggleScrambled = () => {
    if (scrambled) {
      unscrambleTiles()
      setScrambled(false)
    } else {
      scrambleTiles()
      setScrambled(true)
    }
  }

  const scrambleTiles = () => {
    const tileScrambler = new TileScramber(cells)
    tileScrambler.scrambleTiles()
    setCells([...tileScrambler.cells ])
    setScrambled(true)
  }

  const unscrambleTiles = () => {
    const cellGenerator = new CellGenerator(size)
    setCells([...cellGenerator.cells ])
    setScrambled(false)
  }

  const buttonLabel = () => scrambled ? 'Unscramble Tiles' : 'Scramble Tiles'

  return(
    <>
      <Grid size={size} cells={cells} handleClick={moveTile} />
      {!scrambled && <SelectSize size={size} handleChange={updateSize} />}
      <Button handleClick={toggleScrambled} label={buttonLabel()} />
    </>
  )
}

export default App
