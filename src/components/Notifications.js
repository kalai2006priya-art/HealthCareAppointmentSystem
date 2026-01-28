import { useEffect, useState } from "react";
import api from "../utils/api";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [showNotif, setShowNotif] = useState(false);

  useEffect(() => {
    // Fetch pending/approved appointments as notifications
    api.get("/appointments/patient")
      .then(res => {
        const pending = res.data.filter(a => a.status !== "Pending");
        setNotifications(pending);
      })
      .catch(() => {});
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setShowNotif(!showNotif)}
        style={{
          position: "relative",
          background: "none",
          border: "none",
          fontSize: "20px",
          cursor: "pointer"
        }}
      >
        🔔
        {notifications.length > 0 && (
          <span style={{
            position: "absolute",
            top: "-5px",
            right: "-5px",
            background: "red",
            color: "white",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px"
          }}>
            {notifications.length}
          </span>
        )}
      </button>

      {showNotif && (
        <div style={{
          position: "absolute",
          top: "40px",
          right: "-100px",
          background: "white",
          border: "1px solid #ddd",
          borderRadius: 8,
          width: "300px",
          maxHeight: "400px",
          overflowY: "auto",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          zIndex: 1000
        }}>
          {notifications.length === 0 ? (
            <p style={{ padding: 15, textAlign: "center", color: "#999" }}>
              No new notifications
            </p>
          ) : (
            notifications.map(notif => (
              <div
                key={notif._id}
                style={{
                  padding: 12,
                  borderBottom: "1px solid #eee",
                  fontSize: "13px"
                }}
              >
                <p style={{ margin: 0, fontWeight: "bold", color: notif.status === "Approved" ? "green" : "red" }}>
                  {notif.status}
                </p>
                <p style={{ margin: "5px 0 0 0", color: "#666" }}>
                  Dr. {notif.doctorName} - {notif.date}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
