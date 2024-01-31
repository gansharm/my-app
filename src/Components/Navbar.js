import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar(props) {
  return (
     <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{props.title}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/about">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/">About</Link>
          </li>
          {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></hr></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> */}
          {/* <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li> */}
        </ul>
        {/* <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'} mx-2`}>
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light'?'EnableDarkMode':'EnableWhiteMode  '}</label>
      </div>
      </div>
    </div>
  </nav>   
  )
}

 