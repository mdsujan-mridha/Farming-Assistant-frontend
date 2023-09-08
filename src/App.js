import { Fragment } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Header/Navbar';
import Home from './component/Home/Home';
import Products from './component/Products/Products';
import Aboutus from './component/About/Aboutus';
import Login from './component/user/Login';
import Footer from './component/Home/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './component/user/Register';
import axios from 'axios';
import Profile from './component/user/Profile';
import ProductDetails from './component/Products/ProductDetails';


function App() {

  axios.defaults.withCredentials = true;


  return (
    <Fragment>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/about' element={<Aboutus />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='/products/:productId' element={<ProductDetails />}></Route>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
