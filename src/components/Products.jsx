import Card from "./Card"

function Products() {
  return (
    <div className="flex space-x-40 mt-20">
        <Card content="https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <Card/>
        <Card/>
    </div>
  )
}

export default Products
