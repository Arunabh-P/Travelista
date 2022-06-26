import "./App.css";
import { useEffect, lazy, Suspense} from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./Actions/User";
const Loader = lazy(()=> import("./Components/Loader/Loader"));

const Login = lazy(()=>import("./Components/user/Login/Login"))
const Header = lazy(()=>import("./Components/user/Header/CommonHeader"))
const Home  = lazy(()=>import("./Components/user/Home/Home"))
const ProposalForm = lazy(()=>import("./Components/user/Proposal/ProposalForm"))
const Messenger = lazy(()=>import("./Components/user/Messenger/Messenger"))
const Account = lazy(()=>import( "./Components/user/Account/Account"))
const NewPost = lazy(()=>import("./Components/user/NewPost/NewPost"))
const Register = lazy(()=>import("./Components/user/Register/Register"))
const UpdateProfile = lazy(()=>import("./Components/user/UpdateProfile/UpdateProfile"))
const UpdatePassword = lazy(()=>import("./Components/user/UpdatePassword/UpdatePassword"))
const ForgotPassword = lazy(()=>import("./Components/user/ForgotPassword/ForgotPassword"))
const ResetPassword = lazy(()=>import("./Components/user/ResetPassword/ResetPassword"))
const UserProfile = lazy(()=>import("./Components/user/UserProfile/UserProfile"))
const Search = lazy(()=>import("./Components/user/Search/Search"))
const NotFound = lazy(()=>import("./Components/user/NotFound/NotFound"))



// import Login from "./Components/user/Login/Login"
// import Header from "./Components/user/Header/CommonHeader"
// import Home from "./Components/user/Home/Home"
// import ProposalForm from "./Components/user/Proposal/ProposalForm"
// import Messenger from "./Components/user/Messenger/Messenger";
// import Account from "./Components/user/Account/Account";
// import NewPost from "./Components/user/NewPost/NewPost";
// import Register from "./Components/user/Register/Register"
// import UpdateProfile from "./Components/user/UpdateProfile/UpdateProfile"
// import UpdatePassword from "./Components/user/UpdatePassword/UpdatePassword"
// import ForgotPassword from "./Components/user/ForgotPassword/ForgotPassword";
// import ResetPassword from "./Components/user/ResetPassword/ResetPassword";
// import UserProfile from "./Components/user/UserProfile/UserProfile";
// import Search from "./Components/user/Search/Search"
// import NotFound from "./Components/user/NotFound/NotFound";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch])

  const { isAuthenticated } = useSelector((state) => state.user)
  return (
    <>
     <Suspense fallback={<Loader />}>
    <Router>
      {isAuthenticated && <Header />}

      <Routes>

        <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />

        <Route path="/account" element={isAuthenticated ? <Account /> : <Login />} />

        <Route path="/register" element={isAuthenticated ? <Account /> : <Register />} />

        <Route path="/newpost"
          element={isAuthenticated ? <NewPost /> : <Login />}
        />

        <Route path="/update/profile"
          element={isAuthenticated ? <UpdateProfile /> : <Login />}
        />

        <Route path="/messenger"
          element={isAuthenticated ? <Messenger /> : <Login />}
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

        <Route path="/proposal/:id"
          element={isAuthenticated ? <ProposalForm /> : <Login />}
        />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
    </Suspense>
    </>
  );
}

export default App;
