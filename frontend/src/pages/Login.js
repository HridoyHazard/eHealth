import React from "react";
import "../css/login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <section className="register-photo">
        <div className="form-container">
          <form method="post">
            <h2 className="text-center">
              <strong>Login To eHealth</strong>
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
              <button className="btn btn-primary d-block w-100" type="submit">
                Login
              </button>
            </div>
            <Link className="already" to="/Signup">
              You have no account? Register here.
            </Link>
          </form>
          <div className="image-holder">
            <h1>eHealth</h1>
            <p>
              <br />
              eHealth is a relatively recent healthcare practice supported by
              electronic processes and communication, dating back to at least
              1999. Usage of the term varies as it covers not just "Internet
              medicine" as it was conceived during that time, but also
              "virtually everything related to computers and medicine".&nbsp;
              <br />
              <br />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
