import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default function addEmployee() {
  return (
    <div>
      <Layout>
        <div className="addEmpDiv">
          <div
            id="sidebar"
            className="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block"
          >
            <div id="sidebar-wrapper" className="min-vh-100">
              <ul className="list-unstyled components">
                <li className="navbar-item tab">
                  <Link to="/addEmployee" className="nav-link">
                    {" "}
                    My Profile
                  </Link>
                </li>

                <li className="navbar-item ">
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
                    Upload Bulk Employee
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="superAdminContainer">
            <div className="superAdminProfile">
              {" "}
              <h1>Welcome to Super Admin Page</h1>
              <img src="/profileLogo.png" alt="profile" />
              <p>Priya Hatipkar</p>
            </div>

            <div className="newEmpDiv">
              <h3>Add New Employee</h3>
              <Link to="/app/superadmin">
                <img src="/addemp.png" alt="AddEmpImg" className="icon" />{" "}
              </Link>

              <p>Super Admin can add new employee.</p>
            </div>

            <div className="viewEmpDiv">
              <h3>View All Employee</h3>
              <Link to="/viewAllEmployee">
                <img src="/viewIcon.png" alt="ViewImg" className="icon" />{" "}
              </Link>
              <p>Super Admin can view list of all employee.</p>
            </div>

            <div className="uploadEmp">
              {" "}
              <h3>Upload Bulk Employee</h3>{" "}
              <Link to="/addBulkEmployee">
                {" "}
                <img src="/upload.png" alt="UploadImg" className="icon" />
              </Link>
              <p>Upload CSV file here.</p>
            </div>
          </div> */}
          <div className="container superadmin-profile-wrapper">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="card mt-5">
                  <div className="card-body">
                    <h1 className="card-title text-center">
                      Welcome to Super Admin Page
                    </h1>
                    <div className="text-center">
                      <img src="/profileLogo.png" alt="profile" />
                    </div>
                    <p className="card-text text-center fw-bold">
                      Priya Hatipkar
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row superadmin-links py-4">
              <div className="col-12 col-lg-4 col-md-6  mt-md-0">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title text-center">Add New Employee</h3>
                    <div className="text-center">
                      <Link to="/app/superadmin">
                        <img
                          src="/addemp.png"
                          alt="AddEmpImg"
                          className="icon"
                        />
                      </Link>
                    </div>
                    <p className="card-text text-center">
                      Super Admin can view list of all employee.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 col-md-6 mt-4 mt-md-0">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title text-center">
                      View All Employee
                    </h3>
                    <div className="text-center">
                      <Link to="/viewAllEmployee">
                        <img
                          src="/viewIcon.png"
                          alt="ViewImg"
                          className="icon"
                        />
                      </Link>
                    </div>
                    <p className="card-text text-center">
                      Super Admin can add new employee.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 col-md-6 mt-4 mt-lg-0">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title text-center">
                      Upload Bulk Employee
                    </h3>
                    <div className="text-center">
                      <Link to="/addBulkEmployee">
                        <img
                          src="/upload.png"
                          alt="UploadImg"
                          className="icon"
                        />
                      </Link>
                    </div>
                    <p className="card-text text-center">
                      Upload CSV file here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
