import React from "react"
import Layout from "../components/Layout"

export default function projects() {
  return (
    <div>
      <Layout>
        <div className="projectDiv">
          <h2 className="ProjectCls">Projects</h2>
          <p className="ProjectCls">1. React Js <a href="#">Read More</a></p>
          <p className="ProjectCls">2. Mongo DB <a href="#">Read More</a></p>
          <p className="ProjectCls">3. Business Intelligence <a href="#">Read More</a></p>
          <p className="ProjectCls">4. Application Development <a href="#">Read More</a></p>
          <p className="ProjectCls">5. Data Architecture <a href="#">Read More</a></p>
        </div>
      </Layout>
    </div>
  )
}
