function Card({ height, width, text, subText, content, price }) {
  return (
    <div>
      <div>
        <div>
          <img src={content} alt="" className="w-50 h-60 object-cover border rounded-lg" />
          <p className="flex justify-center ">{price}$</p>
        </div>
        
      </div>
    </div>
  )
}

export default Card
