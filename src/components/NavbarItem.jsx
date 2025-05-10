function NavbarItem({ itemName, onClick }) {
  return (
    <li>
      <button
        onClick={onClick}
        className="cursor-pointer font-mono"
      >
        {itemName}
      </button>
    </li>
  )
}

export default NavbarItem
