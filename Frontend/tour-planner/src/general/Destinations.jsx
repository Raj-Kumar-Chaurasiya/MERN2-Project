import React from "react";
import Header from "../comman/Header";
import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";
import { MapPin, Calendar, Users, Camera } from "lucide-react";

// -------------------- Import images --------------------
// Beaches
import beach1 from "../assets/beach1.jpg";
import beach2 from "../assets/beach2.jpg";
import beach3 from "../assets/beach3.jpg";
import beach4 from "../assets/beach4.jpg";
import beach5 from "../assets/beach5.jpg";
import beach6 from "../assets/beach6.jpg";
import beach7 from "../assets/beach7.jpg";
import beach8 from "../assets/beach8.jpg";
import beach9 from "../assets/beach9.jpg";
import beach10 from "../assets/beach10.jpg";

// Mountains
import mountain1 from "../assets/mountain1.jpg";
import mountain2 from "../assets/mountain2.jpg";
import mountain3 from "../assets/mountain3.jpg";
import mountain4 from "../assets/mountain4.jpg";
import mountain5 from "../assets/mountain5.jpg";
import mountain6 from "../assets/mountain6.jpg";
import mountain7 from "../assets/mountain7.jpg";
import mountain8 from "../assets/mountain8.jpg";
import mountain9 from "../assets/mountain9.jpg";
import mountain10 from "../assets/mountain10.jpg";

// Deserts
import desert1 from "../assets/desert1.jpg";
import desert2 from "../assets/desert2.jpg";
import desert3 from "../assets/desert3.jpg";
import desert4 from "../assets/desert4.jpg";
import desert5 from "../assets/desert5.jpg";
import desert6 from "../assets/desert6.jpg";
import desert7 from "../assets/desert7.jpg";
import desert8 from "../assets/desert8.jpg";
import desert9 from "../assets/desert9.jpg";
import desert10 from "../assets/desert10.jpg";

// Forests
import forest1 from "../assets/forest1.jpg";
import forest2 from "../assets/forest2.jpg";
import forest3 from "../assets/forest3.jpg";
import forest4 from "../assets/forest4.png";
import forest5 from "../assets/forest5.png";
import forest6 from "../assets/forest6.png";
import forest7 from "../assets/forest7.png";
import forest8 from "../assets/forest8.png";
import forest9 from "../assets/forest9.png";
import forest10 from "../assets/forest10.png";

// Cities
import city1 from "../assets/city1.png";
import city2 from "../assets/city2.png";
import city3 from "../assets/city3.png";
import city4 from "../assets/city4.png";
import city5 from "../assets/city5.png";
import city6 from "../assets/city6.png";
import city7 from "../assets/city7.png";
import city8 from "../assets/city8.png";
import city9 from "../assets/city9.png";
import city10 from "../assets/city10.png";

// Snow
import snow1 from "../assets/snow1.jpg";
import snow2 from "../assets/snow2.jpg";
import snow3 from "../assets/snow3.jpg";
import snow4 from "../assets/snow4.jpg";
import snow5 from "../assets/snow5.jpg";
import snow6 from "../assets/snow6.jpg";
import snow7 from "../assets/snow7.jpg";
import snow8 from "../assets/snow8.jpg";
import snow9 from "../assets/snow9.jpg";
import snow10 from "../assets/snow10.jpg";

// -------------------- Destinations Array --------------------
const destinations = [
  // Beaches
  { name: "Goa Beach, India", image: beach1 },
  { name: "Radhanagar Beach, Andaman", image: beach2 },
  { name: "Varkala Beach, Kerala", image: beach3 },
  { name: "Marina Beach, Chennai", image: beach4 },
  { name: "Gokarna Beach, Karnataka", image: beach5 },
  { name: "Baga Beach, Goa", image: beach6 },
  { name: "Puri Beach, Odisha", image: beach7 },
  { name: "Kovalam Beach, Kerala", image: beach8 },
  { name: "Alibaug Beach, Maharashtra", image: beach9 },
  { name: "Candolim Beach, Goa", image: beach10 },

  // Mountains
  { name: "Manali, Himachal Pradesh", image: mountain1 },
  { name: "Darjeeling, West Bengal", image: mountain2 },
  { name: "Leh-Ladakh, Jammu & Kashmir", image: mountain3 },
  { name: "Munnar, Kerala", image: mountain4 },
  { name: "Mount Abu, Rajasthan", image: mountain5 },
  { name: "Ooty, Tamil Nadu", image: mountain6 },
  { name: "Gangtok, Sikkim", image: mountain7 },
  { name: "Coorg, Karnataka", image: mountain8 },
  { name: "Auli, Uttarakhand", image: mountain9 },
  { name: "Nainital, Uttarakhand", image: mountain10 },

  // Deserts
  { name: "Thar Desert, Rajasthan", image: desert1 },
  { name: "Jaisalmer Sand Dunes", image: desert2 },
  { name: "Bikaner Desert", image: desert3 },
  { name: "Kutch Desert, Gujarat", image: desert4 },
  { name: "Sam Sand Dunes, Jaisalmer", image: desert5 },
  { name: "Barmer, Rajasthan", image: desert6 },
  { name: "Khuri Desert", image: desert7 },
  { name: "Pushkar Desert", image: desert8 },
  { name: "Pokaran Desert", image: desert9 },
  { name: "Osian Desert", image: desert10 },

  // Forests
  { name: "Sundarbans, West Bengal", image: forest1 },
  { name: "Jim Corbett, Uttarakhand", image: forest2 },
  { name: "Gir Forest, Gujarat", image: forest3 },
  { name: "Periyar, Kerala", image: forest4 },
  { name: "Kanha, Madhya Pradesh", image: forest5 },
  { name: "Kaziranga, Assam", image: forest6 },
  { name: "Bandipur, Karnataka", image: forest7 },
  { name: "Ranthambore, Rajasthan", image: forest8 },
  { name: "Silent Valley, Kerala", image: forest9 },
  { name: "Pench National Park", image: forest10 },

  // Cities
  { name: "Mumbai, Maharashtra", image: city1 },
  { name: "Delhi, India", image: city2 },
  { name: "Jaipur, Rajasthan", image: city3 },
  { name: "Chennai, Tamil Nadu", image: city4 },
  { name: "Kolkata, West Bengal", image: city5 },
  { name: "Bangalore, Karnataka", image: city6 },
  { name: "Hyderabad, Telangana", image: city7 },
  { name: "Ahmedabad, Gujarat", image: city8 },
  { name: "Pune, Maharashtra", image: city9 },
  { name: "Varanasi, Uttar Pradesh", image: city10 },

  // Snow
  { name: "Gulmarg, Jammu & Kashmir", image: snow1 },
  { name: "Shimla, Himachal Pradesh", image: snow2 },
  { name: "Auli, Uttarakhand", image: snow3 },
  { name: "Sonmarg, Jammu & Kashmir", image: snow4 },
  { name: "Kufri, Himachal Pradesh", image: snow5 },
  { name: "Pahalgam, Kashmir", image: snow6 },
  { name: "Tawang, Arunachal Pradesh", image: snow7 },
  { name: "Chopta, Uttarakhand", image: snow8 },
  { name: "Narkanda, Himachal Pradesh", image: snow9 },
  { name: "Spiti Valley, Himachal Pradesh", image: snow10 },
];

// -------------------- Icon Actions --------------------
const openMap = (name) =>
  window.open(`https://www.google.com/maps/search/${encodeURIComponent(name)}`, "_blank");

const openCalendar = (name) =>
  window.open(
    `https://calendar.google.com/calendar/u/0/r/eventedit?text=Trip+to+${encodeURIComponent(name)}`,
    "_blank"
  );

const openGroup = (name) =>
  window.open(`https://example.com/group-booking?destination=${encodeURIComponent(name)}`, "_blank");

const openCamera = (name) =>
  window.open(`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(name)}`, "_blank");

// -------------------- Component --------------------
export default function Destinations() {
  return (
    <div>
      <Header />
      <Navbar />

      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Explore Destinations</h1>
        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto 50px",
            fontSize: "1.1rem",
            color: "#555",
          }}
        >
          Discover India’s diverse landscapes: beaches, mountains, deserts, forests, cities, and snow-covered escapes.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            justifyItems: "center",
          }}
        >
          {destinations.map((dest, index) => (
            <div
              key={index}
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                backgroundColor: "#fff",
                width: "100%",
                maxWidth: "350px",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={dest.image}
                alt={dest.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "20px" }}>
                <h3 style={{ marginBottom: "10px" }}>{dest.name}</h3>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "15px",
                    color: "#0d47a1",
                  }}
                >
                  <MapPin
                    size={22}
                    title="View on Map"
                    onClick={() => openMap(dest.name)}
                    style={{ cursor: "pointer" }}
                  />
                  <Calendar
                    size={22}
                    title="Plan Trip"
                    onClick={() => openCalendar(dest.name)}
                    style={{ cursor: "pointer" }}
                  />
                  <Users
                    size={22}
                    title="Group Booking"
                    onClick={() => openGroup(dest.name)}
                    style={{ cursor: "pointer" }}
                  />
                  <Camera
                    size={22}
                    title="View Photos"
                    onClick={() => openCamera(dest.name)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
