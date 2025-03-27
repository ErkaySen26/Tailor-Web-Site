import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav>
          <div className="logo">ERDAL GÜDA</div>
          <div className="nav-links">
            <a href="#home">Ana Sayfa</a>
            <a href="#about">Hakkımızda</a>
            <a href="#contact">İletişim</a>
          </div>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero-content">
            <h1>ERDAL GÜDA</h1>
            <p>Exclusive Tailor - Özel Dikim</p>
            <button className="cta-button">Randevu Al</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Erdal Güda - Tüm Hakları Saklıdır</p>
      </footer>
    </div>
  );
}

export default App;
