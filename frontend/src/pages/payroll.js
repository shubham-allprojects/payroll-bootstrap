import React from "react"
import Layout from "../components/Layout"

export default function payroll() {
  return (
    <>
      <Layout>
        {/* <div className="accountDiv">
          <h1 className="acc">Payroll</h1>
          <p className="accParagraph">
            Payroll accounting is essentially the calculation, management,
            recording, and analysis of employees' compensation. In addition,
            payroll accounting also includes reconciling for benefits, and
            withholding taxes and deductions related to compensation.
          </p>
        </div> */}
        <section
          id="payroll"
          className="payroll-div-wrapper wrapper-padding wrapper"
        >
          <div className="container-fluid">
            <h1 className="text-center">Payroll</h1>
            <div className="row">
              <div className="col-12">
                <p className="text-center p-lg-4 p-md-2 p-1">
                  Payroll accounting is essentially the calculation, management,
                  recording, and analysis of employees' compensation. In
                  addition, payroll accounting also includes reconciling for
                  benefits, and withholding taxes and deductions related to
                  compensation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
