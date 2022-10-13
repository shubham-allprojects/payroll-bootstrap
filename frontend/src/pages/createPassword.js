import React, { useState, useContext, useEffect } from "react"
import { navigate } from "gatsby"
import { getLogin } from "../services/apiFunction"
import Layout from "../components/Layout"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { createNewPassword } from "../services/apiFunction"
//import { UserData } from "./Layout"

const CreatePassword = () => {
  const [newPassword, setNewPassword] = useState({
    changePassword: "",
    confirmPassword: "",
  })

  const handlePasswordInput = event => {
    const { name, value } = event.target
    setNewPassword({ ...newPassword, [name]: value })
  }

  const updatePassword = async event => {
    console.log(newPassword)

    event.preventDefault()

    if (!newPassword.changePassword || !newPassword.confirmPassword) {
      return window.alert("please fill the form first")
    } else if (newPassword.changePassword != newPassword.confirmPassword) {
      return window.alert("password is not matched")
    }
    const password = newPassword.changePassword
   

    const {success, error, message} = await createNewPassword({password})

    if(success === false){
      return window.alert(error)
    }else {
      window.alert("Your password is successfully updated.")
      return navigate("/app/login")
    }
    
  }

  //  show password
  const showPasswordFunction = () => {
    var password = document.getElementById("employeePassword")
    if (password.type === "password") {
      password.type = "text"
    } else {
      password.type = "password"
    }
  }
 
  return (
    <>
      <Layout>
        <div className="default-container">
          <div className="loginForm">
            <h1 class="loginlabel">Change Password</h1>

            <hr />

            <form class="login_form" method="post">
              <div class="font">Change Password</div>
              <input
                type="password"
                name="changePassword"
                className="loginInput"
                placeholder="Enter New Password"
               
                onChange={handlePasswordInput}
                value={newPassword.changePassword}
              />
             
              <div class="font font2">Confirm Password</div>
              <input
                type="password"
                name="confirmPassword"
                className="loginInput"
                placeholder="Enter Confirm Password"
                id="employeePassword"
                onChange={handlePasswordInput}
                value={newPassword.confirmPassword}
              />
              <br /> <br />
              <input
                type="checkbox"
                onChange={showPasswordFunction}
                className="showPass"
              />{" "}
              Show Password
              <button onClick={updatePassword}>Update Password</button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default CreatePassword
