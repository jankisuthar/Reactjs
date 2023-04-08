import React from 'react';
import './Header.css'
function Header(props) {
    return (
        <div>
<nav class="navbar navbar-expand-sm ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Uber</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className='deep'><i class="fa-solid fa-bars"></i></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        {/* <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
          */}
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Compeny</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Link</a></li>
            <li><a class="dropdown-item" href="#">Another link</a></li>
            <li><a class="dropdown-item" href="#">A third link</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sefty</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Help</a>
        </li>
       <div  class="collapse navbar-collapse"  id="collapsibleNavbar">
        <div className="right"></div>
      
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Product</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Link</a></li>
            <li><a class="dropdown-item" href="#">Another link</a></li>
            <li><a class="dropdown-item" href="#">A third link</a></li>
            <li><a class="dropdown-item" href="#">Link</a></li>
            <li><a class="dropdown-item" href="#">Another link</a></li>
            <li><a class="dropdown-item" href="#">A third link</a></li>
            <li><a class="dropdown-item" href="#">Link</a></li>
            <li><a class="dropdown-item" href="#">Another link</a></li>
            <li><a class="dropdown-item" href="#">A third link</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><button type="button" class="btn btn-light">SingUP</button></a>
        </li>
       </div>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Header;