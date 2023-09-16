import React from 'react'
import Template from '../components/Template'
import SignUpImg from '../assets/signup.png'

export default function SignUp({setIsLoggedIn}) {
  return (
    <div className='text-white'>
        <Template
        title="Welcome Back"
        desc1="Build skills for Today, tomorrow, and beyond"
        desc2="Education to future-proof your career."
        image={SignUpImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn} />
    </div>
  )
}
