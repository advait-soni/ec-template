import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Title from "../components/Title"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import { useState } from "react"

function Home() {
  const [enhanceNav, setEnhanceNav] = useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center ">
      <Navbar enhanceNav={enhanceNav} />
      <Title name="The Everything Store" setEnhanceNav={setEnhanceNav} />
      <Products />
      <Banner />
      <Footer />
    </div>
  )
}

export default Home
