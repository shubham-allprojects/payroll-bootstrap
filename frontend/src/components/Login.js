import React, { useState, useContext, useEffect } from "react"
import { navigate } from "gatsby"
import { getLogin } from "../services/apiFunction"
// import Layout from "./layout"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { UserData } from "./Layout"

const Login = () => {
  //  show password
  const showPasswordFunction = () => {
    var password = document.getElementById("employeePassword")
    if (password.type === "password") {
      password.type = "text"
    } else {
      password.type = "password"
    }
  }

  const [userData, setUserData] = useState({ username: "", password: "" })
  // const [user, setUser] = useState()
  const { callUser, user } = useContext(UserData)

  const handleUpdate = event => {
    const { name, value } = event.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    if (!userData.username || !userData.password) {
      return window.alert("Please fill the login detail first")
    } else {
      const { success, role, error, message } = await getLogin(userData)
      if (success === false) {
        window.alert(error)
      } else if (success === true && message) {
        // window.alert(message)
        navigate("/createPassword")
      } else if (success === true && !message) {
        if (role === "superAdmin") {
          // navigate("/app/superadmin")
          navigate("/addEmployee")
        } else if (role === "hrAdmin") {
          navigate("/app/profile")
        } else {
          navigate("/app/profile1")
        }
      }
    }
  }

  // useEffect(() => {
  //   callUser()
  // }, [])
  useEffect(() => {
    if (user) {
      if (user.success === true) {
        if (user.role === "admin") {
          navigate("/app/profile")
        } else if (user.role === "superAdmin") {
          navigate("/app/superadmin")
        } else if (user.role === "user") {
          navigate("/app/profile1")
        }
      }
    }
  }, [user])
  return (
    <>
      <div className="default-container">
        <div className="loginForm">
          <h1 class="loginlabel">User Login</h1>

          <hr />

          <form class="login_form" method="post" onSubmit={handleSubmit}>
            <div class="font">Employee Id</div>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              className="loginInput"
              value={userData.username}
              onChange={handleUpdate}
            />
            <div class="font font2">Password</div>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="loginInput"
              value={userData.password}
              onChange={handleUpdate}
              id="employeePassword"
            />
            <br /> <br />
            <input
              type="checkbox"
              onChange={showPasswordFunction}
              className="showPass"
            />{" "}
            Show Password
            
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
