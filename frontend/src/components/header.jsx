import React, { useState } from "react";

function Header() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-bs-theme", newTheme);
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top shadow-sm ${theme === "light" ? "bg-white navbar-light" : "bg-dark navbar-dark"
          }`}
      >
        <div className="container">
          {/* Brand / Logo */}
          <a
            href="#home"
            className={`navbar-brand fw-bold fs-4 ${theme === "light" ? "text-dark" : "text-light"
              }`}
          >
            My Portfolio
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center gap-2">
              <li className="nav-item">
                <a
                  href="#home"
                  className={`nav-link ${theme === "light" ? "text-dark" : "text-light"
                    }`}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#about"
                  className={`nav-link ${theme === "light" ? "text-dark" : "text-light"
                    }`}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#projects"
                  className={`nav-link ${theme === "light" ? "text-dark" : "text-light"
                    }`}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#blog"
                  className={`nav-link ${theme === "light" ? "text-dark" : "text-light"
                    }`}
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  className={`nav-link ${theme === "light" ? "text-dark" : "text-light"
                    }`}
                >
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#admin"
                  className={`nav-link ${theme === "light" ? "text-dark" : "text-light"
                    }`}
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <i className="fa-solid fa-lock"></i>
                </a>
              </li>

              {/* Theme Toggle */}
              <li className="nav-item ms-3">
                <button
                  className={`btn btn-sm rounded-pill ${theme === "light" ? "btn-outline-dark" : "btn-outline-light"
                    }`}
                  onClick={toggleTheme}
                >
                  {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg rounded-4">
            <div className="modal-header bg-primary text-white border-0">
              <h1 className="modal-title fs-5 fw-semibold" id="staticBackdropLabel">Admin Login</h1>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body px-4 py-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label fw-medium">Email</label>
                  <input type="email" className="form-control form-control-lg rounded-3" id="emailInput" placeholder="name@example.com" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label fw-medium">Password</label>
                  <input type="password" className="form-control form-control-lg rounded-3" id="passwordInput" placeholder="Enter your password" required />
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  {/* <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="rememberCheck"/>
                      <label className="form-check-label" htmlFor="rememberCheck">
                        Remember me
                      </label>
                  </div> */}
                  {/* <a href="#" className="text-decoration-none small text-primary">Forgot password?</a> */}
                </div>

                <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold rounded-3">
                  Sign In
                </button>

              </form>
            </div>

            <div className="d-flex justify-content-center align-items-center mb-3">
              <a href="#" className="text-decoration-none small text-primary">Forgot password?</a>
            </div>
            <div className="modal-footer justify-content-center border-0">
              {/* <p className="mb-0 text-muted small   pb-3">
                Don’t have an account? <a href="#" className="text-decoration-none text-primary fw-semibold">Sign up</a>
              </p> */}
            </div>
          </div>
        </div>
      </div>




    </>
  );
}

export default Header;
