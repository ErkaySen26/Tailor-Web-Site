import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Appointment.css";

const Appointment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "özel-dikim",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);

    if (!loggedIn) {
      navigate("/login");
    }

    // Minimum tarih ayarı
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split("T")[0];
    document.getElementById("date").min = minDate;
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Randevu kaydetme
    const appointments = JSON.parse(
      localStorage.getItem("appointments") || "[]"
    );
    const newAppointment = {
      ...formData,
      id: Date.now(),
      userEmail: localStorage.getItem("userEmail"),
      status: "beklemede",
    };

    appointments.push(newAppointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));

    setMessage(
      "Randevunuz başarıyla alındı! Size en kısa sürede dönüş yapılacaktır."
    );
    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
      service: "özel-dikim",
    });
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="appointment-container">
      <div className="appointment-box">
        <h2>Randevu Al</h2>
        {message && <div className="success-message">{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Ad Soyad</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Adınız ve soyadınız"
            />
          </div>
          <div className="form-group">
            <label>Telefon</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Telefon numaranız"
              pattern="[0-9]{10}"
              title="Lütfen 10 haneli telefon numaranızı giriniz"
            />
          </div>
          <div className="form-group">
            <label>Tarih</label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Saat</label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="">Saat seçiniz</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
            </select>
          </div>
          <div className="form-group">
            <label>Hizmet</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="özel-dikim">Özel Dikim</option>
              <option value="tadilat">Tadilat</option>
              <option value="ölçü">Ölçü Alma</option>
            </select>
          </div>
          <button type="submit" className="appointment-button">
            Randevu Oluştur
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
