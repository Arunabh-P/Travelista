import "./App.css";
import Login from "./Components/user/Login/Login"
// import Signup from "./Components/user/Register/SignUp";
import Header from "./Components/user/Header/CommonHeader"
import Home1 from "./Components/user/HomePage/Home";
import Home from "./Components/user/Home/Home"
import AdminHome from "./Components/admin/AdminHome";
import Proposal from "./Components/user/Proposal/Proposal"
// import UserProfilePage from "./Components/user/UserProfilePage/UserProfilePage"

import AdminLogin from "./Components/admin/AdminLogin";
import Userupdate from "./Components/admin/Userupdate";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"
import { loadUser } from "./Actions/User";
import Account from "./Components/user/Account/Account";
import NewPost from "./Components/user/NewPost/NewPost";
import Register from "./Components/user/Register/Register"
import UpdateProfile from "./Components/user/UpdateProfile/UpdateProfile"
import UpdatePassword from "./Components/user/UpdatePassword/UpdatePassword"
import ForgotPassword from "./Components/user/ForgotPassword/ForgotPassword";
import ResetPassword from "./Components/user/ResetPassword/ResetPassword";
import UserProfile from "./Components/user/UserProfile/UserProfile";
import Search from "./Components/user/Search/Search"
import NotFound from "./Components/user/NotFound/NotFound";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch])

  const { isAuthenticated } = useSelector((state) => state.user)
  return (




    <Router>
      {isAuthenticated && <Header />}

      <Routes>
        <Route path="/home1" element={<Home1 />} />

        <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
        <Route path="/account" element={isAuthenticated ? <Account /> : <Login />} />
        <Route path="/register" element={isAuthenticated ? <Account /> : <Register />} />

        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/admin" element={<AdminHome />}></Route>
        <Route path="/edit/:id" element={<Userupdate />}></Route>
        <Route path="/adminlogin" element={<AdminLogin />}></Route>

        <Route path="/newpost"
          element={isAuthenticated ? <NewPost /> : <Login />}
        />

        <Route path="/update/profile"
          element={isAuthenticated ? <UpdateProfile /> : <Login />}
        />

<Route path="/update/password"
          element={isAuthenticated ? <UpdatePassword /> : <Login />}
        />

<Route path="/forgot/password"
          element={isAuthenticated ? <UpdatePassword /> : <ForgotPassword />}
        />

<Route path="/password/reset/:token"
          element={isAuthenticated ? <UpdatePassword /> : <ResetPassword />}
        />

<Route path="/user/:id"
          element={isAuthenticated ? <UserProfile /> : <Login />}
        />

        <Route path="/search" element={<Search />} />

        <Route path="/proposal"
          element={isAuthenticated ? <Proposal /> : <Login />}
        />
        

        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App;
