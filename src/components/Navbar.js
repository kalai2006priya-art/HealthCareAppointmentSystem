import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Notifications from "./Notifications";

export default function Navbar() {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUser(payload);
      } catch (e) {
        console.error("Token parse error:", e);
      }
    }
  }, [token]);

  return (
    <nav className="nav" style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 40px",
      backgroundColor: "#f8f9fa",
      borderBottom: "1px solid #ddd"
    }}>
      <h2>HealthCare+</h2>
      <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
        <Link to="/">Home</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/about">About</Link>

        {!token ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <Notifications />
            <span style={{ fontSize: 14, color: "#666" }}>
              {user ? `Logged in as: ${user.name}` : 'Loading...'}
            </span>
            <Link to={user?.role === "doctor" ? "/doctor" : "/patient"} style={{ color: "#007bff" }}>
              Dashboard
            </Link>
            <button onClick={() => {
              localStorage.clear();
              window.location = "/";
            }} style={{
              padding: "8px 15px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: 4,
              cursor: "pointer"
            }}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
