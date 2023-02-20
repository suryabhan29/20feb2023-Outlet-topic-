// Import area

import React from 'react';
import { BrowserRouter,Routes, Route  } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Registar from './pages/Registar';


// defination area
export default function App() {
  return (
   <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}></Route>
                <Route path='login' element={<Login/>}></Route>
                <Route path='registar' element={<Registar/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Route>
        </Routes>
   </BrowserRouter>
  )
}
