import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import Summary from "../components/summary"

const IndexPage = () => (
  // <Header />
  <Layout>
    <SEO title="Home" />
    <Summary />
  </Layout>
)

export default IndexPage
