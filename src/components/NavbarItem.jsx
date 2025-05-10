function NavbarItem({ itemName, onClick }) {
  return (
    <li>
      <button
        onClick={onClick}
        className="bg-red-200 px-4 py-2 text-yellow-500 rounded hover:bg-blue-200 cursor-pointer"
      >
        {itemName}
      </button>
    </li>
  )
}

export default NavbarItem
