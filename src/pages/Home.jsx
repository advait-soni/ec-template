import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Title from "../components/Title"

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center ">
      <Navbar />
      <Title name="The Everything Store" />
      <Products />
    </div>
  )
}

export default Home
