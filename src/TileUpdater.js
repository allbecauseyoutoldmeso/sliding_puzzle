class TileUpdater {
  constructor(cells, clickedCell) {
    this.cells = cells
    this.clickedCell = clickedCell
  }

  updateCells() {
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
    return this.cells.filter((cell) => (
      !(this.clickedCell === cell) &&
      [cell.position.x - 1, cell.position.x, cell.position.x + 1].includes(this.clickedCell.position.x) &&
      [cell.position.y - 1, cell.position.y, cell.position.y + 1].includes(this.clickedCell.position.y)
    ))
  }
}

export default TileUpdater
