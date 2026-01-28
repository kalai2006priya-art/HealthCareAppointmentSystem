import "./Auth.css";
import api from "../utils/api";

export default function Register() {
  const submit = async e => {
    e.preventDefault();
    try {
      const data = Object.fromEntries(new FormData(e.target));
      await api.post("/auth/register", data);
      alert("Registration successful! Please login.");
      window.location = "/login";
    } catch (err) {
      alert(err.response?.data || "Registration failed");
    }
  };

  return (
    <form className="auth-box" onSubmit={submit}>
      <h2>Register</h2>
      <input name="name" placeholder="Name" required />
      <input name="email" placeholder="Email" type="email" required />
      <input name="password" type="password" placeholder="Password" required />
      <select name="role" required>
        <option value="">Select Role</option>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select>
      <button>Register</button>
    </form>
  );
}
