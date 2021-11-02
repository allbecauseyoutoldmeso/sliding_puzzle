class TileMover {
  constructor(cells, clickedCell) {
    this.cells = cells
    this.clickedCell = clickedCell
  }

  moveTile() {
    const emptyNeighbour = this.emptyNeighbour()

    if (!!emptyNeighbour) {
      emptyNeighbour.tile = this.clickedCell.tile
      this.clickedCell.tile = null
    }
  }

  emptyNeighbour() {
    return this.neighbours().find((cell) => !cell.tile)
  }

  neighbours() {
    return this.cells.filter((cell) => {
      const a = this.clickedCell.position
      const b = cell.position

      return (a.x === b.x && [b.y + 1, b.y - 1].includes(a.y)) ||
        (a.y === b.y && [b.x + 1, b.x - 1].includes(a.x))
    })
  }
}

export default TileMover
