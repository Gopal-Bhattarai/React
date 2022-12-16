import "./App.css";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
// import "./billing.css";
import {Route, Routes, Link, NavLink } from 'react-router-dom'


import BillingList from "./component/BillingList";
import CarsList from "./component/CarsList";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";

function App() {
  const [selectList, setSelectList] = useState("");

  return (
    <div className="App">
      



      <div className="container1">
      <Sidebar />
        <div style={{ width: "100%" }}> 
          <Routes>
            <Route path="/" element={<BillingList />} />
            <Route path="/cars" element={<CarsList />} />
            <Route path="/cars/tesla" element={<div>TESLA</div> } />
            <Route path="/billing" element={<BillingList />} />
            <Route path="*" element={<div><h1>Oops! Page not found !</h1></div>} />
          </Routes>
        </div>
      </div>


        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />

       <Footer />
    </div>
  );
}

export default App;
