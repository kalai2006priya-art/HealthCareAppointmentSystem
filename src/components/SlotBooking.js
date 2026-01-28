import "./Model.css";
import api from "../utils/api";

export default function SlotBooking({ doctor, close }) {
  const book = async slot => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first to book an appointment");
        window.location = "/login";
        return;
      }

      await api.post("/appointments", {
        doctorId: doctor._id,
        doctorName: doctor.name,
        specialization: doctor.specialization,
        slot,
        date: new Date().toDateString()
      });
      alert("Appointment Booked 🎉");
      close();
    } catch (err) {
      alert("Error booking appointment: " + (err.response?.data || "Please try again"));
    }
  };

  return (
    <div className="modal-bg">
      <div className="modal">
        <h3>{doctor.name}</h3>
        {doctor.availability.slots.map(s => (
          <button key={s} onClick={() => book(s)}>{s}</button>
        ))}
        <br />
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
}
