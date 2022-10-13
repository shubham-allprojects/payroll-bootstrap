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
          {/* <div id="footer">
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
          </div> */}
          <footer id="footer" className="footer">
            <div className="container">
              <div className="row py-4">
                <div className="col-lg-4 col-md-5 text-center text-md-start">
                  {/* <img
                    src="/logo1.png"
                    alt="logo"
                    className="img-fluid"
                    style={{ height: "78px", width: "180px" }}
                  />
                  <p className="mt-2">
                    We aim to emerge as the Preferred technology partner for our
                    client.
                  </p> */}
                  <p>Copyright © 2022 uvXcel - All Rights Reserved</p>
                </div>
                <div className="offset-lg-5 offset-md-2 col-lg-3 col-md-5 text-center text-md-start">
                  <div className="footer-contact">
                    <p>
                      Email : <a href="mailto:hr@uvxcel.com">hr@uvxcel.com</a>
                    </p>
                    <p className="">Phone: +91-20-6706259</p>
                  </div>
                </div>
              </div>
              {/* <hr /> */}
              {/* <div className="row py-2">
                <div className="col-12 text-center text-md-start">
                  <p>Copyright © 2022 uvXcel - All Rights Reserved</p>
                </div>
              </div> */}
            </div>
          </footer>
        </div>
      </UserData.Provider>
    </>
  )
}

export default Layout
