import React from "react";
import { Link } from "react-router-dom";
export default function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
        <Link to="/" className="nav-link">
                Assignment 4
              </Link>
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/createpost" className="nav-link">
                Create Post
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
