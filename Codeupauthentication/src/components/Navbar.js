import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function Navbar(props) {
    let isLoggedIn= props.isLoggedIn;
    let setisLoggedIn= props.setisLoggedIn;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto text-white">
      {/* logo */}
      <Link to="/">
        <div className="text-white font-bold text-2xl">CodeUp</div>
      </Link>

      {/*  bar */}
      <nav className="flex">
        <ul className="flex gap-x-6 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* login signup logout dashboard buttons */}

      <div className="flex gap-x-4 ml-5 mr-3">
        {!isLoggedIn && 
          <Link to="/login">
            <button className="bg-richblack-800  text-white py-[8px] rounded-[8px] px-[12px] border border-richblack-700">Login</button>
          </Link>
        }
        {!isLoggedIn && 
          <Link to="/signUp">
            <button className="bg-richblack-800  text-white py-[8px] rounded-[8px] px-[12px] border border-richblack-700">Sign Up</button>
          </Link>
        }
        {isLoggedIn && 
          <Link to="/">
            <button onClick={() =>{
                setisLoggedIn(false);
                toast.success("Logged Out")
            }}>LogOut</button>
          </Link>
        }
        {isLoggedIn && 
          <Link to="/Dashboard">
            <button className="bg-richblack-800  text-white py-[8px] rounded-[8px] px-[12px] border border-richblack-700">Dashboard</button>
          </Link>
        }
      </div>
    </div>
  );
}
