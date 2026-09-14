import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Add</button>
    </>
  )
}

export default Counter