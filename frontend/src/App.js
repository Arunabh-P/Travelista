import "./App.css";
import Login from "./Components/user/Login/Login"
import Signup from "./Components/user/Register/SignUp";
import Header from "./Components/user/Header/CommonHeader"
import Home1 from "./Components/user/HomePage/Home";
import Home from "./Components/user/Home/Home"
import AdminHome from "./Components/admin/AdminHome";
// import UserProfilePage from "./Components/user/UserProfilePage/UserProfilePage"

import AdminLogin from "./Components/admin/AdminLogin";
import Userupdate from "./Components/admin/Userupdate";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react"
import { loadUser } from "./Actions/User";
import Account from "./Components/user/Account/Account";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  },[dispatch])

  const {isAuthenticated} = useSelector((state)=>state.user)
  return (
    



    <Router>
      {isAuthenticated &&  <Header /> }
     
      <Routes>
        <Route path="/home1" element={<Home1 />} />

        <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
        <Route path="/account" element={ isAuthenticated ? <Account /> : <Login /> } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminHome />}></Route>
        <Route path="/edit/:id" element={<Userupdate />}></Route>
        <Route path="/adminlogin" element={<AdminLogin />}></Route>
        {/* <Route path="/userProfilePage" element={<UserProfilePage />}> </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
