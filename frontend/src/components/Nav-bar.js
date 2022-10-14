import Nav from "react-bootstrap/Nav"
import React, { useState, useContext, useEffect } from "react"
import Navbar from "react-bootstrap/Navbar"
import { navigate, Link } from "gatsby"
import { logoutUser } from "../services/apiFunction"
import { UserData } from "../components/Layout"
import { Button } from "react-bootstrap"
import "bootstrap/dist/js/bootstrap.min.js"

const allRoleLinks = {
  superAdmin: [
    { href: "/", text: "Home" },
    { href: "/account", text: "Accounting" },
    { href: "/payroll", text: "Payroll" },
    { href: "/ecommerce", text: "Ecommerce" },
    { href: "/projects", text: "Projects" },
    { href: "/marketing", text: "Marketing & New Leads" },
  ],

  hrAdmin: [
    { href: "/", text: "Home" },
    { href: "/payroll", text: "Payroll" },
    { href: "/projects", text: "Projects" },
    { href: "/attendance", text: "Attendance system" },
  ],
  accountEmployee: [
    { href: "/", text: "Home" },
    { href: "/account", text: "Accounting" },
  ],
  technicalEmployee: [
    { href: "/", text: "Home" },
    { href: "/projects", text: "Projects" },
  ],
  marketingEmployee: [
    { href: "/", text: "Home" },
    { href: "/marketing", text: "Marketing & New Leads" },
  ],
}

// "superAdmin" = [
//   { href: "/", text: "Home" },
//   { href: "/account", text: "Accounting & Payroll" },
//   { href: "/ecommerce", text: "Ecommerce" },
//   { href: "/projects", text: "Projects" },
//   { href: "/marketing", text: "Marketing & New Leads" },
//   { href: "/logout", text: "Logout" },
// ]

const allRole = [
  "superAdmin",
  "hrAdmin",
  "technicalEmployee",
  "accountEmployee",
  "marketingEmployee",
]

function ColorSchemesExample() {
  const { user: data } = useContext(UserData)
  const [user, setUser] = useState({})

  const logout = async () => {
    const { success, message, error } = await logoutUser()
    if (success === false) {
      window.alert(error)
    } else {
      window.alert(message)
      setUser({ success: false })
      navigate("/")
    }
  }

  useEffect(() => {
    if (data !== undefined) {
      setUser(data)
    }
  }, [data])
  // console.log(allRoleLinks[allRole[allRole.indexOf(user.role)]])

  return (
    <>
      {/* <Navbar variant="dark" className="gatsbyNav">
        <div className="container-fluid ">
          <img src="/logo1.png" alt="logo" className="logo" />
          <Nav className="links">
            {user && allRole.indexOf(user.role) !== -1 ? (
              allRoleLinks[allRole[allRole.indexOf(user.role)]].map(link => {
                return <Nav.Link href={link.href}>{link.text}</Nav.Link>
              })
            ) : (
              <>
                <Nav.Link href="/">Home</Nav.Link>
                <Link to="/app/login">
                  {}
                  <Button
                    as="input"
                    type="submit"
                    className="loginBtn"
                    value="LOG IN"
                    size="lg"
                  />{" "}
                </Link>
                {}
              </>
            )}

            {user && user.success === true ? (
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            ) : (
              ""
            )}
          </Nav>
        </div>
      </Navbar> */}
      <nav className="navbar navbar-expand-lg gatsbyNav">
        <div className="container-fluid">
          <a className="navbar-brand ps-3" href="#">
            <img
              src="/logo1.png"
              alt="logo"
              className="img-fluid"
              style={{ height: "58px", width: "160px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {user && allRole.indexOf(user.role) !== -1 ? (
                allRoleLinks[allRole[allRole.indexOf(user.role)]].map(link => {
                  return (
                    <li className="nav-item">
                      <a className="nav-link" href={link.href}>
                        {link.text}
                      </a>
                    </li>
                  )
                })
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/app/login" className="nav-link">
                      <Button
                        as="input"
                        type="submit"
                        className="loginBtn"
                        value="LOG IN"
                        size="lg"
                      />
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default ColorSchemesExample
