// rafce (react arrow functional component export )

import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import Base from "./components/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Services from "./pages/Services";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDashboard from "./pages/user-routes/UserDashboard";
import PrivateRoutes from "./components/PrivateRoutes";
import ProfileInfo from "./pages/user-routes/ProfileInfo";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/user" element={<PrivateRoutes />}>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="profile" element={<ProfileInfo/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
