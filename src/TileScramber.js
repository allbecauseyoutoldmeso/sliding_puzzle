class TileScrambler {
  constructor(cells) {
    this.cells = cells
  }

  scrambleTiles() {
    [...Array(this.cells.length * 10)].forEach(() => {
      this.moveTile()
    })
  }

  moveTile() {
    const emptyCell = this.emptyCell()
    const targetCell = this.targetCell(emptyCell)
    emptyCell.tile = targetCell.tile
    targetCell.tile = null
  }

  emptyCell() {
    return this.cells.find((cell) => !cell.tile)
  }

  targetCell(emptyCell) {
    const neighbours = this.neighbours(emptyCell)
    return neighbours[Math.floor(Math.random() * neighbours.length)]
  }

  neighbours(emptyCell) {
    return this.cells.filter((cell) => {
      const a = emptyCell.position
      const b = cell.position

      return (a.x === b.x && [b.y + 1, b.y - 1].includes(a.y)) ||
        (a.y === b.y && [b.x + 1, b.x - 1].includes(a.x))
    })
  }
}

export default TileScrambler
