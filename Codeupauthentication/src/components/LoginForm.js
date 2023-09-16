import React from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

export default function LoginForm({setisLoggedIn}) {

    const navigate = useNavigate();
    const [formData, setformData] = useState({email :"", password :""})

    const [showPassword, setshowPassword] = useState(false)

    function changeHandler(event){
        setformData( (prevData) =>(
            {
            ...prevData,
            [event.target.name] : event.target.value
            }
        ))

    }
    function submitHandler(event)
    {
        event.preventdefault();
        setisLoggedIn(true);
        toast.success("Logged In")
        navigate("/dashboard")
    }

  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>
                Email Address <sup>*</sup>
            </p>
            <input type="email" 
            required 
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter Email"
            name='email' className='text-black'/>
        </label>

        <label>
            <p>
                Password <sup>*</sup>
            </p>
            <input 
                required
                type= {showPassword ? ("text") : ("password")}
                value = {formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
                className='text-black'
            />

            <span onClick={() => setshowPassword((prev) => !prev)}>
                    {
                    showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                    }
                </span>

            <Link to="#">
                <p>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button>
            SignIn
        </button>
    </form>
  )
}
