import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import Navbar from "../components/Navbar";

export default function DoctorDetails() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState({});

  const book = async e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    await api.post("/appointments", {
      doctorId: doctor._id,
      doctorName: doctor.name,
      specialization: doctor.specialization,
      date: data.date,
      slot: data.time
    });
    alert("Appointment booked");
  };

  useEffect(() => {
    api.get(`/doctors/${id}`).then(res => setDoctor(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="dash-card">
        <h2>{doctor.name}</h2>
        <p>{doctor.specialization}</p>
        <p>{doctor.description}</p>

        <form onSubmit={book}>
          <input type="date" name="date" required />
          <input type="time" name="time" required />
          <button>Book Appointment</button>
        </form>
      </div>
    </>
  );
}
