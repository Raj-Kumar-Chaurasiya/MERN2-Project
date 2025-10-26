import React, { useState } from "react";
import Header from "../comman/Header";
import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });

  const [successMsg, setSuccessMsg] = useState("");

  const destinations = {
    Beach: [
      "Goa",
      "Gokarna",
      "Varkala",
      "Pondicherry",
      "Rameswaram",
      "Kovalam",
      "Andaman Islands",
      "Daman and Diu",
      "Puri Beach",
      "Marina Beach, Chennai",
    ],
    Mountain: [
      "Manali",
      "Shimla",
      "Mussoorie",
      "Darjeeling",
      "Munnar",
      "Nainital",
      "Ooty",
      "Kodaikanal",
      "Tawang",
      "Gangtok",
    ],
    City: [
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Hyderabad",
      "Jaipur",
      "Chennai",
      "Kolkata",
      "Ahmedabad",
      "Pune",
      "Agra",
    ],
    Desert: [
      "Jaisalmer",
      "Bikaner",
      "Barmer",
      "Kutch",
      "Phalodi",
      "Pushkar",
      "Rajasthan Sand Dunes",
      "Mandawa",
      "Osian",
      "Nagaur",
    ],
    Forest: [
      "Jim Corbett National Park",
      "Sundarbans",
      "Gir Forest",
      "Kanha National Park",
      "Bandhavgarh",
      "Periyar Wildlife Sanctuary",
      "Kaziranga",
      "Satpura",
      "Wayanad",
      "Nagarhole",
    ],
    Snow: [
      "Gulmarg",
      "Auli",
      "Kufri",
      "Sonamarg",
      "Pahalgam",
      "Ladakh",
      "Spiti Valley",
      "Rohtang Pass",
      "Tawang",
      "Yumthang Valley",
    ],
  };

  const categoryIcons = {
    Beach: "🏖️",
    Mountain: "🏔️",
    City: "🏙️",
    Desert: "🏜️",
    Forest: "🌲",
    Snow: "❄️",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, destination, message } = formData;

    if (!name || !email || !phone || !destination || !message) {
      alert("Please fill all the fields!");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number!");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMsg("✅ Your enquiry has been submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          destination: "",
          message: "",
        });
        setTimeout(() => setSuccessMsg(""), 3000);
      } else {
        alert(data.error || "Failed to submit enquiry");
      }
    } catch (error) {
      console.error(error);
      alert("Server not responding. Please try again later.");
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1614010970013-0e1c3340e738?auto=format&fit=crop&w=1350&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      ></div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <Navbar />

        <section
          style={{
            padding: "50px 20px",
            maxWidth: "800px",
            margin: "0 auto",
            color: "#fff",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "12px",
            backdropFilter: "blur(8px)",
          }}
        >
          <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#FFD700" }}>
            Tourist Enquiry
          </h1>

          {successMsg && (
            <div
              style={{
                marginBottom: "20px",
                padding: "10px",
                backgroundColor: "#d4edda",
                color: "#155724",
                borderRadius: "5px",
                textAlign: "center",
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              {successMsg}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <InputField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />

            {/* Email */}
            <InputField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

            {/* Phone */}
            <InputField
              label="Mobile Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your mobile number"
            />

            {/* Destination */}
            <div style={{ marginBottom: "15px" }}>
              <label>Destination:</label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              >
                <option value="">Select Destination</option>
                {Object.entries(destinations).map(([category, places]) => (
                  <optgroup key={category} label={`${categoryIcons[category]} ${category}`}>
                    {places.map((place, idx) => (
                      <option key={idx} value={place}>
                        {place}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* Message */}
            <div style={{ marginBottom: "15px" }}>
              <label>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your enquiry"
                rows="5"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            {/* Submit Button */}
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
              Submit Enquiry
            </button>
          </form>

          {/* Map */}
          {formData.destination && (
            <div style={{ marginTop: "50px", textAlign: "center" }}>
              <h3>Destination Location</h3>
              <iframe
                title="destination-map"
                width="100%"
                height="400"
                style={{ border: "0", borderRadius: "8px" }}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  formData.destination
                )}&output=embed`}
              />
            </div>
          )}
        </section>

        <Footer />
      </div>
    </div>
  );
}

// --- Reusable Input Field Component ---
function InputField({ label, type = "text", name, value, onChange, placeholder }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label>{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}
