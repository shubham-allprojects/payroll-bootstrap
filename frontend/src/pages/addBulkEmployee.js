import React, { useState } from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Papa from "papaparse"
import { createManyUser } from "../services/apiFunction"
// import SideBar from "../components/SideBar"

function AddBulkEmployee() {
  // State to store parsed data
  const [parsedData, setParsedData] = useState([])

  //State to store table Column name
  const [tableRows, setTableRows] = useState([])

  //State to store the values
  const [values, setValues] = useState([])

  // On clear btn click

  const onClearBtnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    document.getElementById("bulk-file").value = ""
    document.getElementById("table-wrapper").style.display = "none"
    document.getElementById("save-clear-btns").style.display = "none"
    document.getElementById("table-info-heading").classList.add("d-none")
  }

  // On Save btn click
  const emp = []

  // Function on Save button click
  const saveTableDataToDatabase = async e => {
    e.preventDefault()

    // Target `table-tbody Rows` and store it in an array.
    // e.g. the below array will [tr,tr] if the row count is 2 in that table body.
    const allTableRows = document.querySelectorAll("tbody tr")

    // ForEach loop to target/access data of each Row of table.
    allTableRows.forEach(tr => {
      // Empty object to store each row's data. Means this object will contain single employee data.
      let obj = {}

      // Target td i.e. Data from Row and store it in an Array.
      // e.g. format of below array for this project will be [td, td, td, td, td] if the Columns are 5 in a Row
      let tableDataArray = tr.querySelectorAll("td")

      // Store data in object
      obj.name = tableDataArray[0].textContent
      obj.email = tableDataArray[1].textContent
      obj.dob = tableDataArray[2].textContent
      obj.contactNo = tableDataArray[3].textContent
      obj.gender = tableDataArray[4].textContent
      obj.joiningDate = tableDataArray[5].textContent
      obj.probationPeriod = tableDataArray[6].textContent
      obj.confirmationDate = tableDataArray[7].textContent
      obj.designation = tableDataArray[8].textContent
      obj.department = tableDataArray[9].textContent
      obj.location = tableDataArray[10].textContent
      obj.role = tableDataArray[11].textContent
      obj.workMode = tableDataArray[12].textContent
      obj.numberOfMember = tableDataArray[13].textContent
      obj.status = tableDataArray[14].textContent
      obj.NameofSpouse = tableDataArray[15].textContent
      obj.relationship = tableDataArray[16].textContent
      obj.child1 = tableDataArray[17].textContent
      obj.DOB = tableDataArray[18].textContent
      obj.child2 = tableDataArray[19].textContent
      obj.NameofFather = tableDataArray[20].textContent
      obj.NameofMother = tableDataArray[21].textContent
      obj.pan = tableDataArray[22].textContent
      obj.pf = tableDataArray[23].textContent
      obj.empId = tableDataArray[24].textContent
      obj.tempPassword = tableDataArray[25].textContent
      obj.paymentType = tableDataArray[26].textContent
      obj.bankName = tableDataArray[27].textContent
      obj.bankBranch = tableDataArray[28].textContent
      obj.ifscCode = tableDataArray[29].textContent
      obj.accountNumber = tableDataArray[30].textContent

      // Push object into `emp` array
      emp.push(obj)
    })

    // Post all employees data from array into Database using axios
    const { error } = await createManyUser(emp)
    if (error) {
      window.alert(error)
    } else {
      alert("data Added successfully")
    }
  }

  const changeHandler = event => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = []
        const valuesArray = []

        // Iterating data to get column name and their values
        results.data.map(d => {
          rowsArray.push(Object.keys(d))
          valuesArray.push(Object.values(d))
        })

        // Parsed Data Response in array format
        setParsedData(results.data)

        // Filtered Column Names
        setTableRows(rowsArray[0])

        // Filtered Values
        setValues(valuesArray)

        // Display Table Div
        document.getElementById("table-wrapper").style.display = "block"
        document.getElementById("save-clear-btns").style.display = "block"
        document.getElementById("table-info-heading").classList.remove("d-none")
      },
    })
  }

  return (
    <>
      <Layout>
        <div className="container-fluid">
          <div className="row">
            {/* Sidebar*/}
            <div className="col-lg-4">
              <div
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

                    <li className="navbar-item">
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
                    <li className="navbar-item tab">
                      <Link to="/addBulkEmployee" className="nav-link">
                        Upload Bulk Employee
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <SideBar /> */}
            </div>
            <div className="col-lg-8">
              <div className="container wrapper-padding wrapper">
                {/* File Uploader */}
                <div className="row justify-content-center">
                  <div className="col-lg-7 col-md-8">
                    <div className="card shadow-lg p-4">
                      <h3 className="text-center">
                        Upload Bulk Employee Information
                      </h3>

                      <input
                        id="bulk-file"
                        type="file"
                        name="file"
                        className="form-control my-3"
                        onChange={changeHandler}
                        accept=".csv"
                        // style={{ display: "block", margin: "10px auto" }}
                      />
                      <h6 className="text-muted">
                        Hint : Upload CSV file here.
                      </h6>
                      <div className="text-center">
                        <img
                          className="img-fluid"
                          src="testImg2.png"
                          alt="Sample CSV image"
                          width="510"
                          height="300"
                        />
                      </div>

                      <p>Refer the Sample CSV file image</p>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <h1
                    className="text-center my-4 d-none"
                    id="table-info-heading"
                  >
                    Employee Information Table
                  </h1>
                  {/* Table */}
                  <div className="col-12 col-lg-11">
                    <div id="table-wrapper" className="bulk-emp-table-div">
                      <table className="table table-striped table-bordered table-sm">
                        <thead>
                          <tr>
                            {tableRows.map((rows, index) => {
                              return <th key={index}>{rows}</th>
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          {values.map((value, index) => {
                            return (
                              <tr key={index}>
                                {value.map((val, i) => {
                                  return <td key={i}>{val}</td>
                                })}
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* Save & Clear buttons */}
                  <div
                    className="col-12 col-lg-11 my-4"
                    id="save-clear-btns"
                    style={{ display: "none" }}
                  >
                    <div className="col-4 offset-8 d-flex justify-content-end">
                      <button
                        className="btn btn-success"
                        onClick={e => saveTableDataToDatabase(e)}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={onClearBtnClick}
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
export default AddBulkEmployee
