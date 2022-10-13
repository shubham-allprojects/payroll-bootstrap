import React, { useEffect } from "react"
import Layout from "../components/Layout"
import Records from "./employeeTable.json"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"
import { useState } from "react"
import { getAdminData } from "../services/apiFunction"

function App() {
  const [records, setRecords] = useState([])

  const getAllEmployees = async () => {
    let data = await getAdminData()
    setRecords(data)
    console.log(data);
  }

  useEffect(() => {
    getAllEmployees()
   
  }, [records])
  
  return (
    <div className="app">
      <Layout>
        <div className="allEmpDiv">
          <div className="empTable">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th className="heading">Sr. No.</th>
                  <th className="heading">Employee Id</th>
                  <th className="heading">Name of Employee</th>
                  <th className="heading">Date of Joining</th>
                  <th className="heading">Confirmation Date</th>
                  <th className="heading">Edit</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record, Index) => {
                  return (
                    <tr key={Index}>
                      <td>{Index + 1}</td>
                      <td>{record.empId}</td>
                      <td>{record.name}</td>
                      <td>{record.joiningDate}</td>
                      <td>{record.confirmationDate}</td>
                      <td>
                      {" "}
                      <button className="editBtn">Edit</button>
                    </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default App
