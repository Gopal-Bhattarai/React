// import "./App.css";
import "./billing.css";

import BillingList from "./component/BillingList";
import CarsList from "./component/CarsList";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      {/* <CarsList /> */}
      <BillingList />
      <Footer />
    </div>
  );
}

export default App;
