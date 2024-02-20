import React from 'react'
import './LoginBox.css'

export const LoginBox = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>Sign up</div>
            <div className='underline'></div>
</div>
<div className='inputs'>
<div className='input'>
<input type='text' placeholder='Name'/>
</div>
<div className='input'>
<input type='email' placeholder='Email id'/>
</div>
<div className='input'>
<input type='password' placeholder='Password'/>
</div>
</div>
<div className="forgot-password">Forgot Password?<span>click here!  </span></div>
<div className='submit-container'></div>
<div className="submit">Sign-up</div>
    </div>
  )
}

export default LoginBox;