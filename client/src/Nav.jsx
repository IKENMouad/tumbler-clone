import React, { useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export default ({}) => {
  const [toggleDropDown, setToggleDropDown] = useState(false);
   const showToggleDropDown = () => {
     setToggleDropDown((toggleDropDown = !toggleDropDown));
   };

  return (
    <Fragment>
      <nav className="navbar navbar-expand-md mx-5">
        <Link className="navbar-brand" to="#">
          Navbar
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Link
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item dropdown">
              <a
                onClick={() => showToggleDropDown}
                className={`nav-link dropdown-toggle ${
                  toggleDropDown ? "show" : null
                } `}
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <Link className="dropdown-item" to="#">
                  Action 1
                </Link>
                <Link className="dropdown-item" to="#">
                  Action 2
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

// <Nav>
//   <NavComponent>
//     <NavItem>
//       <StyledLink to="/">A</StyledLink>
//     </NavItem>
//     <NavForm>#001935
//       <Search />
//     </NavForm>
//   </NavComponent>
//   <NavComponent>
//     <NavItem>
//       <StyledLink to="/explore">
//         <BsHouse></BsHouse>
//       </StyledLink>
//     </NavItem>
//     <NavItem>
//       <StyledLink to="/explore">EX</StyledLink>
//     </NavItem>
//     <NavItem>
//       <StyledLink to="/explore">EX</StyledLink>
//     </NavItem>
//     <NavUserItem>
//       <Icon>R</Icon>
//       <UserDetails>
//         Mouad <br />
//       </UserDetails>
//     </NavUserItem>
//   </NavComponent>
// </Nav>
