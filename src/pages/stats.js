import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Twitter from "../components/twitter"

const IndexPage = () => (
  <Layout>
    <SEO title="Statistics" />
    <h2>Phone usage</h2>
    <ul className="unstyled">
        <li>
            <Twitter tweet="1029513546311327744"/>
        </li>
        <li>
            <Twitter tweet="1134098731446521856"/>
        </li>
    </ul>
    <h2>Hands free calls</h2>
    <ul className="unstyled">
        <li>
            <Twitter tweet="1169761971799023616"/>
        </li>
    </ul>
    <h2>Insurance &amp; "Road Tax"</h2>
    <ul className="unstyled">
      <li>
        <Twitter tweet="1173908894822928386"/>
      </li>
    </ul>
    <h2>Enforcement</h2>
    <ul className="unstyled">
      <li>
        <Twitter tweet="1176509295652999169"/>
      </li>
      <li>
        <Twitter tweet="1169856215012147200"/>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
