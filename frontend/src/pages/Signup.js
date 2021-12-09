import React from "react";
import "bootstrap";
import "../css/signup.css";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <section className="register-photo">
        <div className="form-container">
          <div className="img-holder" />
          <form method="post">
            <h2 className="text-center">
              <strong>Join eHealth</strong>
              <br />
              Create an account.
            </h2>
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="password"
                name="password-repeat"
                placeholder="Password (repeat)"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="tel"
                name="phone"
                placeholder="+880-XXXXXXXXXX"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
            </div>
            <div className="mb-3">
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" />I agree
                  to the license terms.
                </label>
              </div>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary d-block w-100" type="submit">
                Sign Up
              </button>
            </div>
            <Link className="already" to="/Login">You already have an account? Login here.</Link>
          </form>
        </div>
      </section>
    </div>
  );
}
