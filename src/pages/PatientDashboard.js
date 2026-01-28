import { useEffect, useState } from "react";
import api from "../utils/api";
import Navbar from "../components/Navbar";

export default function PatientDashboard() {
  const [apps, setApps] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    api.get("/appointments/patient").then(res => setApps(res.data));
  }, []);

  const filteredApps = filter === "all" 
    ? apps 
    : apps.filter(a => a.status === filter);

  const stats = {
    total: apps.length,
    approved: apps.filter(a => a.status === "Approved").length,
    pending: apps.filter(a => a.status === "Pending").length,
    rejected: apps.filter(a => a.status === "Rejected").length
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: 40 }}>
        <h1>My Appointments</h1>

        {/* Statistics Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 20,
          marginBottom: 40
        }}>
          <div style={{
            padding: 20,
            backgroundColor: "#e7f3ff",
            borderRadius: 8,
            borderLeft: "4px solid #0066cc",
            textAlign: "center"
          }}>
            <p style={{ fontSize: "24px", fontWeight: "bold", margin: "0 0 10px 0" }}>
              {stats.total}
            </p>
            <p style={{ color: "#666", margin: 0 }}>Total Appointments</p>
          </div>

          <div style={{
            padding: 20,
            backgroundColor: "#fff3cd",
            borderRadius: 8,
            borderLeft: "4px solid #ffc107",
            textAlign: "center"
          }}>
            <p style={{ fontSize: "24px", fontWeight: "bold", margin: "0 0 10px 0" }}>
              {stats.pending}
            </p>
            <p style={{ color: "#666", margin: 0 }}>Pending</p>
          </div>

          <div style={{
            padding: 20,
            backgroundColor: "#d4edda",
            borderRadius: 8,
            borderLeft: "4px solid #28a745",
            textAlign: "center"
          }}>
            <p style={{ fontSize: "24px", fontWeight: "bold", margin: "0 0 10px 0" }}>
              {stats.approved}
            </p>
            <p style={{ color: "#666", margin: 0 }}>Approved</p>
          </div>

          <div style={{
            padding: 20,
            backgroundColor: "#f8d7da",
            borderRadius: 8,
            borderLeft: "4px solid #dc3545",
            textAlign: "center"
          }}>
            <p style={{ fontSize: "24px", fontWeight: "bold", margin: "0 0 10px 0" }}>
              {stats.rejected}
            </p>
            <p style={{ color: "#666", margin: 0 }}>Rejected</p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div style={{ marginBottom: 30, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button
            onClick={() => setFilter("all")}
            style={{
              padding: "10px 20px",
              backgroundColor: filter === "all" ? "#007bff" : "#ddd",
              color: filter === "all" ? "white" : "black",
              border: "none",
              borderRadius: 4,
              cursor: "pointer"
            }}
          >
            All ({apps.length})
          </button>
          <button
            onClick={() => setFilter("Pending")}
            style={{
              padding: "10px 20px",
              backgroundColor: filter === "Pending" ? "#ffc107" : "#ddd",
              color: filter === "Pending" ? "white" : "black",
              border: "none",
              borderRadius: 4,
              cursor: "pointer"
            }}
          >
            Pending ({stats.pending})
          </button>
          <button
            onClick={() => setFilter("Approved")}
            style={{
              padding: "10px 20px",
              backgroundColor: filter === "Approved" ? "#28a745" : "#ddd",
              color: filter === "Approved" ? "white" : "black",
              border: "none",
              borderRadius: 4,
              cursor: "pointer"
            }}
          >
            Approved ({stats.approved})
          </button>
          <button
            onClick={() => setFilter("Rejected")}
            style={{
              padding: "10px 20px",
              backgroundColor: filter === "Rejected" ? "#dc3545" : "#ddd",
              color: filter === "Rejected" ? "white" : "black",
              border: "none",
              borderRadius: 4,
              cursor: "pointer"
            }}
          >
            Rejected ({stats.rejected})
          </button>
        </div>

        {/* Appointments List */}
        {filteredApps.length === 0 ? (
          <div style={{
            textAlign: "center",
            padding: 40,
            backgroundColor: "#f8f9fa",
            borderRadius: 8,
            color: "#666"
          }}>
            <p style={{ fontSize: "18px" }}>No appointments found</p>
            <p style={{ fontSize: "14px", color: "#999" }}>
              <a href="/doctors" style={{ color: "#007bff", textDecoration: "none" }}>
                Book an appointment
              </a> to get started
            </p>
          </div>
        ) : (
          <div>
            {filteredApps.map(a => (
              <div
                key={a._id}
                style={{
                  padding: 20,
                  marginBottom: 15,
                  border: "1px solid #ddd",
                  borderRadius: 8,
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <div>
                  <h3 style={{ margin: "0 0 10px 0" }}> {a.doctorName}</h3>
                  <p style={{ margin: "5px 0", color: "#666" }}>
                    📅 {a.date} | ⏰ {a.slot}
                  </p>
                  <p style={{ margin: "5px 0", color: "#666" }}>
                    🏥 {a.specialization}
                  </p>
                </div>
                <div style={{
                  padding: "10px 20px",
                  borderRadius: 6,
                  fontWeight: "bold",
                  backgroundColor:
                    a.status === "Approved"
                      ? "#d4edda"
                      : a.status === "Rejected"
                      ? "#f8d7da"
                      : "#fff3cd",
                  color:
                    a.status === "Approved"
                      ? "#155724"
                      : a.status === "Rejected"
                      ? "#721c24"
                      : "#856404"
                }}>
                  {a.status === "Pending" ? "⏳ Pending" : a.status === "Approved" ? "✅ Approved" : "❌ Rejected"}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
