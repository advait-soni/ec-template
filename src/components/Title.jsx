function Title({ name }) {
  return (
    <div className="pt-30 pb-30 w-full h-full flex justify-center bg-pink-50 ">
      <h1
        style={{
          fontFamily: "Stick",
          fontSize: "50px",
        }}
        className="text-lg"
      >
        {name}
      </h1>
    </div>
  )
}

export default Title
