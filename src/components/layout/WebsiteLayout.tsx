import React from 'react'
import Accessory from '../Accessory'
import Banner from '../Banner'
import ComputerAccessory from '../ComputerAccessory'
import Footer from '../Footer'
import Header from '../Header'
import ListProduct from '../ListProduct'
import Sidebar from '../Sidebar'

const WebsiteLayout = () => {
    return (
        <div>
            <Header />
            <section style={{ width: "80%", margin: "10px auto", display: "flex", }}>
                <Sidebar />
                <Banner />
               
            </section>

            <section style={{width:"90%", margin:"30px auto"}}>
             <ListProduct/>
            </section>

            <section style={{width:"80%", margin:"30px auto"}}>
                <Accessory/>
            </section>
            <section style={{width:"80%", margin:"30px auto"}}>
                <ComputerAccessory/>
            </section>

                <Footer/>
        </div>
    )
}

export default WebsiteLayout