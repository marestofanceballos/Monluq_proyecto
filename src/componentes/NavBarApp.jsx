import React from 'react'
import "../styles/navbar.css"
import logo from '../assets/logo.png'


const NavBarApp = () => {
  return (
    <nav id="menu" className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand d-flex gap-4" href="#"> <img src={logo} alt="logo de Monluq" width={39} />
          <span>Monluq</span></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#inicio"
                  >Inicio</a> 
              </li>
              <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Invierno</a></li>
            <li><a class="dropdown-item" href="#">Verano</a></li>
            <li><a class="dropdown-item" href="#">Calzados</a></li>
          </ul>
        </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Destacados</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Iniciar Sesion</a>
              </li>
            
            </ul>
            <div
              className="d-md-flex justify-content-between align-items-center flex-md-row-reverse flex-lg-row gap-2"
            >
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar..."
                  aria-label="Search"
                />
                <button className="btn btn-outline-custom " type="submit">
                <i class="bi bi-search lupa-icono"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default NavBarApp