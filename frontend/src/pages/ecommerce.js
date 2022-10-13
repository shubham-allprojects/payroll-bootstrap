import React from 'react'
import Layout from '../components/Layout'

export default function ecommerce() {
  return (
    <Layout>
    <div> 
          <h1 className='ecommH1'>Ecommerce</h1>
          <div className='ecommerceDiv'> 
          <ul>
            <li>eCommerce Product Development and Integration</li>
            <li>eCommerce Platform Analysis, Fitment, Recommendations</li>
            <li>eCommerce Platform Services and Implementation</li>
            <li>Omni-Channel Implementation</li>
            <li>Integrations with Backoffice Systems like WMS, OMS, ERP, Logistics</li>
          </ul>
          <img src="/ecommerce.png" alt="site banner"/>
          </div>
    </div>
    </Layout>
  )
}
