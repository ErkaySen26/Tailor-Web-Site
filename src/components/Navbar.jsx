import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      const email = localStorage.getItem("userEmail");
      setIsLoggedIn(loggedIn);
      setUserEmail(email || "");
    };

    checkLoginStatus();
    window.addEventListener("storage", checkLoginStatus);
    return () => window.removeEventListener("storage", checkLoginStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setUserEmail("");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src="/logo.svg" alt="Erdal Güda" className="logo" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Ana Sayfa
        </Link>
        <Link to="/add-customer" className="nav-link">
          Müşteri Ekle
        </Link>
        <Link to="/my-customers" className="nav-link">
          Müşterilerim
        </Link>
        <Link to="/my-designs" className="nav-link">
          Tasarımlarım
        </Link>
        <Link to="/my-orders" className="nav-link">
          Siparişlerim
        </Link>
        <Link to="/create-template" className="nav-link">
          Şablon Oluştur
        </Link>
        <Link to="/blog" className="nav-link">
          Blog
        </Link>
        <Link to="/contact" className="nav-link">
          İletişim
        </Link>
        {isLoggedIn && (
          <Link to="/randevu" className="nav-link">
            Randevu Al
          </Link>
        )}
      </div>
      <div className="navbar-auth">
        {isLoggedIn ? (
          <>
            <span className="user-email">{userEmail}</span>
            <button onClick={handleLogout} className="auth-btn logout">
              Çıkış Yap
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="auth-btn login">
              Giriş Yap
            </Link>
            <Link to="/blog" className="auth-btn blog">
              Blog
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
