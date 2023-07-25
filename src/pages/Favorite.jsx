import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ContactTable from '../components/ContactTable'
import FavTable from '../components/FavTable'

const Favorite = () => {
  return (
    <div>
        <Navbar/>
        <Sidebar />
      <div className="px-4 ml-0 md:ml-64 mt-16">
        <FavTable />
      </div>
    </div>
  )
}

export default Favorite