// import "./App.css";
import { ToastContainer } from "react-toastify";
import "./billing.css";

import BillingList from "./component/BillingList";
// import CarsList from "./component/CarsList";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
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
      {/* <CarsList /> */}
      <BillingList />
      <Footer />
    </div>
  );
}

export default App;
