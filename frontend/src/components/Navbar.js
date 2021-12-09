import React from "react";
import {Link} from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Home">
            eHealth
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Covid">
                  CovicZone
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Medicine">
                  Medicine
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Doctors">
                  Doctor Zone
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Emergency">
                  Emergency
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Signup">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
