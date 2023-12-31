import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

export default function Template({title,desc1,desc2,image,formtype,setIsLoggedIn}) {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>
            {
            formtype === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) :
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
            
            }
            <div>
                <div></div> {/* line */}
                <p>OR</p>
                <div></div> {/* line */}
            </div>
            <button>
                Sign Up with Google
            </button>
        </div>
        <div>
            <img src={frameImage} alt="pattern" width={558} height={504} loading="lazy" /> {/* common background image */}
            <img src={image} alt="Students" width={558} height={490} loading="lazy" />
        </div>
    </div>
  )
}
