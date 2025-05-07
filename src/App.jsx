import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"

function App() {
  let ref = useRef(0)

  function handleClick() {
    setValue(value + 1)
  }
  const [value, setValue] = useState(0)
  const [num, setNum] = useState(0)

  useEffect(() => {
    setNum(num + 1)
  }, [value])

  return (
    <>
      <p onClick={handleClick}> {num}</p>
    </>
  )
}

export default App
