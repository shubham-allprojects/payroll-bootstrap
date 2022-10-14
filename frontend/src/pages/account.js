import React from "react"
import Layout from "../components/Layout"

export default function account() {
  return (
    <Layout>
      {/* <div className="accountDiv">
        <h1 className="acc">Accounting</h1>
        <p className="accParagraph">
          Accounting is the process of recording, analyzing, summarizing, and
          interpreting the financial information of a business organization.
          Accounting information thus generated is of use to the stakeholders of
          the company, namely the employees, shareholders, creditors, banks and
          other lenders, regulatory agencies and tax authorities, etc. It is the
          only way or language through which the organization can communicate
          with the internal and external world.
        </p>
      </div> */}

      <section id="account" className="account-wrapper wrapper-padding wrapper">
        <div className="container-fluid">
          <h1 className="text-center">Accounting</h1>
          <div className="row">
            <div className="col-12">
              <p className="text-center p-lg-4 p-md-2 p-1">
                Accounting is the process of recording, analyzing, summarizing,
                and interpreting the financial information of a business
                organization. Accounting information thus generated is of use to
                the stakeholders of the company, namely the employees,
                shareholders, creditors, banks and other lenders, regulatory
                agencies and tax authorities, etc. It is the only way or
                language through which the organization can communicate with the
                internal and external world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
