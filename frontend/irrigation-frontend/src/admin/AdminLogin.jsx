import { useState } from "react";
import API from "../api/axios";
import "../styles/admin.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const { data } = await API.post("/admin/login", { email, password });
    localStorage.setItem("token", data.token);
    window.location.href = "/admin/dashboard";
  };

  return (
    <form onSubmit={submitHandler} className="login-form">
      <h2>Admin Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button>Login</button>
    </form>
  );
};

export default AdminLogin;
