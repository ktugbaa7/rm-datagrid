import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import DataGrid from '../components/DataGrid/Grid'

function Homepage() {
  return (
    <div className="homepage">
        <Navbar />
        <DataGrid />
    </div>
  )
}

export default Homepage