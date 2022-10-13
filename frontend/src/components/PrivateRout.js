import React, { useContext, useState, useEffect } from "react"
import { navigate } from "gatsby"
import { UserData } from "../components/Layout"

const PrivateRoute = ({ isValidRole, component: Component, ...rest }) => {
  const [loadUser, setLoadUser] = useState()
  // const { user: data,protectedUser:data, callUser,protectedApi } = useContext(UserData)
  const { protectedUser: data, callUser, protectedApi } = useContext(UserData)

  useEffect(() => {
    callUser()
    protectedApi()
  }, [])

  useEffect(() => {
    if (data) {
      setLoadUser(data)
    }
  }, [data])

  if (loadUser) {
    if (loadUser.success === true) {
      if (!isValidRole.includes(loadUser.role)) {
        navigate("/app/login")
        return window.alert(`${loadUser.role} can not be excess this resource`)
      } else {
        return <Component {...rest} />
      }
    } else {
      navigate("/app/login")
      return window.alert(data.error)
    }
  }
}

export default PrivateRoute
