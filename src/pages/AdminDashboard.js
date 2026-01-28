import { useEffect, useState } from "react";
import api from "../utils/api";
import Navbar from "../components/Navbar";

export default function AdminDashboard() {
  const [view, setView] = useState("appointments");
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newDoctor, setNewDoctor] = useState({
    name: "",
    specialization: "General Physician",
    experience: 0,
    description: ""
  });

  useEffect(() => {
    loadData();
  }, [view]);

  const loadData = async () => {
    setLoading(true);
    try {
      if (view === "appointments") {
        const res = await api.get("/admin/appointments");
        setAppointments(res.data);
      } else if (view === "doctors") {
        const res = await api.get("/doctors");
        setDoctors(res.data);
      }
    } catch (err) {
      console.error("Error loading data:", err);
    }
    setLoading(false);
  };

  const updateAppointmentStatus = async (id, status) => {
    try {
      await api.put(`/appointments/${id}`, { status });
      alert(`Appointment ${status}`);
      loadData();
    } catch (err) {
      alert("Error updating appointment");
    }
  };

  const toggleDoctor = async (id, active) => {
    try {
      await api.put(`/admin/doctor/${id}`, { active: !active });
      alert(active ? "Doctor disabled" : "Doctor enabled");
      loadData();
    } catch (err) {
      alert("Error updating doctor");
    }
  };

  const addDoctor = async e => {
    e.preventDefault();
    try {
      await api.post("/admin/doctor", {
        ...newDoctor,
        experience: parseInt(newDoctor.experience),
        availability: {
          days: ["Monday", "Wednesday", "Friday"],
          slots: ["09:00 - 10:00", "10:00 - 11:00"]
        }
      });
      alert("Doctor added successfully");
      setNewDoctor({ name: "", specialization: "General Physician", experience: 0, description: "" });
      loadData();
    } catch (err) {
      alert("Error adding doctor");
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: 40 }}>
        <h1>Admin Dashboard</h1>

        <div style={{ marginBottom: 30, display: "flex", gap: 10 }}>
          <button
            onClick={() => setView("appointments")}
            style={{
              padding: "10px 20px",
              backgroundColor: view === "appointments" ? "#007bff" : "#ddd",
              color: view === "appointments" ? "white" : "black",
              border: "none",
              borderRadius: 4,
              cursor: "pointer"
            }}
          >
            Appointments
          </button>
          <button
            onClick={() => setView("doctors")}
            style={{
              padding: "10px 20px",
              backgroundColor: view === "doctors" ? "#007bff" : "#ddd",
              color: view === "doctors" ? "white" : "black",
              border: "none",
              borderRadius: 4,
              cursor: "pointer"
            }}
          >
            Doctors
          </button>
          <button
            onClick={() => setView("add-doctor")}
            style={{
              padding: "10px 20px",
              backgroundColor: view === "add-doctor" ? "#28a745" : "#ddd",
              color: view === "add-doctor" ? "white" : "black",
              border: "none",
              borderRadius: 4,
              cursor: "pointer"
            }}
          >
            Add Doctor
          </button>
        </div>

        {loading && <p>Loading...</p>}

        {view === "appointments" && (
          <div>
            <h2>Appointments</h2>
            {appointments.map(a => (
              <div
                key={a._id}
                style={{
                  padding: 15,
                  marginBottom: 10,
                  border: "1px solid #ddd",
                  borderRadius: 8
                }}
              >
                <p><strong>Patient:</strong> {a.patientName}</p>
                <p><strong>Doctor:</strong> {a.doctorName}</p>
                <p><strong>Date:</strong> {a.date} | {a.slot}</p>
                <p><strong>Status:</strong> <span style={{ color: a.status === "Approved" ? "green" : a.status === "Rejected" ? "red" : "orange" }}>
                  {a.status}
                </span></p>

                {a.status === "Pending" && (
                  <div style={{ marginTop: 10 }}>
                    <button
                      onClick={() => updateAppointmentStatus(a._id, "Approved")}
                      style={{ marginRight: 10, padding: "8px 15px", backgroundColor: "green", color: "white", border: "none", borderRadius: 4, cursor: "pointer" }}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateAppointmentStatus(a._id, "Rejected")}
                      style={{ padding: "8px 15px", backgroundColor: "red", color: "white", border: "none", borderRadius: 4, cursor: "pointer" }}
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {view === "doctors" && (
          <div>
            <h2>Manage Doctors</h2>
            {doctors.map(d => (
              <div
                key={d._id}
                style={{
                  padding: 15,
                  marginBottom: 10,
                  border: "1px solid #ddd",
                  borderRadius: 8
                }}
              >
                <p><strong>{d.name}</strong> - {d.specialization}</p>
                <p>Experience: {d.experience} years | Rating: {d.rating}/5</p>
                <button
                  onClick={() => toggleDoctor(d._id, d.active)}
                  style={{
                    padding: "8px 15px",
                    backgroundColor: d.active ? "red" : "green",
                    color: "white",
                    border: "none",
                    borderRadius: 4,
                    cursor: "pointer"
                  }}
                >
                  {d.active ? "Disable" : "Enable"}
                </button>
              </div>
            ))}
          </div>
        )}

        {view === "add-doctor" && (
          <div>
            <h2>Add New Doctor</h2>
            <form onSubmit={addDoctor} style={{ maxWidth: 500 }}>
              <input
                type="text"
                placeholder="Doctor Name"
                value={newDoctor.name}
                onChange={e => setNewDoctor({ ...newDoctor, name: e.target.value })}
                required
                style={{ width: "100%", padding: "10px", marginBottom: 10, borderRadius: 4, border: "1px solid #ddd" }}
              />
              <select
                value={newDoctor.specialization}
                onChange={e => setNewDoctor({ ...newDoctor, specialization: e.target.value })}
                style={{ width: "100%", padding: "10px", marginBottom: 10, borderRadius: 4, border: "1px solid #ddd" }}
              >
                <option>General Physician</option>
                <option>Cardiologist</option>
                <option>Dermatologist</option>
                <option>Pediatrician</option>
              </select>
              <input
                type="number"
                placeholder="Years of Experience"
                value={newDoctor.experience}
                onChange={e => setNewDoctor({ ...newDoctor, experience: e.target.value })}
                required
                style={{ width: "100%", padding: "10px", marginBottom: 10, borderRadius: 4, border: "1px solid #ddd" }}
              />
              <textarea
                placeholder="Description"
                value={newDoctor.description}
                onChange={e => setNewDoctor({ ...newDoctor, description: e.target.value })}
                style={{ width: "100%", padding: "10px", marginBottom: 10, borderRadius: 4, border: "1px solid #ddd", height: "100px" }}
              />
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: 4,
                  cursor: "pointer",
                  fontSize: "16px"
                }}
              >
                Add Doctor
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
