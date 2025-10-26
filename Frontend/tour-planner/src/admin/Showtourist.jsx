import React, { useEffect, useState } from "react";

export default function ShowTourist() {
  const [tourists, setTourists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    email: "",
    phone: "",
    description: "",
    imageUrl: "",
  });

  // Fetch tourist data from backend
  const fetchTourists = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/tourist");
      const data = await res.json();
      setTourists(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTourists();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Update tourist
  const handleUpdate = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/tourist/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        fetchTourists();
        setEditingId(null);
      } else {
        alert("Failed to update tourist.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Delete tourist
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this tourist?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/tourist/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchTourists();
      } else {
        alert("Failed to delete tourist.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <div>Loading tourist destinations...</div>;

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Tourist Destinations</h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "2px solid #000",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Location</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Email</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Phone</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Description</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Image</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tourists.map((tourist) => (
            <tr key={tourist._id}>
              <td style={{ border: "1px solid #000", padding: "8px" }}>
                {editingId === tourist._id ? (
                  <input name="name" value={formData.name} onChange={handleChange} />
                ) : (
                  tourist.name
                )}
              </td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>
                {editingId === tourist._id ? (
                  <input name="location" value={formData.location} onChange={handleChange} />
                ) : (
                  tourist.location
                )}
              </td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>
                {editingId === tourist._id ? (
                  <input name="email" value={formData.email} onChange={handleChange} />
                ) : (
                  tourist.email
                )}
              </td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>
                {editingId === tourist._id ? (
                  <input name="phone" value={formData.phone} onChange={handleChange} />
                ) : (
                  tourist.phone
                )}
              </td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>
                {editingId === tourist._id ? (
                  <textarea name="description" value={formData.description} onChange={handleChange} />
                ) : (
                  tourist.description
                )}
              </td>
              <td style={{ border: "1px solid #000", padding: "8px", textAlign: "center" }}>
                <img src={tourist.imageUrl} alt={tourist.name} style={{ width: "100px" }} />
              </td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>
                {editingId === tourist._id ? (
                  <>
                    <button onClick={() => handleUpdate(tourist._id)} style={{ marginRight: "5px" }}>Save</button>
                    <button onClick={() => setEditingId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setEditingId(tourist._id);
                        setFormData(tourist);
                      }}
                      style={{ marginRight: "5px" }}
                    >
                      Edit
                    </button>
                    <button onClick={() => handleDelete(tourist._id)}>Delete</button>
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
