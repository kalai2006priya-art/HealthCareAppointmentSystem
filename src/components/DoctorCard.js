export default function DoctorCard({ doctor, onSelect }) {
  return (
    <div className="card" style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
      <div style={{ padding: 15 }}>
        <h3>{doctor.name}</h3>
        <p style={{ color: "#666", marginBottom: 5 }}>{doctor.specialization}</p>
        <p style={{ fontSize: "14px", color: "#999" }}>{doctor.experience} years experience</p>

        <div style={{ marginBottom: 10, padding: "8px 0", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
          <p style={{ fontSize: "14px", margin: "5px 0" }}>
            ⭐ {doctor.rating}/5 ({doctor.reviews} reviews)
          </p>
          <p style={{ fontSize: "13px", color: "#666", margin: "5px 0" }}>
            Available: {doctor.availability.days.join(", ")}
          </p>
        </div>

        <p style={{ fontSize: "13px", color: "#777", marginBottom: 15, minHeight: "40px" }}>
          {doctor.description}
        </p>

        <button 
          onClick={() => onSelect(doctor)}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: "14px"
          }}
        >
          View Slots & Book
        </button>
      </div>
    </div>
  );
}
