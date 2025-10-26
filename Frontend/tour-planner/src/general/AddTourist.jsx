import React, { useState } from "react";
import Header from "../comman/Header";
import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";

export default function AddTourist() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    email: "",
    phone: "",
    description: "",
    imageUrl: "",
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, location, email, phone, description, imageUrl } = formData;
    if (!name || !location || !email || !phone || !description || !imageUrl) {
      alert("Please fill all the fields!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/tourist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMsg(data.message || "✅ Tourist added successfully!");
        setErrorMsg("");
        // Reset form
        setFormData({
          name: "",
          location: "",
          email: "",
          phone: "",
          description: "",
          imageUrl: "",
        });
      } else {
        setErrorMsg(data.error || "❌ Something went wrong!");
      }
    } catch (error) {
      console.error("Error adding tourist:", error);
      setErrorMsg("❌ Server error. Please try again later.");
    }

    // Remove success message after 3 seconds
    setTimeout(() => {
      setSuccessMsg("");
      setErrorMsg("");
    }, 3000);
  };

  return (
    <div>
      <Header />
      <Navbar />

      <section
        style={{
          padding: "50px 20px",
          maxWidth: "600px",
          margin: "50px auto",
          borderRadius: "10px",
          position: "relative",
          color: "#fff",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: "10px",
          }}
        ></div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <h1
            style={{
              textAlign: "center",
              marginBottom: "30px",
              color: "#ffeb3b",
            }}
          >
            Add New Tourist Destination
          </h1>

          {/* Success Message */}
          {successMsg && (
            <div
              style={{
                marginBottom: "20px",
                padding: "10px",
                backgroundColor: "#d4edda",
                color: "#155724",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              {successMsg}
            </div>
          )}

          {/* Error Message */}
          {errorMsg && (
            <div
              style={{
                marginBottom: "20px",
                padding: "10px",
                backgroundColor: "#f8d7da",
                color: "#721c24",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <InputField
              label="Name"
              name="name"
              value={formData.name}
              placeholder="Enter tourist name"
              onChange={handleChange}
            />

            <InputField
              label="Location"
              name="location"
              value={formData.location}
              placeholder="Enter location"
              onChange={handleChange}
            />

            <InputField
              label="Email ID"
              name="email"
              type="email"
              value={formData.email}
              placeholder="Enter contact email"
              onChange={handleChange}
            />

            <InputField
              label="Mobile Number"
              name="phone"
              type="tel"
              value={formData.phone}
              placeholder="Enter mobile number"
              onChange={handleChange}
            />

            <div style={{ marginBottom: "15px" }}>
              <label>Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter description"
                rows="4"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            <InputField
              label="Image URL"
              name="imageUrl"
              type="url"
              value={formData.imageUrl}
              placeholder="Enter image URL"
              onChange={handleChange}
            />

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
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#1565c0")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "#0d47a1")
              }
            >
              Add Tourist Destination
            </button>
          </form>

          {/* Map Preview */}
          {formData.location && (
            <div style={{ marginTop: "40px", textAlign: "center" }}>
              <h3>Location Preview</h3>
              <iframe
                title="tourist-location-map"
                width="100%"
                height="300"
                style={{ border: "0", borderRadius: "8px" }}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  formData.location
                )}&output=embed`}
              ></iframe>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Reusable Input Field Component
function InputField({ label, name, value, onChange, type = "text", placeholder }) {
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
