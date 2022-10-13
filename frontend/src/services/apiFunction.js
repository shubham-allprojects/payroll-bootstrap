import axios from "axios"

// login function
export const getLogin = async userData => {
  try {
    const config = { Headers: { "Content-Type": "application/json" } }
    const { data } = await axios.post("/api/v2/login", userData, config)
    return data
  } catch (error) {
    return error.response.data
  }
}

// change password

export const createNewPassword = async userData => {
  try {
    const config = { Headers: { "Content-Type": "application/json" } }

    const { data } = await axios.put(
      "/api/v2/payroll/user/password/new",
      userData,
      config
    )

    return data
  } catch (error) {
    return error.response.data
  }
}

// check user valid our not
export const loadUser = async () => {
  try {
    const { data } = await axios.get("/api/v2/me")
    return data
  } catch (error) {
    return error.response.data
  }
}
//logout function
export const logoutUser = async () => {
  try {
    const { data } = await axios.get("/api/v2/logout")
    return data
  } catch (error) {
    return error.response.data
  }
}

// user basic details {hrAdmin}
export const getAdminData = async () => {
  try {
    const { data } = await axios.get("/api/v2/admin/data")
    return data
  } catch (error) {
    return error.response.data
  }
}

// user attendance data
export const getUserData = async () => {
  try {
    const { data } = await axios.get("/api/v2/user/data")
    return data
  } catch (error) {
    return error.response.data
  }
}

//create user {super admin}
export const createUser = async userData => {
  try {
    const config = { Headers: { "Content-Type": "application/json" } }
    const { data } = await axios.post(
      "/api/v2/payroll/user/create",
      userData,
      config
    )
    return data
  } catch (error) {
    return error.response.data
  }
}

// add many user {super admin}
export const createManyUser = async userData => {
  try {
    const config = { Headers: { "Content-Type": "application/json" } }
    const { data } = await axios.post(
      "/api/v2/payroll/many-user/create",
      userData,
      config
    )
    return data
  } catch (error) {
    return error.response.data
  }
}

//all user data (super Admin)
export const allUserData = async () => {
  try {
    const { data } = await axios.get("/api/v2/payroll/user/all")
    return data
  } catch (error) {
    return error.response.data
  }
}
