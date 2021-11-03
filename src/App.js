import { useState } from 'react'
import Grid from './Grid'
import SelectSize from './SelectSize'
import CellGenerator from './CellGenerator'

const App = () => {
  const [size, setSize] = useState(5)
  const [cells, setCells] = useState(new CellGenerator(size).cells)

  const updateSize = (event) => {
    const value = parseInt(event.target.value)
    setSize(value)
    const cellGenerator = new CellGenerator(value)
    setCells([...cellGenerator.cells ])
  }

  return(
    <>
      <Grid size={size} cells={cells} setCells={setCells} />
      <SelectSize size={size} handleChange={updateSize} />
    </>
  )
}

export default App
