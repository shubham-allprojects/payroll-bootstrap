import React, { useState, useRef, useEffect } from "react"
//import Records from "../components/employee.json"
import Table from "react-bootstrap/Table"
import Modal from "react-modal"
import { loadUser } from "../services/apiFunction"

const Profile1 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modal1IsOpen, setModal1IsOpen] = useState(false)

  const ref = useRef(null)
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)

  const handleClick = event => {
    if (ref.current.checked) {
      console.log(ref)
      console.log("✅ Checkbox is checked")
      var familyInfo = document.getElementsByClassName("familyHidden")[0]
      var familyInfoRow = document.getElementsByClassName("familyHiddenRow")[0]
      console.log(familyInfo)
      console.log(familyInfoRow)
      familyInfo.style = "display:revert"
      familyInfoRow.style = "display:revert"
    } else {
      //console.log(ref);
      //console.log('✅ Checkbox is not checked');
      var familyInfo = document.getElementsByClassName("familyHidden")[0]
      var familyInfoRow = document.getElementsByClassName("familyHiddenRow")[0]
      familyInfo.style = "display:none"
      familyInfoRow.style = "display:none"
    }
  }
  const handleClick1 = event => {
    if (ref1.current.checked) {
      var presentInfo = document.getElementsByClassName("presentHidden")[0]
      var presentInfoRow =
        document.getElementsByClassName("presentHiddenRow")[0]
      presentInfo.style = "display:revert"
      presentInfoRow.style = "display:revert"
    } else {
      var presentInfo = document.getElementsByClassName("presentHidden")[0]
      var presentInfoRow =
        document.getElementsByClassName("presentHiddenRow")[0]
      presentInfo.style = "display:none"
      presentInfoRow.style = "display:none"
    }
  }
  const handleClick2 = event => {
    if (ref2.current.checked) {
      var paidInfo = document.getElementsByClassName("paidHidden")[0]
      var paidInfoRow = document.getElementsByClassName("paidHiddenRow")[0]
      paidInfo.style = "display:revert"
      paidInfoRow.style = "display:revert"
    } else {
      var paidInfo = document.getElementsByClassName("paidHidden")[0]
      var paidInfoRow = document.getElementsByClassName("paidHiddenRow")[0]
      paidInfo.style = "display:none"
      paidInfoRow.style = "display:none"
    }
  }

  const handleClick3 = event => {
    if (ref3.current.checked) {
      var salaryInfo = document.getElementsByClassName("salaryHidden")[0]
      var salaryInfoRow = document.getElementsByClassName("salaryHiddenRow")[0]
      salaryInfo.style = "display:revert"
      salaryInfoRow.style = "display:revert"
    } else {
      var salaryInfo = document.getElementsByClassName("salaryHidden")[0]
      var salaryInfoRow = document.getElementsByClassName("salaryHiddenRow")[0]
      salaryInfo.style = "display:none"
      salaryInfoRow.style = "display:none"
    }
  }
  const [records, setRecords] = useState()

  const getEmployeeData = async () => {
    let data = await loadUser()
    setRecords(data)
    // console.log(data)
  }

  useEffect(() => {
    getEmployeeData()
  }, [records])

  // useEffect(() => {

  // console.log(records);

  // }, [records])

  const onButtonClick2 = (
    fmember,
    status,
    Nspouse,
    relationship,
    sDOB,
    c1Name,
    c1Gender,
    c1DOB,
    c2Name,
    c2Gender,
    c2DOB,
    fName,
    fDOB,
    mName,
    mDOB
) => {
    setModalIsOpen(true)
    setTimeout(() => {
                document.getElementById(
                    "common-modal"
                ).innerHTML = `  <table class="table table-bordered table-sm table-striped">
<thead>
<tr>
  <th class="text-center">Number of Family Members</th>
  <th class="text-center">Status</th>
  ${
    status === "married"
      ? `<th class="text-center">Spouse Details</th>
  <th class="c1-hide text-center">Child 1</th>
  <th class="c2-hide text-center">Child 2</th>`
      : ` <th class="text-center">Father Details</th>
  <th class="text-center">Mother Details</th>`
  }

</tr>
</thead>
<tbody>
<tr>
  <td>${fmember}</td>
  <td>${status}</td>
${
  status === "married"
    ? `
  <td>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Relationship</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${Nspouse}</td>
          <td>${relationship}</td>
          <td>${sDOB}</td>
        </tr>
      </tbody>
    </table>
  </td>

  <td class="c1-hide">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Gender</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${c1Name}</td>
          <td>${c1Gender}</td>
          <td>${c1DOB}</td>
        </tr>
      </tbody>
    </table>
  </td>
  <td class="c2-hide">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Gender</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${c2Name}</td>
          <td>${c2Gender}</td>
          <td>${c2DOB}</td>
        </tr>
      </tbody>
    </table>
  </td>`
    : `<td>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${fName}</td>
          <td>${fDOB}</td>
        </tr>
      </tbody>
    </table>
  </td>
  <td>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${mName}</td>
          <td>${mDOB}</td>
        </tr>
      </tbody>
    </table>
  </td>`
}

</tr>
</tbody>
</table>`
document.getElementById("heading").innerText = "Family Information"

// Conditions for hiding/showing children
if (c1Name === "" || c1Name === undefined) {
document.querySelectorAll(".c1-hide").forEach(i => {
  i.classList.add("d-none")
})
} else {
document.querySelectorAll(".c1-hide").forEach(i => {
  i.classList.remove("d-none")
})
}

if (c2Name === "" || c2Name === undefined) {
document.querySelectorAll(".c2-hide").forEach(i => {
  i.classList.add("d-none")
})
} else {
document.querySelectorAll(".c2-hide").forEach(i => {
  i.classList.remove("d-none")
})
}
}, 200)
}

  return (
    <>
      <div className="profileDiv">
        <h2 className="yprofile">Your profile</h2>
        <div className="email">
          <b> Email ID : {records === undefined ? "" : records.email}</b>
        </div>
        <div className="empname"> Welcome {records === undefined ? "" : records.name}</div>
      </div>

      <div className="check">
        <input
          type="checkbox"
          ref={ref}
          onClick={handleClick}
          id="check1"
          name="check1"
          className="check1"
        ></input>
        <label htmlFor="check1"> Show Family Information</label>
        <input
          type="checkbox"
          ref={ref1}
          onClick={handleClick1}
          id="check3"
          name="check3"
          value="days"
          className="check1"
        ></input>
        <label htmlFor="check3">Present no. of days</label>
        <input
          type="checkbox"
          ref={ref2}
          onClick={handleClick2}
          id="check4"
          name="check4"
          value="leaves"
        ></input>
        <label htmlFor="check4">Paid leaves</label>
        <input
          type="checkbox"
          ref={ref3}
          onClick={handleClick3}
          id="check2"
          name="check2"
          value="salary"
        ></input>
        <label htmlFor="check2">Show Salary Information</label>
      </div>

      <div className="profileTableDiv">
        <Table striped bordered hover size="sm" className="profileTable">
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Employee Name</th>
              <th>Designation</th>
              <th>Email Id</th>
              <th>Joining Date</th>
              <th className="familyHidden">Family Information</th>
              <th className="presentHidden">Present Days</th>
              <th className="paidHidden">Paid Leaves</th>
              <th className="salaryHidden">Salary Information</th>
            </tr>
          </thead>

          {records ? (
            <tbody>
              <tr>
                <td>{records.empId}</td>
                <td>{records.name}</td>
                <td>{records.designation}</td>
                <td>{records.email}</td>
                <td>{records.joiningDate}</td>
                <td className="familyHiddenRow">
                <button
                          id="modalbtn"
                          onClick={() =>
                            onButtonClick2(
                              records.numberOfMember,
                              records.status,
                              records.NameofSpouse,
                              records.relationship,
                              records.DOB,
                              records.child1,
                              records.child1Gender,
                              records.DOB1,
                              records.child2,
                              records.child2Gender,
                              records.DOB2,
                              records.NameofFather,
                              records.DOB3,
                              records.NameofMother,
                              records.DOB4
                            )
                          }
                        >
                          See Information{" "}
                        </button>
                </td>
                <td className="presentHiddenRow">0</td>
                <td className="paidHiddenRow">0</td>
                <td className="salaryHiddenRow">
                  <button id="modalbtn" onClick={() => setModal1IsOpen(true)}>
                    See Information
                  </button>
                </td>
              </tr>
            </tbody>
          ) : (
            ""
          )}
        </Table>
      </div>

      <Modal isOpen={modalIsOpen}>
            <h1 className="heading text-center pt-4" id="heading"></h1>
            <div className="familyInformation" id="common-modal"></div>
            <div>
              <button
                className="modalbtn"
                onClick={() => setModalIsOpen(false)}
              >
                Close
              </button>
            </div>
          </Modal>
      <Modal isOpen={modal1IsOpen}>
        <div className="familyInformation">
          <h1 className="heading">Salary Information</h1>
          <Table striped bordered hover size="sm" className="profileTable">
            <thead>
              <tr>
                <th>Basic Salary</th>
                <th>
                  HRA <br />
                  (House Rent Allowances)
                </th>
                <th>
                  CA <br />
                  (Conveyance Allowances)
                </th>
                <th>
                  SA <br />
                  (Special Allowances)
                </th>
                <th>Deduction-PT</th>
                <th>Deduction-PF</th>
                <th>Net Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>20000</td>
                <td>6000</td>
                <td>3500</td>
                <td>2000</td>
                <td>200</td>
                <td>1800</td>
                <td>29500</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div>
          <button className="modalbtn" onClick={() => setModal1IsOpen(false)}>
            Close
          </button>
        </div>
      </Modal>
    </>
  )
}
export default Profile1
