import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// --- Import Models ---
import Enquiry from "./modules/Enquiry.js";
import Tourist from "./modules/Tourist.js";
import Contact from "./modules/Contact1.js";

const app = express();

// --- Middleware ---
app.use(express.json());
app.use(cors());

// --- MongoDB Connection ---
const MONGO_URI = "mongodb://localhost:27017/enquiryDB";
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB at localhost:27017"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// --- Enquiry Routes ---

// Create new enquiry
app.post("/api/enquiry", async (req, res) => {
  try {
    const { name, email, phone, destination, message } = req.body;
    if (!name || !email || !phone || !destination || !message)
      return res.status(400).json({ error: "Please fill all fields!" });

    const newEnquiry = new Enquiry({ name, email, phone, destination, message });
    await newEnquiry.save();

    res.status(201).json({ message: "✅ Enquiry saved successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error while saving enquiry" });
  }
});

// Get all enquiries
app.get("/api/enquiry", async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ error: "Server error while fetching enquiries" });
  }
});

// Update enquiry
app.put("/api/enquiry/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedEnquiry = await Enquiry.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedEnquiry) return res.status(404).json({ error: "Enquiry not found" });

    res.status(200).json({ message: "✅ Enquiry updated successfully!", updatedEnquiry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error while updating enquiry" });
  }
});

// Delete enquiry
app.delete("/api/enquiry/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEnquiry = await Enquiry.findByIdAndDelete(id);
    if (!deletedEnquiry) return res.status(404).json({ error: "Enquiry not found" });

    res.status(200).json({ message: "✅ Enquiry deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error while deleting enquiry" });
  }
});

// --- Tourist Routes ---
app.post("/api/tourist", async (req, res) => {
  try {
    const { name, location, email, phone, description, imageUrl } = req.body;
    if (!name || !location || !email || !phone || !description || !imageUrl)
      return res.status(400).json({ error: "Please fill all fields!" });

    const newTourist = new Tourist({ name, location, email, phone, description, imageUrl });
    await newTourist.save();

    res.status(201).json({ message: "✅ Tourist destination added successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server error while saving tourist" });
  }
});

app.get("/api/tourist", async (req, res) => {
  try {
    const tourists = await Tourist.find().sort({ createdAt: -1 });
    res.status(200).json(tourists);
  } catch (error) {
    res.status(500).json({ error: "Server error while fetching tourists" });
  }
});

// --- Contact Routes ---
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !phone || !subject || !message)
      return res.status(400).json({ error: "Please fill all fields!" });

    const newContact = new Contact({ name, email, phone, subject, message });
    await newContact.save();

    res.status(201).json({ message: "✅ Contact form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server error while saving contact" });
  }
});

app.get("/api/contact", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Server error while fetching contacts" });
  }
});

// --- Test route ---
app.get("/", (req, res) => res.send("🌍 Backend is running successfully!"));

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
