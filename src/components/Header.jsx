import { NavLink } from "react-router-dom";
import "../styles/Header.css"; // On prépare aussi un fichier CSS spécifique
import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Pharmacie de la Fontaine</div>
        <nav className="nav">
          <NavLink to="/" className="nav-link">
            Accueil
          </NavLink>
          <NavLink to="/services" className="nav-link">
            Services
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
