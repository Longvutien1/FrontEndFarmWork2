import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import WebsiteLayout from './components/layout/WebsiteLayout'
import AdminLayout from './components/layout/AdminLayout'
import { Navigate, Route, Routes } from 'react-router-dom'
import ListProduct from './pages/admin/products/list'
import AddProduct from './pages/admin/products/add'
import EditProduct from './pages/admin/products/edit'
import ListCategory from './pages/admin/category/list'
import AddCategory from './pages/admin/category/add'
import EditCategory from './pages/admin/category/edit'
import HomePage from './pages/Home'
import DetailProduct from './pages/DetailProduct'
import CartPage from './pages/Cart'
import { CartProvider } from 'react-use-cart'
import Login from './pages/Login'
import Register from './pages/Register'
import ListPhuKien from './pages/admin/phuKien/list'
import ListLinhKien from './pages/admin/linhKien/linhKien'
import PrivateRoute from './midlerware/PrivateRoute'
import ListOrder from './pages/admin/order/list'
import DetailOrder from './pages/admin/order/detail'
import AddPhuKien from './pages/admin/phuKien/add'



function App() {
  const [count, setCount] = useState(0)


  const newLocal = "auto"
  return (
    <div >
      <Routes>

        <Route path='/' element={<CartProvider><WebsiteLayout /></CartProvider>}>
          <Route index element={<HomePage />} />
          <Route path='/detail/:id' element={<DetailProduct />} />
          <Route path='/cart' element={<CartPage />} />


        </Route>

        <Route path='/login' element={<Login />} />

        <Route path='/register' element={<Register />} />

        <Route path='/admin' element={<PrivateRoute><AdminLayout /></PrivateRoute>}>
          <Route index element={<Navigate to={"product"} />} />
          <Route path='product'>
            <Route index element={<ListProduct />} />

            <Route path='add' element={<AddProduct />} />
            <Route path='edit/:id' element={<EditProduct />} />

          </Route>
          <Route path='categories'>
            <Route index element={<Navigate to={"phone"} />} />
            <Route path='add' element={<AddCategory />} />
            <Route path='edit/:id' element={<EditCategory />} />
            <Route path='phone'>
              <Route index element={<ListCategory />} />
              
            </Route>

            <Route path='phuKien'>
              <Route index element={<ListPhuKien />} />
              <Route path='add' element={<AddPhuKien />} />
            </Route>

            <Route path='linhKien'>
              <Route index element={<ListLinhKien />} />
            </Route>

          </Route>
          
          <Route path='order'>
            <Route index element={<ListOrder />} />
            <Route path='add' element={<AddProduct />} />
            <Route path='detail/:id' element={<DetailOrder />} />

          </Route>


        </Route>
      </Routes>
    </div>
  )
}

export default App
