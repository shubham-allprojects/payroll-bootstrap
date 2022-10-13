import React from "react"
import Layout from "../components/Layout"

export default function marketing() {
  return (
    <div>
      <Layout>
        <div className="marketingDiv">
          <h3 className="marketingHead">
            As commerce continues to evolve, so do the ways that it’s conducted
          </h3>
          <img src="/v2.webp" alt="eccomerceimg" className="marketingimg" />
          <p>
            Lead generation is the process of gaining the interest of potential
            customers in order to increase future sales. It is a crucial part of
            the sales process of many companies. A lead is anyone who has shown
            interest in a company's products or services but may not yet be
            qualified to buy.
          </p>
        </div>
      </Layout>
    </div>
  )
}
