import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-wrapper">
        <img src="/logo.svg" alt="CareerWay+ Logo" className="logo-img" />
      </div>

      {/* Desktop Nav Links */}
      <ul className="nav-links">
        <li>
          <a href="/"><i className="fa-solid fa-house" style={{ color: "#1fbcdb" }}></i> Home</a>
        </li>
        <li>
          <a href="/"><i className="fa-solid fa-circle-info" style={{ color: "#1fbcdb" }}></i> About</a>
        </li>
        <li>
          <a href="/explore"><i className="fa-solid fa-compass" style={{ color: "#1fbcdb" }}></i> Explore</a>
        </li>
        <li>
          <a href="/profile"><i className="fa-solid fa-user" style={{ color: "#1fbcdb" }}></i> Profile</a>
        </li>
      </ul>

      {/* Mobile Drawer */}
      <ul className={`nav-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <X className="close-icon" onClick={() => setIsOpen(false)} />
        </div>
        <li>
          <a href="/" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-house" style={{ color: "#1fbcdb" }}></i> Home
          </a>
        </li>
        <li>
          <a href="/explore" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-compass" style={{ color: "#1fbcdb" }}></i> Explore
          </a>
        </li>
        <li>
          <a href="/profile" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-user" style={{ color: "#1fbcdb" }}></i> Profile
          </a>
        </li>
      </ul>

      {/* Hamburger icon (only when drawer is closed) */}
      <div className={`menu-icon ${isOpen ? 'hide-icon' : ''}`} onClick={() => setIsOpen(true)}>
        <Menu />
      </div>
    </nav>
  );
};

export default Header;