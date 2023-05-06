import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 drop-shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        {/* logo  */}
        <div className="flex-none pr-2 mx-2 ">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>

        {/* Links*/}
        <div className="flex-1 mx-2 pr-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              HOME
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              ABOUT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
