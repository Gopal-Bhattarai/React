import "./App.css";
import { ToastContainer } from "react-toastify";

import {Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

import BillingList from "./component/BillingList";
import CarsList from "./component/CarsList";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";
import Contact from "./component/Contact";
import About from "./component/About";
import Header from "./component/Header";
import Styled from "./component/Styled";
import Toast from "./component/Toast";

function App() {
  const StyledDiv = styled.div`
    width: 100%;
    margin: 10px 30px;
  `;

  return (
    <div className="App">
    
      <Header />
      <div className="container1">
      <Sidebar />
        <StyledDiv> 
          <Routes>
            <Route path="/styled" element={<Styled />} />
            <Route path="/toast" element={<Toast />} />
            <Route path="/cars" element={<CarsList />} />
            <Route path="/about" element={<About /> } />
            <Route path="/billing" element={<BillingList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div><h1>Oops! Page not found !</h1></div>} />
          </Routes>

          <Footer />
        </StyledDiv>
      </div>


        <ToastContainer />

       
    </div>
  );
}

export default App;
