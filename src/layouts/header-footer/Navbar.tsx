import React from "react";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Nam store</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Trang chu</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  The loai sach
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">The loai 1</a></li>
                  <li><a className="dropdown-item" href="#">The loai 2</a></li>
                  <li><a className="dropdown-item" href="#">The loai 3</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Quy dinh ban hang
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Quy dinh 1</a></li>
                  <li><a className="dropdown-item" href="#">Quy dinh 2</a></li>
                  <li><a className="dropdown-item" href="#">Quy dinh 3</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link">Lien he</a>
              </li>
            </ul>
          </div>  
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul className="navbar-nav me-1">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-shopping-cart"></i>
                    </a>
                </li>
            </ul>
            <ul className="navbar-nav me-1">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-user"></i>
                    </a>
                </li>
            </ul>
        </div>
      </nav>
    );
}
export default Navbar;