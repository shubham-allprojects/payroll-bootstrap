import React, { useEffect } from "react"
import { Link } from "gatsby"

const SideBar = () => {
  useEffect(() => {
    let attr = document.querySelectorAll(".navbar-item a")
    attr.forEach(item => {
      if (item.getAttribute("aria-current") === "page") {
        item.closest(".navbar-item").classList.add("tab")
      }
    })
  }, [])
  return (
    <div
      id="sidebar"
      className="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block"
    >
      <div id="sidebar-wrapper" className="min-vh-100">
        <ul className="list-unstyled components">
          <li className="navbar-item">
            <Link to="/addEmployee" className="nav-link">
              {" "}
              My Profile
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/app/superadmin" className="nav-link">
              {" "}
              Add New Employee
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/viewAllEmployee" className="nav-link">
              View All Employees
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/addBulkEmployee" className="nav-link">
              Upload Bulk Employee
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
