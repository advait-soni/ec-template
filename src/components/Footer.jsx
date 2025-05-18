function Footer() {
  return (
    <div className="flex pt-20 pb-20 space-x-50 border-t border-dashed">
      <div className="flex flex-col">
        <h1 className="text-gray-800" key="">
          The Everything Store
        </h1>
        <ul className="flex flex-col space-y-2">
          <li className="text-gray-500" key="rights">
            All rights reserved
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <h1 className="text-gray-800">Jobs</h1>
        <ul className="flex flex-col space-y-2">
          <li className="text-gray-500" key="openings">
            Openings
          </li>
          <li className="text-gray-500" key="contact">
            Contact
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <h1 className="text-gray-800">Company</h1>
        <ul className="flex flex-col space-y-2">
          <li className="text-gray-500" key="about">
            About
          </li>
          <li className="text-gray-500" key="support">
            Support
          </li>
          <li className="text-gray-500" key="mission">
            Mission
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
