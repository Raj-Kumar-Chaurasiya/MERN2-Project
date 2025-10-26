import React, { useEffect, useState } from "react";

export default function ShowEnquiry() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchEnquiries = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/enquiry");
      const data = await res.json();
      setEnquiries(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching enquiries:", error);
      setErrorMsg("Failed to load enquiries");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this enquiry?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/enquiry/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setEnquiries(enquiries.filter((enquiry) => enquiry._id !== id));
      } else {
        const data = await res.json();
        alert(data.error || "Failed to delete enquiry");
      }
    } catch (error) {
      console.error("Error deleting enquiry:", error);
      alert("Server error! Could not delete enquiry.");
    }
  };

  const handleUpdate = async (id) => {
    const enquiryToUpdate = enquiries.find((e) => e._id === id);
    const newMessage = window.prompt("Update message:", enquiryToUpdate.message);
    if (newMessage === null) return;

    try {
      const res = await fetch(`http://localhost:5000/api/enquiry/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: newMessage }),
      });

      if (res.ok) {
        setEnquiries(
          enquiries.map((e) => (e._id === id ? { ...e, message: newMessage } : e))
        );
      } else {
        const data = await res.json();
        alert(data.error || "Failed to update enquiry");
      }
    } catch (error) {
      console.error("Error updating enquiry:", error);
      alert("Server error! Could not update enquiry.");
    }
  };

  if (loading) return <p>Loading enquiries...</p>;
  if (errorMsg) return <p>{errorMsg}</p>;

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>All Enquiries</h2>

      {enquiries.length === 0 ? (
        <p>No enquiries found.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#0d47a1", color: "#fff" }}>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>Name</th>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>Email</th>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>Phone</th>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>Destination</th>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>Message</th>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry) => (
              <tr key={enquiry._id} style={{ backgroundColor: "#f4f4f4" }}>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>{enquiry.name}</td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>{enquiry.email}</td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>{enquiry.phone}</td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>{enquiry.destination}</td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>{enquiry.message}</td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  <button
                    onClick={() => handleUpdate(enquiry._id)}
                    style={{
                      marginRight: "10px",
                      backgroundColor: "#ffc107",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(enquiry._id)}
                    style={{
                      backgroundColor: "#dc3545",
                      border: "none",
                      padding: "5px 10px",
                      color: "#fff",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
