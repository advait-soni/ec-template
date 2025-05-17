function Title({ name }) {
  return (
    <div
      style={{
        backgroundColor: "#",
      }}
      className="pt-30 pb-30 w-full h-full flex justify-center "
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
