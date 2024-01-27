import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Trident-logos_transparent2.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { UserContext } from "../context/userContext";

import { MdGroups3 } from "react-icons/md";
import {
  IoLogInOutline,
  IoLogOutOutline,
  IoCreateOutline,
  IoPersonOutline,
} from "react-icons/io5";

function Header() {
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 768);
  const { currentUser } = useContext(UserContext);

  const closeNavHandler = () => {
    setIsNavShowing(window.innerWidth > 768);
  };

  useEffect(() => {
    const handleResize = () => {
      closeNavHandler();
    };

    // Run closeNavHandler when window is resized
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [closeNavHandler]);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo">
          <img
            src={Logo}
            className="brand__logo"
            alt="Navbar Logo"
            onClick={closeNavHandler}
          />
        </Link>
        {currentUser?.id && isNavShowing && (
          <ul className="nav__menu">
            <li>
              <Link
                to={`/profile/${currentUser?.id}`}
                onClick={closeNavHandler}
              >
                <IoPersonOutline className="nav__menu-logo" />
                {currentUser?.name}
              </Link>
            </li>
            <li>
              <Link to="/create" onClick={closeNavHandler}>
                <IoCreateOutline className="nav__menu-logo" />
                Create Post
              </Link>
            </li>
            <li>
              <Link to="/authors" onClick={closeNavHandler}>
                <MdGroups3 className="nav__menu-logo" />
                Authors
              </Link>
            </li>
            <li>
              <Link to="/logout" onClick={closeNavHandler}>
                <IoLogOutOutline className="nav__menu-logo" />
                Logout
              </Link>
            </li>
          </ul>
        )}
        {!currentUser?.id && isNavShowing && (
          <ul className="nav__menu">
            <li>
              <Link to="/authors" onClick={closeNavHandler}>
                <MdGroups3 className="nav__menu-logo" />
                Authors
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={closeNavHandler}>
                <IoLogInOutline className="nav__menu-logo" />
                Login
              </Link>
            </li>
          </ul>
        )}

        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Header;
