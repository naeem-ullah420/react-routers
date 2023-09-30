import React from 'react'
import { Outlet, NavLink } from "react-router-dom";

function SignUpPage() {
  return (
   <div>
     <h2>SignUpPage</h2>
     <NavLink to="/login" >Already exists?</NavLink>
   </div>

  )
}

export default SignUpPage