// import "./App.css";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./billing.css";

import BillingList from "./component/BillingList";
import CarsList from "./component/CarsList";
import Footer from "./component/Footer";

function App() {
  const [selectList, setSelectList] = useState("");
  return (
    <div className="App">
      <button onClick={() => setSelectList('carslist')}>Cars List</button>
      <button onClick={() => setSelectList('bilinglist')}>Billing List</button>
      
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
      {selectList==='carslist' && <CarsList />}
      {selectList==='bilinglist' && <BillingList /> }
      <Footer />
    </div>
  );
}

export default App;
