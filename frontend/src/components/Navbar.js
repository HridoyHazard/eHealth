import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userAction.js";

export default function Navbar() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
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
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Covid"
                >
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
                <Link className="nav-link" to="/Emergency">
                  Emergency
                </Link>
              </li>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <Link className="nav-link" to="/ProfileScreen">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/Login">
                    Login
                  </Link>
                </li>
              )}
               {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <Link className="nav-link" to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </Link>
                  <Link className="nav-link" to='/admin/medlist'>
                    <NavDropdown.Item>Medicines</NavDropdown.Item>
                  </Link>
                  <Link className="nav-link" to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </Link>
                  <Link className="nav-link" to='/admin/doctorlist'>
                    <NavDropdown.Item>Doctors</NavDropdown.Item>
                  </Link>
                  <Link className="nav-link" to='/admin/appoinmentlist'>
                    <NavDropdown.Item>Appoinments</NavDropdown.Item>
                  </Link>
                  <Link className="nav-link" to='/admin/ambulancelist'>
                    <NavDropdown.Item>Ambulances</NavDropdown.Item>
                  </Link>
                </NavDropdown>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
