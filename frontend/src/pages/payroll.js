import React from "react"
import Layout from "../components/Layout"

export default function payroll() {
  return (
    <div>
      <Layout />
      <div className="accountDiv">
      <h1 className="acc">Payroll</h1>
      <p className="accParagraph">
        Payroll accounting is essentially the calculation, management,
        recording, and analysis of employees' compensation. In addition, payroll
        accounting also includes reconciling for benefits, and withholding taxes
        and deductions related to compensation.
      </p>
      </div>
    </div>
  )
}
