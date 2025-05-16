import Navbar from "../components/Navbar"
import Products from "../components/Products"

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />
      <Products />
    </div>
  )
}

export default Home
