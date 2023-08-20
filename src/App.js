import React, {useContext,useState} from "react"
import { BrowserRouter,Routes, Route,Navigate,Redirect } from "react-router-dom";

import Register from "./register"
import Login from "./login";
import WalletOverView  from "./walletOverview";
import Affliate from "./affliate"
import Profile from "./profile"
import Referral from "./referral";

import Mytip from "./mytip"
import Virc from "./vorc"
import About from "./about"
import Contact from "./contact"
import TermsAndCondition from "./termsAndCondition"
import Disclaimer from "./disclaimer"
import "./App.css"
import Mobile from "./mobileheader"
import SampleHome from "./home2"
import Premium from "./premium"
import SportPage from "./sportsPage"
import ForexPage from "./forexPage"
import CryptoPage from "./cryptoPage"
import BinaryPage from "./binarypage"
import TipSterDashboard from "./tipStarDashboard"
// import Airtime from "./airtime"
import ForgotPassword from "./forgetpassword"
import OTP from "./otp"
import Success from "./success"
import TipsterWallet from "./tipsterWallet"
import ResetPassword from "./resetPassword"
import UsersWallet from "./tipsWallet"
import { AuthContext } from './context/authContext';


import Admin from "./admin"
import AdminLogin from "./adminLogin"
import Navbar from "./navbar"
import TipsWallet from "./tipsterWallet";
import ProfilePageFile from "./profilePage"

import DashboardHome from "./Dashboard/dashboardHome"
// import { Link, useLocation } from "react-router-dom";

function App() {

  const [admin,setAdmin] = useState(true)
  const { currentUser } = useContext(AuthContext);

  const tr = window.location.pathname;
  // const navigate = useLocation();
  return (
    <div>
       <BrowserRouter>
        {tr === "/dashboard" ? " " : <> <Navbar/>
       <Mobile/></>}
    
        <Routes>
           <Route path="/" element={<SampleHome/>} />
           <Route path="/register" element={<Register/>} />
           <Route path="/login" element={<Login/>} />
          {currentUser ? <Route path="/wallet" element={<WalletOverView />} /> : <Route path="/" element={<SampleHome />} />}   
           <Route path="/affliate" element={<Affliate/>} />
          {currentUser ? <Route path="/profile" element={<Profile />} /> : <Route path="/" element={<SampleHome />} /> } 
          {!currentUser ? <Route path="/forgotpassword" element={<ForgotPassword />} /> : <Route path="/" element={<SampleHome />} /> } 
          {!currentUser ? <Route path="/otp" element={<OTP />} /> : <Route path="/" element={<SampleHome />} />} 
          {!currentUser ? <Route path="/success" element={<Success />} /> : <Route path="/" element={<SampleHome />} />} 
          <Route path="/referral/:id" element={<Referral />} />
        <Route path="/resetpassword/:id" element={<ResetPassword />} />
           <Route path="/forex" element={<ForexPage/>} />
           <Route path="/cryptocurrency" element={<CryptoPage/>} />
            <Route path="/binary" element={<BinaryPage/>} />
          <Route path="/sport" element={<SportPage />} />
          {currentUser ? <Route path="/tip" element={<Mytip />} /> : <Route path="/" element={<SampleHome />} /> } 
           <Route path="/betcalculator" element={<Virc/>} />
           <Route path="/about" element={<About/>} />
           <Route path="/premium" element={<Premium/>} />
           <Route path="/" element={<SampleHome/>} />
          	<Route path="*" element={<Navigate to="/" />} />
          {admin === true ? <Route path="/dashboard" element={< DashboardHome />} /> : <Route path="/" element={<SampleHome />} />} 
           <Route path="/contact" element={< Contact />} />
           <Route path="/disclaimer" element={< Disclaimer/>} />
          {/* <Route path="/airtime" element={<Airtime />} /> */}
           <Route path="/termscondition" element={<TermsAndCondition  />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/login" element={<AdminLogin/>} />
          <Route path="/tipster" element={<TipSterDashboard />} />
          <Route path="/tipsterWallet" element={<TipsWallet />} />
          <Route path="/userWallet" element={<UsersWallet />} />
          <Route path="/view-profile" element={<ProfilePageFile />} />
         
         
         
         
        </Routes>
       
       </BrowserRouter>
      
       </div>
 
  )

}

export default App;
