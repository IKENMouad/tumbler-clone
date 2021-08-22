import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./img/logo.png";
import SearchModal from "./SearchModal";
import "./styles/navbar.scss";
import CreateModal from "./CreateModal";
import { authenticationService } from "./services/auth.service";
import history from "./utilities/history";
import { Dropdown, Button, ButtonGroup, DropdownButton } from "react-bootstrap";

const MyNav = () => {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    authenticationService.currentUser.subscribe((res) => {
      setCurrentUser(res);
    });
  }, []);

  const handleLogout = (event) => {
    event.preventDefault();
    //  authenticationService.logout()
    history.push("/profile");
  };

  return (
    <div>
      <header className="header-section">
        <div className="container">
          <span className="main-menu-left mt-2 site-menu-style">
            {currentUser ? (
              // <li>
              //   <Link to="/profile"> {currentUser.name} </Link>
              // </li>
              <DropdownButton align="start" title={currentUser.name}>
                <Dropdown.Item as={Link} to="/profile">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/posts">
                  Posts
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/users">
                  Users
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to="">
                  <span style={{ color: "red" }}>Logout</span>
                </Dropdown.Item>
              </DropdownButton>
            ) : null}
          </span>
          <Link to="/" className="site-logo">
            <img src={Logo} alt="logo.png" />
          </Link>
          <ul className="main-menu-right site-menu-style">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="trending">Trending </Link>
            </li>
            <li>
              <CreateModal />
            </li>
          </ul>
        </div>
        <div className="search-switch">
          <SearchModal />
        </div>
      </header>
    </div>
  );
};

export default MyNav;
