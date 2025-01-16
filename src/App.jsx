import ViewCustomerSummary from "./Components/Customer/ViewCustomerSummary";
import Home from "./Components/Home";
// import Leftbar from "./Components/Leftbar/Leftbar";
import Login from "./Components/Login/Login";
// import Navbar from "./Components/Navbar/Navbar";
// import Sidebar from "./Components/Sidebar/Sidebar";
import Otp from "./Components/Login/Otp";
import LandingPage from "./Components/LandingPage/LandingPage";
import AddCustomer from "./Components/Customer/AddCustomers";
import AddAccount from "./Components/Account/AddAccounts";
import AddTransport from "./Components/Transport/AddTransports";
import EditCustomer from "./Components/Customer/EditCustomer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewAccountsSummary from "./Components/Account/ViewAccountSummary";
import ViewTransportSummary from "./Components/Transport/ViewTransportSummary";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/otp" element={<Otp />} />
          <Route exact path="/landing-page" element={<LandingPage />} />
          <Route exact path="/add-customer" element={<AddCustomer />} />
          <Route exact path="/add-account" element={<AddAccount />} />
          <Route exact path="/add-transport" element={<AddTransport />} />
          <Route exact path="/view-account" element={<ViewAccountsSummary />} />
          <Route
            exact
            path="/view-transport"
            element={<ViewTransportSummary />}
          />
          <Route
            exact
            path="/view-customer"
            element={<ViewCustomerSummary />}
          />
          <Route exact path="/edit-customer" element={<EditCustomer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
