import React from "react"

import Layout from "../components/layout"
import Banner from '../components/banner';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { fas } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faAngleRight)



const IndexPage = () => (
  <Layout>
    <Banner />
  </Layout>
)

export default IndexPage
