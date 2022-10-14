import React from "react"
import { Link } from "gatsby"
import { isLoggedIn } from "../services/auth"
import Layout from "../components/Layout"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Carousel from "react-bootstrap/Carousel"

export default function Home() {
  return (
    <Layout>
      {/* <p>{isLoggedIn() ? <>{}</> : <></>}</p> */}

      {/* <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="/imgg4.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3 className="carouselHeading">UVXCEL - UNITED WE EXCEL!</h3>
            <p className="carouselPara">
              {" "}
              {} Payroll management system of uvXcel provides the detailed
              information of payroll of every employee anytime anywhere.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/account.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className="carouselHeading">Accounting and Payroll</h3>
            <p className="carouselPara">
              Payroll accounting is essentially the calculation, management,
              recording, and analysis of employees' compensation. In addition,
              payroll accounting also includes reconciling for benefits, and
              withholding taxes and deductions related to compensation.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/eccom.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h3 className="carouselHeading">Ecommerce</h3>
            <p className="carouselPara">
              eCommerce Product Development and Integration eCommerce Platform
              Analysis, Fitment, Recommendations eCommerce Platform Services and
              Implementation Omni-Channel Implementation Integrations with Back
              office Systems like WMS, OMS, ERP, Logistics
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/project.jpg"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3 className="carouselHeading">Projects</h3>
            <p className="carouselPara">
              1. React Js 2. Mongo DB Read More 3. Business Intelligence 4.
              Application Development 5. Data Architecture
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/marketing.jpg"
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <h3 className="carouselHeading">Marketing and New Leads</h3>
            <p className="carouselPara">
              Lead generation is the process of gaining the interest of
              potential customers in order to increase future sales. It is a
              crucial part of the sales process of many companies. A lead is
              anyone who has shown interest in a company's products or services
              but may not yet be qualified to buy.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
      <section id="home-carousel" className="home-carousel-wrapper">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
            ></li>
            <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
            ></li>
            <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
            ></li>
            <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
            ></li>
            {/* <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
            ></li> */}
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="/imgg4.jpg" alt="First slide" />{" "}
              <div class="carousel-caption first-slide-carousel-caption d-none d-md-block">
                <h1 className="fw-bolder">UVXCEL - UNITED WE EXCEL!</h1>
                <p className="fw-bold">
                  Payroll management system of uvXcel provides the detailed
                  information of payroll of every employee anytime anywhere.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="/account.jpg"
                alt="Second slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Accounting and Payroll</h5>
                <p>
                  Payroll accounting is essentially the calculation, management,
                  recording, and analysis of employees' compensation.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/eccom.jpg" alt="Third slide" />{" "}
              <div class="carousel-caption d-none d-md-block">
                <h5>Ecommerce</h5>
                <p>
                  eCommerce Product Development and Integration eCommerce
                  Platform Analysis, Fitment, Recommendations eCommerce Platform
                  Services and Implementation Omni-Channel Implementation
                  Integrations with Back office Systems like WMS, OMS, ERP,
                  Logistics
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="/project.jpg"
                alt="Fourth slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Projects</h5>
                <p>
                  1. React Js 2. Mongo DB 3. Business Intelligence 4.
                  Application Development 5. Data Architecture
                </p>
              </div>
            </div>
            {/* <div class="carousel-item">
              <img
                class="d-block w-100"
                src="/marketing.jpg"
                alt="Fifth slide"
              />
            </div> */}
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>
      </section>
      {/* <section className="name h-100">
        <div className="text">
          <h2>Welcome to DMS for uvXcel</h2>
          <p>
            Document Managment System for uvXcel provides easy access to all the
            important documents anytime anywhere. uvXcel It Solutions Private
            Limited is a Private incorporated on 18 August 2020. It is
            classified as Non-govt company and is registered at Registrar of
            Companies, Pune.
          </p>
          {}
        </div>
        <img src="/hero-img.png" alt="site banner" class="img" />
      </section> */}
      <section id="dms" className="dms-wrapper wrapper-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <h2>Welcome to DMS for uvXcel</h2>
              <p>
                Document Managment System for uvXcel provides easy access to all
                the important documents anytime anywhere. uvXcel It Solutions
                Private Limited is a Private incorporated on 18 August 2020. It
                is classified as Non-govt company and is registered at Registrar
                of Companies, Pune.
              </p>
            </div>
            <div className="col-lg-6 col-md-4 mt-4 mt-md-0">
              <div className="text-md-end text-center img-div-dms">
                <img
                  src="/hero-img.png"
                  alt="site banner"
                  class="dms-img img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
