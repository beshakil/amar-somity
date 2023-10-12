import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./components/Home";
import CustomerListData from "./components/CustomerListData";
import CustomerDetailsData from "./components/CustomerDetailsData";

  function AppRoutes() {
    return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customerlist" element={<CustomerListData />} />
      <Route path="/customerlist/:accountNo" element={<CustomerDetailsData />} />
    </Routes>
    );
  }
  
  function App() {
    return (
      <div>
        <main>
          <AppRoutes />
        </main>
      </div>
    );
  }

export default App;

