import React, { useEffect, useState, useContext } from "react"
import { getUser } from "../services/auth"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
// import { getAdminData } from "../services/apiFunction"
import { UserData } from "./Layout"

const Profile = () => {
  const { user } = useContext(UserData)
  return (
    <>
      {user ? (
        <section className="name">
          <div className="profile">
            <h1>Your profile</h1>
            <ul>
              <li>Name:{user.name}</li>
              <li>E-mail:{user.email}</li>
            </ul>
            <p className="">
              <Link to="/employee"> Click </Link>here to see employee details
            </p>
          </div>
          <img src="/pointing.jpg" alt="" style={{ maxWidth: "80%" }} />
        </section>
      ) : (
        ""
      )}
    </>
  )
}

export default Profile
