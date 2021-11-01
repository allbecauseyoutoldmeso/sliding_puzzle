import { useState } from 'react'

const App = () => {
  const [happy, setHappy] = useState(false);

  const toggleHappy = () => {
    setHappy(!happy)
  }

  return(
    <>
      <button onClick={toggleHappy}>I am happy</button>
      <div>{happy ? 'yay' : 'boo'}</div>
    </>
  )
}

export default App;
