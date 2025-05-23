import { useRef, useEffect, createContext } from "react"

function Title({ name , setEnhanceNav}) {
  const divRef = useRef(null)
  const disContext = createContext(100)
  useEffect(() => {
    const handleScroll = () => {
      const distanceFromTop = divRef.current.getBoundingClientRect().top
      console.log("distanceFromTop", distanceFromTop)
      if (distanceFromTop <= 28.5) {
        setEnhanceNav(true)
      }
      else{
        setEnhanceNav(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      style={{
        backgroundColor: "#",
      }}
      className="pt-20 pb-20  flex justify-center border-t"
      ref={divRef}
    >
      <h1
        style={{
          fontFamily: "Stick",
          fontSize: "50px",
        }}
        className="text-lg text-purple-900"
      >
        {name}
      </h1>
    </div>
  )
}

export default Title
