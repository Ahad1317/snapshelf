import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg shadow bg-black">
  <div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink className="nav-link active fs-4 text-white" aria-current="page" to="/">Home</NavLink>
        </li>
      </ul>
      <a class="navbar-brand fw-bolder fs-4 mx-auto text-white" href="#">SNAP-SHELF
      <i className="fa fa-camera ms-3"></i></a>
      <NavLink to="/login" className="btn btn-outline-light ms-auto px-4 rounded-pill">
        <i className="fa fa-sign-in me-2"></i>Login</NavLink>
      <NavLink to="/register" className="btn btn-outline-light ms-3 px-4 rounded-pill">
      <i className="fa fa-user-plus me-2"></i>Sign Up</NavLink>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar