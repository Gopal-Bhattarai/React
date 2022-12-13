// import "./App.css";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./billing.css";

import BillingList from "./component/BillingList";
import CarsList from "./component/CarsList";
import Footer from "./component/Footer";

function App() {
  const [selectList, setSelectList] = useState("");
  const LISTS = [{
    name: 'carslist',
    title: 'Cars List',
    component: <CarsList />
  },
  {
    name: 'bilinglist',
    title: 'Billing List',
    component: <BillingList />
  },
  {
    name: 'todolist',
    title: 'Todo List',
    component: <h2>Not yet created</h2>
  },
  {
    name: 'about',
    title: 'About',
    component: <h2>We are students from TechAxle</h2>
  },
  {
    name: 'contact',
    title: 'Contact Us',
    component: <h2>Contact us for further information</h2>
  },
]
  return (
    <div className="App">
      {LISTS.map(list => (<button key={list.name} 
      className={selectList === list.name 
      ? 'selected':''} onClick={() => setSelectList(list.name)}>
        {list.title}</button>))}
      

      
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
        {LISTS.map(list => (
          list.name === selectList ? list.component : null
        ))}
      {/* {selectList==='carslist' && <CarsList />}
      {selectList==='bilinglist' && <BillingList /> } */}
      <Footer />
    </div>
  );
}

export default App;
