function Footer() {
  return (
    <div className="flex pt-20 pb-20 space-x-50 border-t">
      <ul className="flex flex-col space-y-2">
        <h1 className="text-gray-800">The Everything Store</h1>
        <li className="text-gray-500">All rights reserved</li>
      </ul>
      <ul className="flex flex-col space-y-2">
        <h1 className="text-gray-800">Jobs</h1>
        <li className="text-gray-500">Openings</li>
        <li className="text-gray-500">Contact</li>
      </ul>
      <ul className="flex flex-col space-y-2">
        <h1 className="text-gray-800">Company</h1>
        <li className="text-gray-500">About</li>
        <li className="text-gray-500">Support</li>
        <li className="text-gray-500">Mission</li>
      </ul>
    </div>
  )
}

export default Footer
