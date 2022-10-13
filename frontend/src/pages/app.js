import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import PrivateRoute from "../components/PrivateRout"
import Profile from "../components/Profile"
import Profile1 from "../components/Profile1"
import Login from "../components/Login"
import SuperAdmin from "../components/SuperAdmin"

const App = () => {
  return (
    <>
      <Layout>
        <Router>
          <PrivateRoute
            isValidRole={["hrAdmin"]}
            path="/app/profile"
            component={Profile}
          />
          <PrivateRoute
            isValidRole={["superAdmin"]}
            path="/app/superadmin"
            component={SuperAdmin}
          />
          <PrivateRoute
            isValidRole={["technicalEmployee", "accountEmployee", "marketingEmployee"]}
            path="/app/profile1"
            component={Profile1}
          />
          <Login path="/app/login" />
          {/* <SuperAdmin path="/app/create" /> */}
        </Router>
      </Layout>
    </>
  )
}

export default App
