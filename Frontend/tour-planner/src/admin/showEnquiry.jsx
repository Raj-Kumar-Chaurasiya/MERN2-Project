import React, { useEffect, useState } from "react";

export default function ShowEnquiry() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });

  // Fetch enquiries from backend
  const fetchEnquiries = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/enquiry");
      const data = await res.json();
      setEnquiries(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/enquiry/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        fetchEnquiries();
        setEditingId(null);
        setFormData({ name: "", email: "", phone: "", destination: "", message: "" });
      } else {
        alert("Failed to update enquiry");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this enquiry?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/enquiry/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchEnquiries();
      } else {
        alert("Failed to delete enquiry");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <div>Loading enquiries...</div>;

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Enquiries Admin Panel</h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "2px solid #000", // Outer table border
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Email</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Phone</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Destination</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Message</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enquiry) => (
            <tr key={enquiry._id}>
              <td style={{ border: "1px solid #000", padding: "8px" }}>
                {editingId === enquiry._id ? (
                  <input type="text" name="name" value={formData.name} onChange={handleChange} />
                ) : (
                  enquiry.name
                )}
              </td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>
                {editingId === enquiry._id ? (
                  <input type="email" name="email" value={formData.email} onChange={handleChange} />
                ) : (
                  enquiry.email
                )}
              </td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>
                {editingId === enquiry._id ? (
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                ) : (
                  enquiry.phone
                )}
              </td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>
                {editingId === enquiry._id ? (
                  <input type="text" name="destination" value={formData.destination} onChange={handleChange} />
                ) : (
                  enquiry.destination
                )}
              </td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>
                {editingId === enquiry._id ? (
                  <textarea name="message" value={formData.message} onChange={handleChange} />
                ) : (
                  enquiry.message
                )}
              </td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>
                {editingId === enquiry._id ? (
                  <>
                    <button onClick={() => handleUpdate(enquiry._id)} style={{ marginRight: "5px" }}>Save</button>
                    <button onClick={() => setEditingId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setEditingId(enquiry._id);
                        setFormData({
                          name: enquiry.name,
                          email: enquiry.email,
                          phone: enquiry.phone,
                          destination: enquiry.destination,
                          message: enquiry.message,
                        });
                      }}
                      style={{ marginRight: "5px" }}
                    >
                      Edit
                    </button>
                    <button onClick={() => handleDelete(enquiry._id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
