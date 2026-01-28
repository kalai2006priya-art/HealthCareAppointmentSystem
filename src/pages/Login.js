import "./Auth.css";
import api from "../utils/api";

export default function Login() {
  const submit = async e => {
    e.preventDefault();
    try {
      const data = Object.fromEntries(new FormData(e.target));
      const res = await api.post("/auth/login", data);
      localStorage.setItem("token", res.data.token);
      window.location = res.data.role === "patient" ? "/patient" : "/doctor";
    } catch (err) {
      alert(err.response?.data || "Login failed");
    }
  };

  return (
    <form className="auth-box" onSubmit={submit}>
      <h2>Login</h2>
      <input name="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <button>Login</button>
    </form>
  );
}
