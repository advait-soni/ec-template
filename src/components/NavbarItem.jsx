function NavbarItem({itemName, onClick}){
    return (
        <li>
            <button onClick={onClick}>{itemName}</button>
        </li>
    )
}

export default NavbarItem