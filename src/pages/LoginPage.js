import React from 'react'
import { Outlet, NavLink } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      <h2>LoginPage</h2>
      <NavLink to="/signup" >Do not have account?</NavLink> <br/>
      <NavLink to="/forgotPassword" >Forgot Password ?</NavLink>
    </div>
  )
}

export default LoginPage