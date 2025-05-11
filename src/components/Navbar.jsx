import NavbarItem from "./NavbarItem"

const items = [
  { item: "Home", onClick: () => console.log("home") },
  { item: "About", onClick: () => console.log("about") },
  { item: "Store", onClick: () => console.log("store") },
  { item: "Contact", onClick: () => console.log("contact") },
]

const navbarBG = "bg-red-200 rounded-lg"

function Navbar() {
  return (
    <nav className="flex justify-center mt-2">
      <ul className="flex space-x-40 px-12 py-3">
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
