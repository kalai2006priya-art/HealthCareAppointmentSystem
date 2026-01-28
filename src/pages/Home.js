import Navbar from "../components/Navbar";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <h1>Doctor Consultation at Home</h1>
        <p>Book doctors online easily</p>
        <a href="/login" className="btn">Book Now</a>
      </div>
    </>
  );
}
