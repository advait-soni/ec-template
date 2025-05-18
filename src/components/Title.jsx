function Title({ name }) {
  return (
    <div
      style={{
        backgroundColor: "#",
      }}
      className="pt-20 pb-20  flex justify-center border-t"
    >
      <h1
        style={{
          fontFamily: "Stick",
          fontSize: "50px",
        }}
        className="text-lg text-purple-900"
      >
        {name}
      </h1>
    </div>
  )
}

export default Title
