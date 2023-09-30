import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/signup">Signup</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
      <Outlet />
    </div>
  );
}

export default MainLayout;
