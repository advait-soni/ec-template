function Card({ height, width, text, subText, content }) {
  return (
    <div>
      <div>
        <div>
          <img src={content} alt="" className="w-30 h-38"/>
        </div>
        <h2>Shop</h2>
        <p>subText</p>
      </div>
    </div>
  )
}

export default Card
