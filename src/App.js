import { Fragment } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Header/Navbar';
import Home from './component/Home/Home';
import Products from './component/Products/Products';
import Aboutus from './component/About/Aboutus';



function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/about' element={<Aboutus />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
