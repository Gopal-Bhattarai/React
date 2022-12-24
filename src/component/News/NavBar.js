import { useState } from "react";
import { Link } from "react-router-dom";
// import Select from "react-select";
import { AiOutlineSetting } from 'react-icons/ai'

const NavBar = ({ showSettings, searchMe }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/news">
            News
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
                <Link className="nav-link" to="/news?id=general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news?id=business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news?id=entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news?id=health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news?id=science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news?id=technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news?id=sports">
                  Sports
                </Link>
              </li>
              </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                // value={search}
                onChange={(e)=>searchMe(e.target.value)}
                />
            {/* <button className="btn btn-outline-success" onClick={searchMe(search)}>
                Search
              </button> */}
            </form>
            <AiOutlineSetting size={30} onClick={showSettings} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
