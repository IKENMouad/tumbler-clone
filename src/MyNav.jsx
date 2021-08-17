import { Link } from 'react-router-dom'
import Logo from "./img/logo.png";
import SearchModal from './SearchModal';
import './styles/navbar.scss'
import CreateModal from './CreateModal';

const MyNav = () => {

  return (
    <div>
      <header className="header-section">
        <div className="container">
          <ul className="main-menu-left site-menu-style">
            <li>
              <Link to="#"> username Dp </Link>
            </li>

          </ul>
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
        <div className="search-switch" >
          <SearchModal />
        </div>
      </header>

    </div>
  );
}

export default MyNav
