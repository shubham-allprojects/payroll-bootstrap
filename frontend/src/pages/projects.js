import React from "react"
import Layout from "../components/Layout"

export default function projects() {
  return (
    <>
      <Layout>
        {/* <div className="projectDiv">
          <h2 className="ProjectCls">Projects</h2>
          <p className="ProjectCls">
            1. React Js <a href="#">Read More</a>
          </p>
          <p className="ProjectCls">
            2. Mongo DB <a href="#">Read More</a>
          </p>
          <p className="ProjectCls">
            3. Business Intelligence <a href="#">Read More</a>
          </p>
          <p className="ProjectCls">
            4. Application Development <a href="#">Read More</a>
          </p>
          <p className="ProjectCls">
            5. Data Architecture <a href="#">Read More</a>
          </p>
        </div> */}
        <section
          id="projects"
          className="projects-wrapper wrapper wrapper-padding"
        >
          <div className="container">
            <h1 className="text-center">Projects</h1>
            <div className="row">
              <div className="col-12">
                <div>
                  <ul className="list-unstyled">
                    <li>
                      <p>
                        1. React Js <a href="#">Read More</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        2. Mongo DB <a href="#">Read More</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        3. Business Intelligence <a href="#">Read More</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        4. Application Development <a href="#">Read More</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        5. Data Architecture <a href="#">Read More</a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
