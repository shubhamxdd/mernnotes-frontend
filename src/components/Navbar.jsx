import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

const Navbar = (props) => {
  let history = useHistory()
    let location = useLocation()
    const logout = () => {
      localStorage.removeItem("token");
      history.push("/login");
    }
    // useEffect(() => {
    //   console.log(location.pathname);
    // }, [location])
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
        // todo sticky and dark mode
        data-bs-theme="dark"
      >
        {/* TODO: Add toggle for dark mode */}
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active":null}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active":null}`} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
              </li>
            </ul>
            {!localStorage.getItem("token")?<form className="d-flex" role="search">
              <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
              <Link className="btn btn-primary" to="/signup" role="button">Signup</Link>
            </form>:<button onClick={logout} className="btn btn-primary">Log Out</button>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
