class CellGenerator {
  constructor(size) {
    this.size = size
    this.cells = this.generateCells()
  }

  generateCells() {
    return this.coordinates().map((coordinate) => ({
      position: coordinate,
      tile: ((coordinate.y !== 0 || coordinate.x !== 0) ? coordinate : null)
    }))
  }

  coordinates() {
    return [...Array(this.size)].map((_e, x) => {
      return [...Array(this.size)].map((_e, y) => ({ x: x, y: y }))
    }).flat()
  }
}

export default CellGenerator
