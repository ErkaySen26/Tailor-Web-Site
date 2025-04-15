import React, { useRef, useState } from "react";
import { init } from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // EmailJS Service ID
        "YOUR_TEMPLATE_ID", // EmailJS Template ID
        form.current,
        "YOUR_PUBLIC_KEY" // EmailJS Public Key
      )
      .then(
        (result) => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          setStatus("error");
          setTimeout(() => setStatus(""), 5000);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h1>İletişime Geçin</h1>
          <p>Sorularınız veya randevu talepleriniz için bize ulaşın.</p>

          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Adres</h3>
                <p>İstanbul, Türkiye</p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Telefon</h3>
                <p>+90 555 123 4567</p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>E-posta</h3>
                <p>info@erdalguda.com</p>
              </div>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label>İsim</label>
            <input type="text" name="user_name" required />
          </div>

          <div className="form-group">
            <label>E-posta</label>
            <input type="email" name="user_email" required />
          </div>

          <div className="form-group">
            <label>Konu</label>
            <input type="text" name="subject" required />
          </div>

          <div className="form-group">
            <label>Mesaj</label>
            <textarea name="message" required></textarea>
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Gönderiliyor..." : "Gönder"}
          </button>

          {status === "success" && (
            <div className="alert success">Mesajınız başarıyla gönderildi!</div>
          )}

          {status === "error" && (
            <div className="alert error">
              Bir hata oluştu. Lütfen tekrar deneyin.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
