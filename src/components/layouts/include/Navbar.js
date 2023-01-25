import React from "react";
import { NavLink } from "react-bootstrap";
import imagePath from "../../../constants/imagePath";

const Navbar = () => {
  return (
    <div>
      <header className="header ">
        <div className="header-inner">
          <div className="container-fluid px-lg-5">
            <nav className="navbar navbar-expand-lg my-navbar ">
              <NavLink className="navbar-brand" href="#">
                <span className="logo">
                  <img
                    src={imagePath.Logo}
                    className="img-fluid"
                    // style="width:30px; margin:-3px 0px 0px 0px;"
                  />
                  Creative Design
                </span>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span
                  className="navbar-toggler-icon"
                  // style="margin:5px 0px 0px 0px;"
                ></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto">
                  <li className="nav-item active">
                    <NavLink className="nav-link fw-bold fs-6" href="#">
                      Products<span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link fw-bold fs-6" href="#">
                      Downloads
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link fw-bold fs-6" href="#">
                      Enterprice
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link fw-bold fs-6 dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink className="dropdown-item" href="#">
                          Action
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" href="#">
                          Another action
                        </NavLink>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <NavLink className="dropdown-item" href="#">
                          Something else here
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link fw-bold fs-6" href="#">
                      Blog
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link fw-bold fs-6" href="#">
                      Resources
                    </NavLink>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <button className="header-btn my-2 my-sm-0" type="submit">
                    Subscribe free
                  </button>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
