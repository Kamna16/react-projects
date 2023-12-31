import React from 'react'
import Template from '../components/Template'
import loginImage from '../assets/login.png'

export default function Login({setIsLoggedIn}) {
  return (
    <div className='text-white'>
        <Template
        title="Welcome Back"
        desc1="Build skills for Today, tomorrow, and beyond"
        desc2="Education to future-proof your career."
        image={loginImage}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn} />
    </div>
  )
}
