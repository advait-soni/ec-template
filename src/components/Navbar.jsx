import NavbarItem from "./NavbarItem"

const items = [
  { item: "Home", onClick: () => console.log("home") },
  { item: "About", onClick: () => console.log("about") },
  { item: "Store", onClick: () => console.log("store") },
]

function Navbar() {
  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-4">
        {items.map((element, ind) => {
          return (
            <NavbarItem
              itemName={element.item}
              onClick={element.onClick}
              index={ind}
            ></NavbarItem>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
