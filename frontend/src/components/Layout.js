// import React from "react"
import React, { useState, createContext, useEffect } from "react"
import NavBar from "../components/Nav-bar"
import "../style/global.css"
import { loadUser } from "../services/apiFunction"

export const UserData = createContext()

const Layout = ({ children }) => {
  const [user, setUser] = useState()
  const [protectedUser, setProtectedUser] = useState()

  const callUser = async () => {
    const data = await loadUser()
    setUser(data)
  }
  const protectedApi = async () => {
    const data = await loadUser()
    setProtectedUser(data)
  }

  useEffect(() => {
    callUser()
  })

  return (
    <>
      <UserData.Provider
        value={{ user, callUser, protectedApi, protectedUser }}
      >
        <div className="layout">
          <NavBar />
          {children}
          <div id="footer">
            <div className="copyright">
              <p className="footerContent">
                Copyright © 2022 uvXcel - All Rights Reserved
              </p>
            </div>
            <div className="emailText">
              <p className="email">
                Email : <a href="mailto:hr@uvxcel.com">hr@uvxcel.com</a>
              </p>
              <p className="no">Phone: +91-20-6706259</p>
            </div>
          </div>
        </div>
      </UserData.Provider>
    </>
  )
}

export default Layout
