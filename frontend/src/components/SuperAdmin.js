import React, { useState, useEffect, useRef } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../style/global.css"
import { Link, navigate } from "gatsby"
import { createUser } from "../services/apiFunction"
import "react-toastify/dist/ReactToastify.css"
import SideBar from "./SideBar"

// const regAlpha = /^[a-zA-Z]+$/
const regAlphaSpace = /^[a-zA-Z ]*$/
const isValidEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
const validEmailType = ["uvxcel.com", "uvxcel.in"]
const panValid = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/
const isPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
const isIfscCode = /([A-Z]){4}([0-9]){7}/
const isAccountNumber = /([0-9]){10}/
const isPfUanValid =
  /([A-Z]){2}[-/]([A-Z]){3}[-/]([0-9]){6}[-/]([0-9]){3}[-/]([0-9]){7}/

const Superadmin = location => {
  const showPasswordFunction = () => {
    var password = document.getElementById("employeePassword")
    if (password.type === "password") {
      password.type = "text"
    } else {
      password.type = "password"
    }
  }

  const radioClick = () => {
    document.getElementById("spouse").style.display = "block"
    document.getElementById("newDiv").style.display = "none"
  }
  const radioClick1 = () => {
    document.getElementById("spouse").style.display = "none"
    document.getElementById("newDiv").style.display = "block"
  }

  const ref = useRef(null)
  const ref1 = useRef(null)

  const child1Click = event => {
    if (ref.current.checked) {
      console.log(ref)
      console.log("✅ Checkbox is checked")
      var children1 = document.getElementsByClassName("child1")[0]
      children1.style = "display:block"
    } else {
      var children1 = document.getElementsByClassName("child1")[0]
      children1.style = "display:none"
    }
  }

  const child2Click = event => {
    if (ref1.current.checked) {
      // console.log(ref)
      // console.log("✅ Checkbox is checked")
      var children2 = document.getElementsByClassName("child2")[0]
      children2.style = "display:block"
    } else {
      var children2 = document.getElementsByClassName("child2")[0]
      children2.style = "display:none"
    }
  }
  const [showFormNo, setShowFormNo] = useState(3)
  const [sDate, setSDate] = useState("")
  const [employeeData1, setEmployeeData1] = useState({
    name: "",
    email: "",
    dob: "",
    contactNo: "",
    countryCode: "",
    gender: "",
    joiningDate: "",
    probationPeriod: "",
    confirmationDate: "",
  })

  const [employeeData2, setEmployeeData2] = useState({
    designation: "",
    location: "",
    department: "",
    role: "",
    workMode: "",
  })

  const [employeeData3, setEmployeeData3] = useState({
    numberOfMember: "",
    status: "",
    NameofSpouse: "",
    relationship: "",
    DOB: "",
    child1: "",
    DOB1: "",
    child1Gender: "",
    child2: "",
    DOB2: "",
    child2Gender: "",
    NameofFather: "",
    DOB3: "",
    NameofMother: "",
    DOB4: "",
  })
  const [employeeData4, setEmployeeData4] = useState({
    pan: "",
    pf: "",
  })

  const [employeeData5, setEmployeeData5] = useState({
    tempPassword: "",
    empId: "",
  })
  const [employeeData6, setEmployeeData6] = useState({
    paymentType: "",
    bankName: "",
    bankBranch: "",
    ifscCode: "",
    accountNumber: "",
  })

  function getAge(DOB) {
    var today = new Date()
    var birthDate = new Date(DOB)
    var age = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  //when 1st form data changed handle -Basic form of Employee
  const handleFirstFormInput = e => {
    const { name, value, localName } = e.target

    const inputRef = document.querySelector(`${localName}[name = ${name}]`)
    const errorRef = inputRef.closest(".mb-3").lastChild
    console.log(errorRef)
    if (name === "name" && value.length > 0) {
      if (regAlphaSpace.test(value) === false) {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        return (errorRef.innerHTML = "Please enter only alphabets.")
      } else {
        inputRef.classList.remove("inputError")
        inputRef.classList.add("inputSuccess")
        errorRef.classList.remove("errorRef")
      }
    } else if (name === "email") {
      if (isValidEmail.test(value) === false) {
      } else if (
        value.split("@")[1][value.split("@")[1].length - 1] !== "o" &&
        !validEmailType.includes(value.split("@")[1])
      ) {
        console.log(value.split("@")[1][value.split("@")[1].length - 1] !== "o")
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        return (errorRef.innerHTML =
          "Email must be end with uvxcel.com or uvxcel.in")
      } else {
        inputRef.classList.remove("inputError")
        inputRef.classList.add("inputSuccess")
        errorRef.classList.remove("errorRef")
      }
    } else if (name === "dob") {
      const age = getAge(value)
      if (age < 21) {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        return (errorRef.innerHTML = "Age is not valid")
      } else {
        inputRef.classList.remove("inputError")
        inputRef.classList.add("inputSuccess")
        errorRef.classList.remove("errorRef")
      }
    } else if (name === "contactNo") {
      if (value.length > 10 || value.length < 10) {
        console.log(value.length)
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        errorRef.innerHTML = "Enter only 10 digits."
      } else {
        inputRef.classList.remove("inputError")
        inputRef.classList.add("inputSuccess")
        errorRef.classList.remove("errorRef")
      }
    } else if (name === "joiningDate") {
      const joinInput = new Date(value)
      console.log(joinInput)
      if (joinInput < new Date(2020, 0, 0)) {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        return (errorRef.innerHTML =
          "Joining date must be greater than year 2020")
      } else {
        inputRef.classList.remove("inputError")
        inputRef.classList.add("inputSuccess")
        errorRef.classList.remove("errorRef")
      }
    } else if (name === "confirmationDate") {
      if (!employeeData1.joiningDate || !employeeData1.probationPeriod) {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        return (errorRef.innerHTML =
          "Please select joining date and probation period first")
      } else {
        inputRef.classList.remove("inputError")
        inputRef.classList.add("inputSuccess")
        errorRef.classList.remove("errorRef")
        const d = new Date(employeeData1.joiningDate)
        const confirmD = new Date(value)
        console.log(confirmD)

        const cDate = new Date(
          d.getFullYear(),
          d.getMonth() + Number(employeeData1.probationPeriod),
          d.getDate()
        )

        console.log(cDate)

        if (confirmD < cDate) {
          // return window.alert(
          //   `Please select date after ${cDate.toDateString()}`
          inputRef.classList.add("inputError")
          inputRef.classList.remove("inputSuccess")
          errorRef.classList.add("errorRef")
          return (errorRef.innerHTML = `Please select date after ${cDate.toDateString()}`)
        } else {
          inputRef.classList.remove("inputError")
          inputRef.classList.add("inputSuccess")
          errorRef.classList.remove("errorRef")
        }
      }
    }
    setEmployeeData1({ ...employeeData1, [name]: value })
  }

  //when  2nd form data changed handle - Employee Position
  const handleSecondFormInput = e => {
    const { name, value } = e.target
    if (name === "department") {
      setDesignation(designations.filter(x => x.departmentId === value))
    }
    //const dt = designations.filter(x => x.departmentId === id)
    setEmployeeData2({ ...employeeData2, [name]: value })
  }

  //when 3rd form data changed handle -Family Information
  const handleThirdFormInput = e => {
    const { name, value } = e.target

    const relationship = employeeData3.relationship
    console.log(relationship)

    const inputRef = document.querySelector(`[name = ${name}]`)
    const errorRef = inputRef.closest(".mb-3").lastChild
    console.log(errorRef)

    if (name === "NameofSpouse" && value.length > 0) {
      if (regAlphaSpace.test(value) === false) {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        errorRef.innerHTML = "Please enter only alphabets."
      } else {
        inputRef.classList.remove("inputError")
        inputRef.classList.add("inputSuccess")
        errorRef.classList.remove("errorRef")
      }
    } else if (name === "NameofFather" && value.length > 0) {
      if (regAlphaSpace.test(value) === false) {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        errorRef.innerHTML = "Please enter only alphabets."
      } else {
        inputRef.classList.remove("inputError")
        inputRef.classList.add("inputSuccess")
        errorRef.classList.remove("errorRef")
      }
    } else if (name === "NameofMother" && value.length > 0) {
      if (regAlphaSpace.test(value) === false) {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        errorRef.innerHTML = "Please enter only alphabets."
      } else {
        inputRef.classList.remove("inputError")
        inputRef.classList.add("inputSuccess")
        errorRef.classList.remove("errorRef")
      }
    } else if (name === "child1" && value.length > 0) {
      if (regAlphaSpace.test(value) === false) {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        errorRef.innerHTML = "Please enter only alphabets."
      } else {
        inputRef.classList.remove("inputError")
        inputRef.classList.add("inputSuccess")
        errorRef.classList.remove("errorRef")
      }
    } else if (name === "child2" && value.length > 0) {
      if (regAlphaSpace.test(value) === false) {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        errorRef.innerHTML = "Please enter only alphabets."
      } else {
        inputRef.classList.remove("inputError")
        inputRef.classList.add("inputSuccess")
        errorRef.classList.remove("errorRef")
      }
    }
    if (name === "DOB" && relationship === "Husband") {
      const age = getAge(value)
      if (age < 21) {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        return (errorRef.innerHTML = "Age must be greater than 21 years ")
      } else {
        inputRef.classList.remove("inputError")
        inputRef.classList.add("inputSuccess")
        errorRef.classList.remove("errorRef")
      }
    } else if (name === "DOB" && relationship === "Wife") {
      const age = getAge(value)
      if (age < 18) {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        return (errorRef.innerHTML = "Age must be greater than 18 years ")
      } else {
        inputRef.classList.remove("inputError")
        inputRef.classList.add("inputSuccess")
        errorRef.classList.remove("errorRef")
      }
    } else if (name === "DOB3") {
      const age = getAge(value)
      if (age < 42) {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        return (errorRef.innerHTML = "Please enter correct age.")
      } else {
        inputRef.classList.remove("inputError")
        inputRef.classList.add("inputSuccess")
        errorRef.classList.remove("errorRef")
      }
    } else if (name === "DOB4") {
      const age = getAge(value)
      if (age < 42) {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        return (errorRef.innerHTML = "Please enter correct age.")
      } else {
        inputRef.classList.remove("inputError")
        inputRef.classList.add("inputSuccess")
        errorRef.classList.remove("errorRef")
      }
    }

    setEmployeeData3({ ...employeeData3, [name]: value })
  }
  //when 4th form data changed handle - PAN Detail
  const handleFourthFormInput = e => {
    const { name, value, localName } = e.target
    //const panValid = /([A-Z]){5}([0-9]){4}([A-Z]){0}$/
    const panValid = /^([A-Z]{5})([0-9]{4})([A-Z]{1})*$/

    //  const isPfUanValid =
    //   /([A-Z]){2}[-/]([A-Z]){3}[-/]([0-9]){7}[-/]([0-9]){3}[-/]([0-9]){7}/
    const isPfUanValid = /^[0-9]*$/
    const inputRef = document.querySelector(`${localName}[name = ${name}]`)
    const errorRef = inputRef.closest(".mb-3").lastChild
    console.log(errorRef)

    if (name === "pan" && value.length > 0) {
      if (panValid.test(employeeData4.pan) === false) {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        errorRef.innerHTML = "Please refer the above hint."
        //errorRef.innerHTML = "Pan number is a ten-digits alpha-numeric number."
      } else if (employeeData4.pan.length < 9) {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        errorRef.innerHTML = "Please refer the above hint."
      } else if (employeeData4.pan.length > 9) {
        inputRef.classList.remove("inputError")
        inputRef.classList.add("inputSuccess")
        errorRef.classList.add("errorRef")
        return (errorRef.innerHTML = "")
      } else {
        inputRef.classList.remove("inputError")
        inputRef.classList.add("inputSuccess")
        errorRef.classList.remove("errorRef")
      }
    }

    if (name === "pf" && value.length > 0) {
      var testUan = isPfUanValid.test(employeeData4.pf)
      if (testUan === false) {
        console.log(value.length)

        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        errorRef.innerHTML = "Please enter only numbers."
      } else if (employeeData4.pf.length < 11) {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        errorRef.innerHTML = "Please enter only numbers."
      } else if (employeeData4.pf.length > 11) {
        inputRef.classList.remove("inputError")
        inputRef.classList.add("inputSuccess")
        errorRef.classList.add("errorRef")
        return (errorRef.innerHTML = "")
      } else {
        inputRef.classList.remove("inputError")
        inputRef.classList.add("inputSuccess")
        errorRef.classList.remove("errorRef")
      }
    }
    setEmployeeData4({ ...employeeData4, [name]: value })
  }
  //when 5th form data changed handle -Payment Detail
  const handleFifthFormInput = e => {
    const { name, value, localName } = e.target

    const inputRef = document.querySelector(`${localName}[name = ${name}]`)
    const errorRef = inputRef.closest(".mb-3").lastChild
    console.log(errorRef)
    if (name === "empId") {
      if (value.length > 0 && value[0].toUpperCase() !== "U") {
        console.log(value)
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        return (errorRef.innerHTML = "EmpId first letter must be 'U' ")
      } else if (value.length > 1 && value[1].toUpperCase() !== "I") {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        return (errorRef.innerHTML = "EmpId second letter must be 'I' ")
      } else if (value.length > 2 && value[2].toUpperCase() !== "S") {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        return (errorRef.innerHTML = "EmpId third letter must be 'S'")
      } else if (value.length > 3 && value[3].toUpperCase() !== "P") {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        return (errorRef.innerHTML = "EmpId fourth letter must be 'P'")
      } else if (value.length > 4 && value[4].toUpperCase() !== "L") {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        return (errorRef.innerHTML = "EmpId fifth letter must be 'L'")
      } else if (
        (value.length > 5 && value.length < 9) ||
        (value.length > 5 && value.length > 9)
      ) {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        errorRef.innerHTML = "EmpId must contain  5 letter and 4 digits"
      } else if (value.length === 9 && isNaN(value.slice(5)) === true) {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        errorRef.innerHTML = "After 5 letter enter 4 number"
      } else {
        inputRef.classList.remove("inputError")
        inputRef.classList.add("inputSuccess")
        errorRef.classList.remove("errorRef")
      }
    }

    setEmployeeData5({ ...employeeData5, [name]: value })
  }
  //when  6th form data changed handle -Create Employee Account
  const handleSixthFormInput = e => {
    const { name, value, localName } = e.target

    const inputRef = document.querySelector(`${localName}[name = ${name}]`)
    const errorRef = inputRef.closest(".mb-3").lastChild
    console.log(errorRef)
    const isIfscCode = /([A-Z]){4}([0-9]){6}/
    const isAccountNumber = /([0-9]){9}/

    if (name === "accountNumber" && value.length > 0) {
      if (
        (employeeData6.accountNumber.length < 9 ||
          employeeData6.accountNumber.length > 9) &&
        (employeeData6.accountNumber.length < 11 ||
          employeeData6.accountNumber.length > 11)
      ) {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        errorRef.innerHTML =
          "Account Number must contain 10 Digits or 12 Digits."
      } else if (isAccountNumber.test(employeeData6.accountNumber) === false) {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        errorRef.innerHTML = "Please Enter Only Numbers"
      } else {
        inputRef.classList.remove("inputError")
        inputRef.classList.add("inputSuccess")
        errorRef.classList.remove("errorRef")
      }
    } else if (name === "ifscCode" && value.length > 0) {
      if (
        employeeData6.ifscCode.length < 10 ||
        employeeData6.ifscCode.length > 10
      ) {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        errorRef.innerHTML = "IFSC Code must be contain 11 Digit"
      } else if (isIfscCode.test(employeeData6.ifscCode) === false) {
        inputRef.classList.add("inputError")
        inputRef.classList.remove("inputSuccess")
        errorRef.classList.add("errorRef")
        errorRef.innerHTML =
          "IFSC Code must contain First 4 Letters Followed by 7 Numbers"
      } else {
        inputRef.classList.remove("inputError")
        inputRef.classList.add("inputSuccess")
        errorRef.classList.remove("errorRef")
      }
    }
    setEmployeeData6({ ...employeeData6, [name]: value })
  }
  // on first form submit
  const handleFirstForm = e => {
    e.preventDefault()
    var errorMsg = document.getElementById("errorMsg")
    console.log(employeeData1)
    if (
      !employeeData1.name ||
      !employeeData1.email ||
      !employeeData1.dob ||
      !employeeData1.contactNo ||
      !employeeData1.countryCode ||
      !employeeData1.gender ||
      !employeeData1.joiningDate ||
      !employeeData1.probationPeriod ||
      !employeeData1.confirmationDate
    ) {
      errorMsg.style.color = "red"
      return (errorMsg.innerHTML = "Please fill the form first")
    } else {
      errorMsg.style.color = "#f7eeee"
      setShowFormNo(2)
    }

    const emailCheck = employeeData1.email.split("@")
    console.log(emailCheck[1])
  }

  // on second form submit
  const handleSecondForm = e => {
    e.preventDefault()

    console.log(employeeData2)
    if (
      !employeeData2.department ||
      !employeeData2.designation ||
      !employeeData2.location ||
      !employeeData2.role
    ) {
      window.alert("Please fill the form First.")
    } else {
      setShowFormNo(3)
    }
  } // on Third form submit
  const handleThirdForm = e => {
    e.preventDefault()
    console.log(employeeData3)
    if (!employeeData3.numberOfMember) {
      window.alert("Please fill the form first")
    } else {
      setShowFormNo(4)
    }
  }

  // on fourth form submit
  const handleFourthForm = e => {
    e.preventDefault()

    console.log(employeeData4)

    if (!employeeData4.pan || !employeeData4.pf) {
      window.alert("Please fill the form first")
    } else {
      setShowFormNo(5)
    }
  }

  // on Fifth form submit
  const handleFifthForm = e => {
    e.preventDefault()
    var errorMsg = document.getElementById("errorMsg")
    console.log(employeeData5)
    if (!employeeData5.empId) {
      errorMsg.style.color = "red"
      return (errorMsg.innerHTML = "Please fill the form first")
    } else if (employeeData5.empId != employeeData5.tempPassword) {
      errorMsg.style.color = "red"
      return (errorMsg.innerHTML = " You have entered wrong password ")
    } else {
      setShowFormNo(6)
    }

    //const empIdFirstHalf = employeeData1.empId.substr(0, 5)
    // const empIdSecondHalf = employeeData1.empId.substr(5)
  }
  // on Sixth form submit
  const handleSixthForm = async e => {
    e.preventDefault()
    console.log(employeeData6)
    if (
      !employeeData6.paymentType ||
      !employeeData6.bankName ||
      !employeeData6.bankBranch ||
      !employeeData6.accountNumber
    ) {
      window.alert("Please fill the form first")
    } else {
      const allUserData = {
        ...employeeData1,
        ...employeeData2,
        ...employeeData3,
        ...employeeData4,
        ...employeeData5,
        ...employeeData6,
      }
      const { success, message, error, payrollUser } = await createUser(
        allUserData
      )
      if (success === false) {
        return window.alert(error)
      } else {
        window.alert(message)
        console.log(payrollUser)
      }
      navigate("/addEmployee")
    }
  }
  useEffect(() => {
    // for confirmDate valid date show
    if (employeeData1.joiningDate && employeeData1.probationPeriod) {
      const d = new Date(employeeData1.joiningDate)
      const cDate = new Date(
        d.getFullYear(),
        d.getMonth() + Number(employeeData1.probationPeriod),
        d.getDate()
      )
      setSDate(cDate.toDateString())
    }
  }, [employeeData1, location])

  const departments = [
    { id: "Software Development", name: "Software Development" },
    { id: "Software Service", name: "Software Service" },
    { id: "R & D", name: "R & D" },
    { id: "HR & Admin", name: "HR & Admin" },
    { id: "Products", name: "Products" },
    { id: "Account", name: "Account" },
    { id: "Marketing", name: "Marketing" },
  ]

  const designations = [
    {
      id: "Jr.Software Engineer",
      departmentId: "Software Development",
      name: "Jr.Software Engineer",
    },
    {
      id: "SQL Developer",
      departmentId: "Software Development",
      name: "SQL Developer",
    },
    {
      id: "Software Developer",
      departmentId: "Software Development",
      name: "Software Developer",
    },
    {
      id: "Software Engineer",
      departmentId: "Software Development",
      name: "Software Engineer",
    },
    {
      id: "UI/UX Developer",
      departmentId: "Software Development",
      name: "UI/UX Developer",
    },
    { id: "Hr Partner", departmentId: "HR & Admin", name: "Hr Partner" },
    { id: "Accountant", departmentId: "Account", name: "Accountant" },
    {
      id: "Marketing Manager",
      departmentId: "Marketing",
      name: "Marketing Manager",
    },
  ]

  const [department, setDepartment] = useState([])
  const [designation, setDesignation] = useState([])

  useEffect(() => {
    setDepartment(departments)
  }, [])

  const handleDepartment = id => {
    const dt = designations.filter(x => x.departmentId === id)
    setDesignation(dt)
  }

  return (
    <>
      {/* <div className="d-flex min-vh-100"> */}
      {/* <div
          id="sidebar"
          className="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block"
        >
          <div id="sidebar-wrapper" className="min-vh-100">
            <ul className="list-unstyled components">
              <li className="navbar-item">
                <Link to="/addEmployee" className="nav-link">
                  {" "}
                  My Profile
                </Link>
              </li>

              <li className="navbar-item tab">
                <Link to="/app/superadmin" className="nav-link">
                  {" "}
                  Add New Employee
                </Link>
              </li>

              <li className="navbar-item">
                <Link to="/viewAllEmployee" className="nav-link">
                  View All Employees
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/addBulkEmployee" className="nav-link">
                  {" "}
                  Upload Bulk Employee
                </Link>
              </li>
            </ul>
          </div>
        </div> */}

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <SideBar />
          </div>
          <div className="col-lg-8">
            <section className="wrapper-padding wrapper">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-9 col-md-11">
                    {showFormNo === 1 ? (
                      <div className="formContainer form-1">
                        <h3 className="Detail">
                          {" "}
                          Basic Information of Employee
                        </h3>
                        <hr></hr>
                        <form>
                          <div className="mb-3">
                            <div id="errorMsg"></div>
                            <label
                              htmlFor="exampleInputName1"
                              className="form-label"
                            >
                              Full Name
                            </label>
                            <input
                              type="name"
                              className="form-control"
                              id="exampleInputName1"
                              name="name"
                              value={employeeData1.name}
                              onChange={handleFirstFormInput}
                            />
                            <p></p>
                          </div>

                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputEmail1"
                              className="form-label"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              name="email"
                              value={employeeData1.email}
                              aria-describedby="emailHelp"
                              onChange={handleFirstFormInput}
                              required
                            />
                            <p></p>
                          </div>
                          {}

                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputdob"
                              className="form-label"
                            >
                              Date Of Birth
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              id="exampleInputdob"
                              name="dob"
                              value={employeeData1.dob}
                              onChange={handleFirstFormInput}
                            />
                            <p></p>
                          </div>
                          {}

                          <div className="mb-3">
                            <div className="contactNoDiv">
                              <label
                                htmlFor="exampleInputcontactNo"
                                className="form-label"
                              >
                                Contact No
                              </label>
                            </div>

                            <div className="countryClass">
                              <select
                                className="countryCode"
                                name="countryCode"
                                value={employeeData1.countryCode}
                                onChange={handleFirstFormInput}
                              >
                                <option hidden value="">
                                  -Select-
                                </option>
                                <option value="+91 India">+91 India</option>
                                <option value="+60 Malaysia">
                                  +60 Malaysia
                                </option>
                              </select>

                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputcontactNo"
                                name="contactNo"
                                value={employeeData1.contactNo}
                                onChange={handleFirstFormInput}
                              />
                            </div>
                            <p></p>
                          </div>
                          {}
                          <div className="mb-3">
                            <label htmlFor="gender" className="form-label">
                              Gender
                            </label>

                            <select
                              className="form-select mt-3"
                              required
                              name="gender"
                              onChange={handleFirstFormInput}
                            >
                              <option selected disabled value="gender">
                                Gender
                              </option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>

                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputJoiningDate"
                              className="form-label"
                            >
                              Joining Date
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              id="exampleInputJoiningDate"
                              name="joiningDate"
                              value={employeeData1.joiningDate}
                              onChange={handleFirstFormInput}
                            />
                            <p></p>
                          </div>
                          {}
                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputprobationPeriod"
                              className="form-label"
                            >
                              Probation Period
                            </label>
                            <select
                              className="form-select mt-3"
                              required
                              name="probationPeriod"
                              onChange={handleFirstFormInput}
                            >
                              {" "}
                              <option selected disabled value="gender">
                                Probation Period{" "}
                              </option>
                              <option value="3">3 Months</option>
                              <option value="6">6 Months</option>
                              <option value="12">1 Year</option>
                            </select>
                            <p></p>
                          </div>

                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputconfirmationDate"
                              className="form-label"
                            >
                              Confirmation date
                            </label>

                            <input
                              type="date"
                              className="form-control"
                              id="exampleInputconfirmationDate"
                              name="confirmationDate"
                              value={employeeData1.confirmationDate}
                              onChange={handleFirstFormInput}
                            />
                            <p></p>
                          </div>
                          {}
                          <div className="formButtonDiv">
                            <button
                              type="submit"
                              className="btn btn-primary"
                              onClick={handleFirstForm}
                            >
                              Next
                            </button>
                          </div>
                        </form>
                      </div>
                    ) : (
                      ""
                    )}

                    {showFormNo === 2 ? (
                      <div className="formContainer form-2">
                        <h3 className="Detail">Employee Position Details</h3>
                        <hr></hr>
                        <form>
                          <div className="mb-3">
                            <label htmlFor="Department" className="form-label">
                              Department
                            </label>
                            <select
                              className="form-select mt-3"
                              required
                              name="department"
                              value={employeeData2.department}
                              onChange={handleSecondFormInput}
                              // onChange={e => handleDepartment(e.target.value)}
                            >
                              <option value="0">Select Department</option>
                              {department && department !== undefined
                                ? department.map((ctr, index) => {
                                    return (
                                      <option key={index} value={ctr.id}>
                                        {ctr.name}
                                      </option>
                                    )
                                  })
                                : "No Department"}
                            </select>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="Designation" className="form-label">
                              Designation
                            </label>
                            <select
                              className="form-select mt-3"
                              required
                              name="designation"
                              onChange={handleSecondFormInput}
                              //onChange={(e) => handleState(e.target.value)}
                            >
                              <option value="0">Select Designation</option>
                              {designation && designation !== undefined
                                ? designation.map((ctr, index) => {
                                    return (
                                      <option key={index} value={ctr.id}>
                                        {ctr.name}
                                      </option>
                                    )
                                  })
                                : "No Designation"}
                            </select>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="Location" className="form-label">
                              Location
                            </label>
                            <select
                              className="form-select mt-3"
                              required
                              name="location"
                              onChange={handleSecondFormInput}
                            >
                              <option selected disabled value="">
                                Location
                              </option>
                              <option value="Pune, India">Pune, India</option>
                              <option value="Kuala Lumpur,Malaysia">
                                Kuala Lumpur,Malaysia
                              </option>
                            </select>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="Role" className="form-label">
                              Role
                            </label>
                            <select
                              className="form-select mt-3"
                              required
                              name="role"
                              onChange={handleSecondFormInput}
                            >
                              <option selected disabled value="">
                                {" "}
                                Role
                              </option>
                              <option value="superAdmin">Super Admin</option>
                              <option value="hrAdmin">Hr Admin</option>
                              <option value="technicalEmployee">
                                Technical Employee
                              </option>
                              <option value="accountEmployee">
                                Account Employee
                              </option>
                              <option value="marketingEmployee">
                                Marketing Employee
                              </option>
                            </select>
                          </div>

                          <div className="mb-3">
                            <div className="row justify-content-start">
                              <label htmlFor="Role" className="form-label mb-3">
                                Work Mode
                              </label>
                              <div className="col-lg-5 col-md-6">
                                <input
                                  type="radio"
                                  id="famInput1"
                                  name="workMode"
                                  value="work from home"
                                  onChange={handleSecondFormInput}
                                />
                                <label for="wfh">Work from Home</label>
                              </div>
                              <div className="col-lg-5 col-md-6">
                                <input
                                  type="radio"
                                  id="famInput"
                                  name="workMode"
                                  value="work from Office"
                                  onChange={handleSecondFormInput}
                                />
                                <label for="wfo">Work from Office </label>
                              </div>
                            </div>
                          </div>
                          <br />
                          <div className="formButtonDiv">
                            <button
                              className="btn btn-primary"
                              onClick={() => setShowFormNo(1)}
                            >
                              Previous
                            </button>
                            <button
                              type="submit"
                              className="btn btn-primary"
                              onClick={handleSecondForm}
                            >
                              Next
                            </button>
                          </div>
                        </form>
                      </div>
                    ) : (
                      ""
                    )}
                    {showFormNo === 3 ? (
                      <div className="formContainer form-3">
                        <h3 className="Detail"> Family Information </h3>
                        <hr></hr>
                        <form>
                          <div className="mb-3 famDiv">
                            <label
                              htmlFor="exampleInputnoOfMember"
                              className="form-label"
                            >
                              Number of Members
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="exampleInputnumberOfMember"
                              name="numberOfMember"
                              value={employeeData3.numberOfMember}
                              onChange={handleThirdFormInput}
                            />
                          </div>
                          <div className="mb-3 famDiv">
                            <div className="famRadioBtn">
                              <input
                                type="radio"
                                name="status"
                                value="married"
                                id="famInput"
                                onClick={radioClick}
                                onChange={handleThirdFormInput}
                              />
                              <label for="married">Married</label>
                              <input
                                type="radio"
                                name="status"
                                value="single"
                                id="famInput1"
                                onClick={radioClick1}
                                onChange={handleThirdFormInput}
                              />
                              <label for="single">Single</label>
                            </div>
                          </div>
                          <div id="spouse">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="mb-3 famDiv">
                                  <label
                                    htmlFor="exampleInputOccupation"
                                    className="form-label"
                                  >
                                    Name of Spouse
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputNameofSpouse"
                                    name="NameofSpouse"
                                    value={employeeData3.NameofSpouse}
                                    onChange={handleThirdFormInput}
                                  />
                                  <p></p>
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="mb-3 famDiv">
                                  <label
                                    htmlFor="exampleInputnumberOfPassword"
                                    className="form-label"
                                  >
                                    Relationship
                                  </label>
                                  <select
                                    className="relationClass"
                                    required
                                    value={employeeData3.relationship}
                                    name="relationship"
                                    onChange={handleThirdFormInput}
                                  >
                                    <option hidden value="">
                                      {" "}
                                      Relationship
                                    </option>
                                    <option value="Husband">Husband </option>
                                    <option value="Wife">Wife</option>
                                  </select>
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="mb-3 famDiv">
                                  <label
                                    htmlFor="exampleInputDOB"
                                    className="form-label"
                                  >
                                    Date Of Birth
                                  </label>
                                  <input
                                    type="date"
                                    className="form-control"
                                    id="exampleInputDOB1"
                                    name="DOB"
                                    value={employeeData3.DOB}
                                    onChange={handleThirdFormInput}
                                  />
                                  <p></p>
                                </div>
                              </div>
                            </div>

                            <div className="mb-3 famDiv">
                              <div className="childCheckBox">
                                <input
                                  type="checkbox"
                                  id="famInput1"
                                  name="childCheck1"
                                  value="child1"
                                  ref={ref}
                                  onClick={child1Click}
                                />
                                <label for="child1">Child 1</label>

                                <input
                                  type="checkbox"
                                  id="famInput"
                                  name="childCheck2"
                                  value="child2"
                                  ref={ref1}
                                  onClick={child2Click}
                                />
                                <label for="child2">Child 2</label>
                                <br />
                              </div>
                            </div>
                            <br />

                            <div
                              id="children"
                              className="row justify-content-center"
                            >
                              <div
                                className="familyInfo child1 col-md-6"
                                id="child1"
                              >
                                <div className="mb-3 famDiv">
                                  <label
                                    htmlFor="exampleInput Child1"
                                    className="form-label"
                                  >
                                    Name of Child 1
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputChild1"
                                    name="child1"
                                    value={employeeData3.child1}
                                    onChange={handleThirdFormInput}
                                  />
                                  <p></p>
                                </div>

                                <div className="mb-3 famDiv">
                                  <div className="famRadioBtn">
                                    <input
                                      type="radio"
                                      name="child1Gender"
                                      value="Male"
                                      id="famInput"
                                      onChange={handleThirdFormInput}
                                    />
                                    <label for="married">Male</label>
                                    <input
                                      type="radio"
                                      name="child1Gender"
                                      value="Female"
                                      id="famInput1"
                                      onChange={handleThirdFormInput}
                                    />
                                    <label for="single">Female</label>
                                  </div>
                                </div>
                                <div className="mb-3 famDiv">
                                  <label
                                    htmlFor="exampleInputDOB"
                                    className="form-label"
                                  >
                                    Date Of Birth
                                  </label>
                                  <input
                                    type="date"
                                    className="form-control"
                                    id="exampleInputDOB1"
                                    name="DOB1"
                                    value={employeeData3.DOB1}
                                    onChange={handleThirdFormInput}
                                  />
                                  <p></p>
                                </div>
                              </div>

                              <div
                                className="familyInfo child2 col-md-6 mt-5 mt-md-0"
                                id="child2"
                              >
                                <div className="mb-3 famDiv">
                                  <label
                                    htmlFor="exampleInputChild2"
                                    className="form-label"
                                  >
                                    Name of Child 2
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputChild2"
                                    name="child2"
                                    value={employeeData3.child2}
                                    onChange={handleThirdFormInput}
                                  />
                                  <p></p>
                                </div>
                                <div className="mb-3 famDiv">
                                  <div className="famRadioBtn">
                                    <input
                                      type="radio"
                                      name="child2Gender"
                                      value="Male"
                                      id="famInput"
                                      onChange={handleThirdFormInput}
                                    />
                                    <label for="married">Male</label>
                                    <input
                                      type="radio"
                                      name="child2Gender"
                                      value="Female"
                                      id="famInput1"
                                      onChange={handleThirdFormInput}
                                    />
                                    <label for="single">Female</label>
                                  </div>
                                </div>
                                <div className="mb-3 famDiv">
                                  <label
                                    htmlFor="exampleInputDOB"
                                    className="form-label"
                                  >
                                    Date Of Birth
                                  </label>
                                  <input
                                    type="date"
                                    className="form-control"
                                    id="exampleInputDOB2"
                                    name="DOB2"
                                    value={employeeData3.DOB2}
                                    onChange={handleThirdFormInput}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div id="newDiv">
                            <div className="row" id="parent">
                              <div className="mb-3 famDiv col-md-6">
                                <label
                                  htmlFor="exampleInputOccupation"
                                  className="form-label"
                                >
                                  Name of Father
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="exampleInputNameofSpouse"
                                  name="NameofFather"
                                  value={employeeData3.NameofFather}
                                  onChange={handleThirdFormInput}
                                />
                                <p></p>
                              </div>

                              <div className="mb-3 famDiv col-md-6">
                                <label
                                  htmlFor="exampleInputDOB"
                                  className="form-label"
                                >
                                  Date Of Birth
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="exampleInputDOB1"
                                  name="DOB3"
                                  value={employeeData3.DOB3}
                                  onChange={handleThirdFormInput}
                                />
                                <p></p>
                              </div>
                            </div>
                            <div className="row" id="parent">
                              <div className="mb-3 famDiv col-md-6">
                                <label
                                  htmlFor="exampleInputOccupation"
                                  className="form-label"
                                >
                                  Name of Mother
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="exampleInputNameofSpouse"
                                  name="NameofMother"
                                  value={employeeData3.NameofMother}
                                  onChange={handleThirdFormInput}
                                />
                                <p></p>
                              </div>

                              <div className="mb-3 famDiv col-md-6">
                                <label
                                  htmlFor="exampleInputDOB"
                                  className="form-label"
                                >
                                  Date Of Birth
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="exampleInputDOB1"
                                  name="DOB4"
                                  value={employeeData3.DOB4}
                                  onChange={handleThirdFormInput}
                                />
                                <p></p>
                              </div>
                            </div>
                          </div>
                          <br />
                          <div className="formButtonDiv">
                            <button
                              className="btn btn-primary"
                              onClick={() => setShowFormNo(2)}
                            >
                              Previous
                            </button>
                            <button
                              type="submit"
                              className="btn btn-primary"
                              onClick={handleThirdForm}
                            >
                              Next
                            </button>
                          </div>
                        </form>
                      </div>
                    ) : (
                      ""
                    )}

                    {showFormNo === 4 ? (
                      <div className="formContainer form-4">
                        <h3 className="Detail"> PAN details</h3>
                        <hr></hr>
                        <form>
                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputEmail1"
                              className="form-label"
                            >
                              PAN Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              name="pan"
                              value={employeeData4.pan}
                              onChange={handleFourthFormInput}
                            />
                            <div id="emailHelp" className="form-text">
                              Hint: HQTPD0461E
                            </div>
                            <p></p>
                          </div>
                          <div id="panError"></div>
                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputPassword1"
                              className="form-label"
                            >
                              PF UAN Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputPassword1"
                              name="pf"
                              value={employeeData4.pf}
                              onChange={handleFourthFormInput}
                            />
                            <div id="emailHelp" className="form-text">
                              Hint: It is 12 digit number.
                            </div>
                            <p></p>
                          </div>
                          <div id="pfError"></div>
                          <div className="formButtonDiv">
                            <button
                              className="btn btn-primary"
                              onClick={() => setShowFormNo(3)}
                            >
                              Previous
                            </button>
                            <button
                              type="submit"
                              className="btn btn-primary"
                              onClick={handleFourthForm}
                            >
                              Next
                            </button>
                          </div>
                        </form>
                      </div>
                    ) : (
                      ""
                    )}
                    {showFormNo === 5 ? (
                      <div className="formContainer form-4">
                        <h3 className="Detail">Create employee account</h3>
                        <hr></hr>
                        <div id="showErrorMsg"></div>
                        <form>
                          {}
                          <div className="mb-3">
                            <div id="errorMsg"></div>
                            <label
                              htmlFor="exampleInputempID"
                              className="form-label"
                            >
                              Employee ID
                            </label>
                            <input
                              type="empId"
                              className="form-control"
                              id="exampleInputempID"
                              name="empId"
                              value={employeeData5.empId}
                              onChange={handleFifthFormInput}
                            />
                            <div id="emailHelp" className="form-text">
                              Hint : UISPL0016
                            </div>
                            <p></p>
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputempID"
                              className="form-label"
                            >
                              Password
                            </label>
                            <div className="box">
                              <input
                                type="password"
                                className="form-control"
                                name="tempPassword"
                                value={employeeData5.tempPassword}
                                onChange={handleFifthFormInput}
                                id="employeePassword"
                              />
                              <div id="emailHelp" className="form-text">
                                Hint : Password must be same as Emplooyee Id
                              </div>
                            </div>
                          </div>
                          <input
                            type="checkbox"
                            onChange={showPasswordFunction}
                            className="showPass"
                          />{" "}
                          Show Password
                          <br /> <br />
                          <div className="formButtonDiv">
                            <button
                              className="btn btn-primary"
                              onClick={() => setShowFormNo(4)}
                            >
                              Previous
                            </button>
                            <button
                              type="submit"
                              className="btn btn-primary"
                              onClick={handleFifthForm}
                            >
                              Next
                            </button>
                          </div>
                        </form>
                      </div>
                    ) : (
                      ""
                    )}
                    {showFormNo === 6 ? (
                      <div className="formContainer form-3">
                        <h3 className="Detail"> Payment details</h3>
                        <hr></hr>
                        <form>
                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputpaymenttype"
                              className="form-label"
                            >
                              Payment Type
                            </label>
                            <select
                              className="form-select mt-3"
                              required
                              name="paymentType"
                              onChange={handleSixthFormInput}
                            >
                              <option selected disabled value="">
                                Payment Type
                              </option>
                              <option value="NEFT transfer">
                                NEFT transfer
                              </option>
                            </select>
                          </div>

                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputbankName"
                              className="form-label"
                            >
                              Bank Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputaccNumber1"
                              name="bankName"
                              onChange={handleSixthFormInput}
                            />
                          </div>

                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputbranchName"
                              className="form-label"
                            >
                              Branch Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputbranchName"
                              name="bankBranch"
                              onChange={handleSixthFormInput}
                            />
                          </div>

                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputifscCode"
                              className="form-label"
                            >
                              IFSC Code
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputifscCode"
                              name="ifscCode"
                              onChange={handleSixthFormInput}
                            />
                            <p></p>
                          </div>
                          {/* <div id="ifscError"></div> */}
                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputaccNumber1"
                              className="form-label"
                            >
                              Account Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputaccNumber1"
                              name="accountNumber"
                              onChange={handleSixthFormInput}
                            />
                            <p></p>
                          </div>
                          <div className="formButtonDiv">
                            {" "}
                            <button
                              className="btn btn-primary"
                              onClick={() => setShowFormNo(5)}
                            >
                              Previous
                            </button>
                            <button
                              type="submit"
                              className="btn btn-primary"
                              onClick={handleSixthForm}
                            >
                              Finish
                            </button>
                          </div>
                        </form>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default Superadmin
