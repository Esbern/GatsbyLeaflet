import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MyMap from "../components/map"
import WsGeoJSON from "./ws.json"

const MapPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the map page</h1>
     <MyMap GeoJSON ={WsGeoJSON}/>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MapPage
