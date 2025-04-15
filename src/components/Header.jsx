import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">Erdal Güda</span>
        </Link>
        <nav className="nav-menu">
          <a href="#add-customer" className="nav-link">
            Müşteri Ekle
          </a>
          <a href="#my-customers" className="nav-link">
            Müşterilerim
          </a>
          <a href="#my-designs" className="nav-link">
            Tasarımlarım
          </a>
          <a href="#my-orders" className="nav-link">
            Siparişlerim
          </a>
          <a href="#create-template" className="nav-link">
            Şablon Oluştur
          </a>
          <a href="#login" className="nav-button">
            Giriş Yap
          </a>
          <a href="#blog" className="nav-button">
            Blog
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
