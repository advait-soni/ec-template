function NavbarItem({ itemName, onClick }) {
  return (
    <li>
      <button
        onClick={onClick}
        className="cursor-pointer font-mono hover:underline"
      >
        {itemName}
      </button>
    </li>
  )
}

export default NavbarItem
