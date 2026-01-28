import { useEffect, useState } from "react";
import api from "../utils/api";
import DoctorCard from "../components/DoctorCard";
import SlotBooking from "../components/SlotBooking";
import Navbar from "../components/Navbar";
import SpecialistFilter from "../components/SpecialistFilter";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [selected, setSelected] = useState(null);
  const [specialist, setSpecialist] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (specialist) {
      api.get(`/doctors/specialist/${specialist}`).then(res => setDoctors(res.data));
    } else {
      api.get("/doctors").then(res => setDoctors(res.data));
    }
  }, [specialist]);

  const filteredDoctors = doctors.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div style={{ padding: 40 }}>
        <h1 style={{ textAlign: "center" }}>Available Doctors</h1>
        
        <div style={{
          display: "flex",
          gap: 20,
          marginBottom: 30,
          justifyContent: "center"
        }}>
          <input
            type="text"
            placeholder="Search doctors..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              padding: "10px 15px",
              borderRadius: 8,
              border: "1px solid #ddd",
              width: "300px"
            }}
          />
          <SpecialistFilter setSpecialist={setSpecialist} />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 30
        }}>
          {filteredDoctors.map(d => (
            <DoctorCard
              key={d._id}
              doctor={d}
              onSelect={setSelected}
            />
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <p style={{ textAlign: "center", marginTop: 40 }}>No doctors found</p>
        )}

        {selected && (
          <SlotBooking
            doctor={selected}
            close={() => setSelected(null)}
          />
        )}
      </div>
    </>
  );
}
