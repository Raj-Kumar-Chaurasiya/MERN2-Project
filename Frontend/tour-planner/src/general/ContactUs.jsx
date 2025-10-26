import React, { useState } from "react";
import Header from "../comman/Header";
import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg(""); // Clear error on input
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;

    if (!name || !email || !phone || !subject || !message) {
      setErrorMsg("Please fill all fields!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMsg("Your message has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setSuccessMsg(""), 4000);
      } else {
        const data = await response.json();
        setErrorMsg(data.error || "Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMsg("Something went wrong! Please try again later.");
    }
  };

  return (
    <div>
      <Header />
      <Navbar />

      <section
        style={{
          padding: "50px 20px",
          maxWidth: "800px",
          margin: "0 auto",
          backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px",
          position: "relative",
          color: "#fff",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            borderRadius: "10px",
          }}
        ></div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#ffeb3b" }}>Contact Us</h1>

          {successMsg && (
            <div style={{ backgroundColor: "#d4edda", color: "#155724", padding: "10px", borderRadius: "5px", textAlign: "center", marginBottom: "20px" }}>
              {successMsg}
            </div>
          )}

          {errorMsg && (
            <div style={{ backgroundColor: "#f8d7da", color: "#721c24", padding: "10px", borderRadius: "5px", textAlign: "center", marginBottom: "20px" }}>
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {[
              { label: "Name", name: "name", type: "text", placeholder: "Enter your name" },
              { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
              { label: "Mobile Number", name: "phone", type: "tel", placeholder: "Enter your mobile number" },
              { label: "Subject", name: "subject", type: "text", placeholder: "Enter subject" },
            ].map((field) => (
              <div key={field.name} style={{ marginBottom: "15px" }}>
                <label>{field.label}:</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                />
              </div>
            ))}

            <div style={{ marginBottom: "15px" }}>
              <label>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="5"
                style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#0d47a1",
                color: "#fff",
                fontWeight: "bold",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "1rem",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#1565c0")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#0d47a1")}
            >
              Send Message
            </button>
          </form>

          <div style={{ marginTop: "50px", textAlign: "center" }}>
            <h3>Our Location</h3>
            <iframe
              title="office-location-map"
              width="100%"
              height="400"
              style={{ border: "0", borderRadius: "8px" }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?q=Taj+Mahal,Agra,India&output=embed"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
