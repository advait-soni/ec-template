import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Title from "../components/Title"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center ">
      <Navbar />
      <Title name="The Everything Store" />
      <Products />
      <Banner />
      <Footer/>
    </div>
  )
}

export default Home
