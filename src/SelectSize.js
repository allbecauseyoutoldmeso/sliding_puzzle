const SelectSize = ({ size, handleChange }) => {
  return(
    <>
      <label for='size'>Grid Size</label>
      <select name='size' onChange={handleChange} defaultValue={size}>
        {[...Array(20).keys()].map((i) => {
          return(<option value={i}>{i}</option>)
        })}
      </select>
    </>
  )
}

export default SelectSize
