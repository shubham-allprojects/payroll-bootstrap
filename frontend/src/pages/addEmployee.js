import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default function addEmployee() {
  return (
    <>
      <Layout>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
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
                    <li className="navbar-item">
                      <Link to="/addBulkEmployee" className="nav-link">
                        Upload Bulk Employee
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="container superadmin-profile-wrapper wrapper-padding">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <div className="card">
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
                        <h3 className="card-title text-center">
                          Add New Employee
                        </h3>
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
          </div>
        </div>
      </Layout>
    </>
  )
}
