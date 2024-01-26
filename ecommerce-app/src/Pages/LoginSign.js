import React from 'react'
import '../styles/loginSignp.css'

const LoginSign = () => {
  return (
    <div className='loginSignup'>
    <div className='loginContainer'>
        <h1>Sign Up</h1>
        <div className='login-fileds'>
            <input type='text' placeholder='Your Name'/>
            <input type='text' placeholder='Email Address'/>
            <input type='text' placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsign'>Already have an account? <span>Login here</span></p>
        <div className='login-agree'>
            <input type='checkbox' name='' id=''/>
            <p>By contiuing, i agree to the terms of use & privacy policy.  </p>
        </div>
    </div>

    </div>
  )
}

export default LoginSign