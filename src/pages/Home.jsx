import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Title from "../components/Title"
import Banner from "../components/Banner"
function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center ">
      <Navbar />
      <Title name="The Everything Store" />
      <Products />
      <Banner/>
    </div>
  )
}

export default Home
