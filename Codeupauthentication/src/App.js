import "./App.css";
import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import { useState } from "react";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  return( 
  <div className="w-screen h-screen bg-richblack-900 flex flex-col">
    
    <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}
    className="" />

    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login setisLoggedIn={setisLoggedIn}/>}/>
      <Route path="/signup" element={<SignUp setisLoggedIn={setisLoggedIn}/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>

    </Routes>

  </div>);
}

export default App;
