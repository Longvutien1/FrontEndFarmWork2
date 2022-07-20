import React from 'react'
import HeaderAdmin from '../admin/HeaderAdmin'
import SideBar from '../admin/SideBarAdmin'

const AdminLayout = () => {
  return (
    <div>
        <HeaderAdmin/>
        <section style={{display:"flex"}}>
            <SideBar/>
        </section>
    </div>
  )
}

export default AdminLayout