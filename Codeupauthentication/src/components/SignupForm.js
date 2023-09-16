import React from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function SignupForm({setisLoggedIn}) {
    const navigate = useNavigate();
    const [formData, setformData] = useState({email:"",lastname:"", firstname:"", password:"", confirmPassword:""});

    const [showPassword, setshowPassword] = useState(false);
    const [confirmPasswordi, setconfirmPasswordi] = useState(false);

    function changeHandler(event){
        setformData( (prevData) =>({
            ...prevData,
            [event.target.name]:event.target.value
        }))

    }
    function submitHandler(event)
    {
        event.preventDefault();
        if(formData.password !== formData.confirmPassword)
        {
            toast.error("Passwords do not match");
            return;
        }
        setisLoggedIn(true);
        toast.success("Account created");
        const accountData = {
            ...formData
        };
        console.log("printing form data..")
        console.log(accountData);

        navigate("/dashboard");

    }

  return (
    <div>
        {/* student instructor tab */}
        <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div>
        <form onSubmit={submitHandler}>
            {/* firstname and lastname */}
            <div>
            <label>
                <p>First Name <sup>*</sup> </p>
                <input required 
                type="text"
                name='firstname' 
                onChange={changeHandler}
                placeholder="Enter First Name"
                value={formData.firstname} 
                className='text-black'/>
            </label>

            <label>
                <p>Last Name <sup>*</sup> </p>
                <input required 
                type="text"
                name='lastname' 
                onChange={changeHandler}
                placeholder="Enter Last Name"
                value={formData.lastname}
                className='text-black' />
            </label>
            
            </div>

            <label>
                <p>Email Address <sup>*</sup> </p>
                <input 
                required
                type="email"
                value = {formData.email}
                onChange={changeHandler}
                placeholder="Enter email id"
                name="email"
                className='text-black'
            />
            </label>

            {/* create password and confirm password */}
            <div>
            <label>
                <p>Create Password <sup>*</sup> </p>
                <input required 
                type={showPassword ? ("text") : ("password")}
                name='password' 
                onChange={changeHandler}
                placeholder="Enter Password"
                value={formData.password}
                className='text-black' />
                <span onClick={() => setshowPassword((prev) => !prev)}>
                    {
                    showPassword ?     (<AiOutlineEyeInvisible/>) :     (<AiOutlineEye/>)
                    }
                </span>
            </label>

            <label>
                <p>Confirm Password <sup>*</sup> </p>
                <input 
                required
                type= {confirmPasswordi ? ("text") : ("password")}
                value = {formData.confirmPassword}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="confirmPassword"
                className='text-black' />
                <span onClick={() => setconfirmPasswordi((prev) => !prev)}>
                    {
                    confirmPasswordi ?     (<AiOutlineEyeInvisible/>) :     (<AiOutlineEye/>)
                    }
                </span> 
            </label>
            </div>
            <button>
                Create Account
            </button>
            
            
        </form>
    </div>
  )
}
