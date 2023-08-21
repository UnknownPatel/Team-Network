import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./signInPage";
import SignUpPage from "./signUpPage";
import AgencyListing from "./agencyListing";
import ApprovedAgencyList from "./approvedAgencyList";
import AgencyHomepage from "./Admin/agencyHomepage";
import ListOfVendors from "./Admin/listOfVendors";
import AgencyProfile from "./Admin/agencyProfile";
import VendorDashboard from "./Vendor/vendorDashboard";
import OnBanchResources from "./Admin/onBanchResources";
import OnBoardResources from "./Admin/onBoardResources";
import VendorOnBenchResources from "./Vendor/vendorOnBenchResources";
import VendorOnBoardedResources from "./Vendor/vendorOnBoardedResources";
import VendorHomePage from "./Vendor/vendorHomePage";
import VendorBill from "./Vendor/vendorBill";
import AdminBill from "./Admin/adminBill";
import VendorReg from "./Vendor/vendorReg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignInPage />} />
          <Route exact path="/signUpPage" element={<SignUpPage />} />
          <Route
            exact
            path="/superAdminDashboard"
            element={<AgencyListing />}
          />
          <Route
            exact
            path="/approvedAgencyList"
            element={<ApprovedAgencyList />}
          />
          <Route
            exact
            path="/:agency_id/:agency_name/agencyHomePage"
            element={<AgencyHomepage />}
          />
          <Route
            exact
            path="/:agency_id/:agency_name/listOfVendor"
            element={<ListOfVendors />}
          />
          <Route
            exact
            path="/:agency_id/:agency_name/agencyProfile"
            element={<AgencyProfile />}
          />
          <Route
            exact
            path="/vendorDashboard/:agencyId"
            element={<VendorDashboard />}
          />
          <Route
            exact
            path="/:agency_id/:agency_name/agency_onBanch"
            element={<OnBanchResources />}
          />
          <Route
            exact
            path="/:agency_id/:agency_name/agency_onBoard"
            element={<OnBoardResources />}
          />
          <Route
            exact
            path="/vendor_onBanch/:agencyId"
            element={<VendorOnBenchResources />}
          />
          <Route
            exact
            path="/vendor_onBoard/:agencyId"
            element={<VendorOnBoardedResources />}
          />
          <Route exact path="/vendor_homePage" element={<VendorHomePage />} />
          <Route exact path="/vendor_bill/:agencyId" element={<VendorBill />} />
          <Route
            exact
            path="/:agency_id/:agency_name/admin_bill"
            element={<AdminBill />}
          />
          <Route exact path="/vendor_reg" element={<VendorReg />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
