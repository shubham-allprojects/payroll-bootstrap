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
      {/* <div className="default-container">
        <div className="loginForm">
          <h1 className="loginlabel">User Login</h1>
          <hr />
          <form className="login_form" method="post" onSubmit={handleSubmit}>
            <div className="font">Employee Id</div>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              className="loginInput"
              value={userData.username}
              onChange={handleUpdate}
            />
            <div className="font font2">Password</div>
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
      </div> */}
      <section
        id="login-form"
        className="login-wrapper wrapper wrapper-padding"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-9">
              <form className="card" onSubmit={handleSubmit}>
                <h1 className="fw-bold py-3 text-center">User Login</h1>
                <hr />

                <div className="row justify-content-center">
                  <div className="col-md-7 col-10">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group my-4">
                          <label
                            className="fw-bold fs-5"
                            for="exampleInputUserID"
                          >
                            Employee Id
                          </label>
                          <input
                            id="exampleInputUserID"
                            type="text"
                            name="username"
                            placeholder="Enter Username"
                            className="form-control mt-2"
                            value={userData.username}
                            onChange={handleUpdate}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group mb-4">
                          <label
                            className="fw-bold fs-5"
                            for="employeePassword"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            className="form-control mt-2"
                            value={userData.password}
                            onChange={handleUpdate}
                            id="employeePassword"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group form-check mb-4">
                          <input
                            onChange={showPasswordFunction}
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            for="exampleCheck1"
                          >
                            Show Password
                          </label>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-2 fw-bold fs-5 mb-5"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
