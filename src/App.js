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
    component: (key) => <CarsList key={key} />
  },
  {
    name: 'bilinglist',
    title: 'Billing List',
    component: (key) => <BillingList key={key} />
  },
  {
    name: 'todolist',
    title: 'Todo List',
    component: (key) => <h2 key={key}>Not yet created</h2>
  },
  {
    name: 'about',
    title: 'About',
    component: (key) => <h2 key={key}>Not yet created</h2>
  },
  {
    name: 'contact',
    title: 'Contact Us',
    component: (key) => <h2 key={key}>Not yet created</h2>
  },
]
  return (
    <div className="App">
      <div>
      {LISTS.map(list => (<button key={list.name} 
      className={selectList === list.name 
      ? 'selected':''} onClick={() => setSelectList(list.name)}>
        {list.title}</button>))}
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
        <div>
        {LISTS.map(list => (
          list.name === selectList ? list.component(list.name) : null
        ))}
        </div>
      {/* {selectList==='carslist' && <CarsList />}
      {selectList==='bilinglist' && <BillingList /> } */}
      <Footer />
    </div>
  );
}

export default App;
