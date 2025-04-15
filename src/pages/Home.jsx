import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import DragDropUpload from "../components/DragDropUpload";
import { FaSomeIcon } from "react-icons/fa";

import {
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <div className="header-content">
          {/* 'Erdal Güda' yazısını kaldırdım */}
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h2>Kişiye Özel Terzilik ve Kaliteli İşçilik</h2>
          <p>Yılların deneyimi ve ustalığı ile size özel tasarımlar...</p>
          <button className="cta-button">Randevu Al</button>
        </div>
      </section>

      <section className="upload-section-wrapper">
        <div className="section-content">
          <DragDropUpload />
        </div>
      </section>

      <section className="services-section">
        <div className="section-content">
          <h2>Hizmetlerimiz</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Kişiye Özel Dikim</h3>
              <p>Size özel ölçülerle kusursuz uyum</p>
            </div>
            <div className="service-card">
              <h3>Profesyonel İşçilik</h3>
              <p>Deneyimli eller, kaliteli sonuçlar</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <h2>Özel Koleksiyonlar</h2>
        <div className="featured-grid">
          <div className="featured-item">
            <img
              src="/images/WhatsApp Görsel 2025-03-27 saat 07.32.23_154fb39f.jpg"
              alt="Profesyonel İşçilik"
            />
            <div className="featured-info">
              <h3>Profesyonel İşçilik</h3>
              <p>
                En kaliteli kumaşlar ve özenli dikimle sizin için hazırlanır
              </p>
            </div>
          </div>
          <div className="featured-item">
            <img
              src="/images/WhatsApp Görsel 2025-03-27 saat 07.32.24_a1207aab.jpg"
              alt="Özel Dikim"
            />
            <div className="featured-info">
              <h3>Özel Dikim</h3>
              <p>Size özel ölçülerle kusursuz uyum</p>
            </div>
          </div>
          <div className="featured-item">
            <img src="/images/erdal-guda.jpg" alt="Kaliteli Kumaşlar" />
            <div className="featured-info">
              <h3>Kaliteli Kumaşlar</h3>
              <p>En iyi kumaşlarla üstün kalite</p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-content">
          <h2>Randevu Alın</h2>
          <p>Size özel dikim için hemen iletişime geçin</p>
          <Link to="/randevu" className="contact-button">
            İletişime Geç
          </Link>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>İletişim</h3>
            <div className="contact-info">
              <p>
                <FaPhone /> +90 555 123 4567
              </p>
              <p>
                <FaMapMarkerAlt /> Merkez Mahallesi, Atatürk Caddesi No:123,
                Ankara
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h3>Çalışma Saatleri</h3>
            <p>Pazartesi - Cumartesi: 09:00 - 19:00</p>
            <p>Pazar: Kapalı</p>
          </div>

          <div className="footer-section">
            <h3>Sosyal Medya</h3>
            <div className="social-links">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright"> 2024 Erdal Güda. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
