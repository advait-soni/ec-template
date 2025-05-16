import Card from "./Card"

function Products() {
  return (
    <div className="flex space-x-15 mt-39">
      <Card
        content="https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        price="20"
      />
      <Card
        content="https://media-assets.grailed.com/prd/listing/24252698/5f827ec5e11f48e1bcf685123a9092d1?w=1500"
        price="99"
      />
      <Card
        content="https://i.pinimg.com/736x/07/58/59/075859e413a2d7eb4ffe1c9439b14b1c.jpg"
        price="1200"
      />
    </div>
  )
}

export default Products
