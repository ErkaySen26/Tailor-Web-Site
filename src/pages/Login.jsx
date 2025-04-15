import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Demo kullanıcı bilgileri
  const demoUser = {
    email: "demo@example.com",
    password: "123456",
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo giriş kontrolü
    if (
      formData.email === demoUser.email &&
      formData.password === demoUser.password
    ) {
      // Başarılı giriş
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", formData.email);
      navigate("/");
    } else {
      setError("Email veya şifre hatalı!");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Giriş Yap</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email adresiniz"
            />
          </div>
          <div className="form-group">
            <label>Şifre</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Şifreniz"
            />
          </div>
          <button type="submit" className="auth-button">
            Giriş Yap
          </button>
        </form>
        <div className="demo-credentials">
          <p>Demo Hesap Bilgileri:</p>
          <p>Email: demo@example.com</p>
          <p>Şifre: 123456</p>
        </div>
        <p className="auth-redirect">
          Hesabınız yok mu? <Link to="/register">Üye Ol</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
