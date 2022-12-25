import "./App.css";
import { ToastContainer } from "react-toastify";

import {Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

import BillingList from "./component/BillingList/BillingList";
import CarsList from "./component/CarsList/CarsList";
import Footer from "./component/Footer";
// import Sidebar from "./component/Sidebar";
import Contact from "./component/Contact";
import About from "./component/About";
// import Header from "./component/Header";
// import Styled from "./component/Utils/Styled";
import Toast from "./component/Utils/Toast";
import SelectBox from "./component/Utils/SelectBox";
import Todo from "./component/Todo/Todo";
import NewsHome from "./component/News/NewsHome";
import InotesHome from "./component/iNotesApp/InotesHome";

const StyledDiv = styled.div`
width: 100%;
margin: 0px 0px;
`;

function App() {
  return (
    <div className="App">
    
      {/* <Header /> */}
      {/* <div className="container1"> */}
      {/* <Sidebar /> */}
        <StyledDiv> 
          <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/inotes" element={<InotesHome />} />
            <Route path="/news" element={<NewsHome />} />
            <Route path="/todo" element={<Todo  />} />
            <Route path="/select" element={<SelectBox />} />
            {/* <Route path="/styled" element={<Styled />} /> */}
            <Route path="/toast" element={<Toast />} />
            <Route path="/cars" element={<CarsList />} />
            <Route path="/about" element={<About /> } />
            <Route path="/billing" element={<BillingList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div><h1>Oops! Page not found !</h1></div>} />
          </Routes>

          <Footer />
        </StyledDiv>
      {/* </div> */}


        <ToastContainer />

       
    </div>
  );
}

export default App;
