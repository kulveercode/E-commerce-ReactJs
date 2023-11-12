import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import NoPage from './pages/no page/NoPage';
import Dashboard from './pages/admin/dashboard/Dashboard';
import MyState from './context/data/MyState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer} from "react-toastify";


function App() {
  return (
    <MyState>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/order' element={
          <ProtectedRoutes>
            <Order />
          </ProtectedRoutes>
        } />
        <Route path='/cart' element={<Cart />} />
        <Route path='/dashboard' element={
          <ProtectedRoutesForAdmin>
            <Dashboard />
          </ProtectedRoutesForAdmin>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/productinfo:id' element={<ProductInfo />} />
        <Route path='/addproduct' element={
          <ProtectedRoutesForAdmin>
            <AddProduct />
          </ProtectedRoutesForAdmin>
        } />
        <Route path='/updateproduct' element={
          <ProtectedRoutesForAdmin>
            <UpdateProduct />
          </ProtectedRoutesForAdmin>
        } />
        <Route path='/*' element={<NoPage />} />
      </Routes>
      <ToastContainer />
    </Router>
    </MyState>
  )
}

export default App;

// user 
export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('currentUser')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

// admin 
export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'kulveer.singh@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}