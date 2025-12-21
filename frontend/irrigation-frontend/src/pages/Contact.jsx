import { useState } from "react";
import API from "../api/axios";
import "../styles/contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    await API.post("/contact", form);
    alert("Message Sent Successfully");

    setForm({ firstName:"", lastName:"", email:"", phone:"", message:"" });
  };

  return (
    <form className="contact-form" onSubmit={submitHandler}>
      <input required placeholder="First Name" value={form.firstName}
        onChange={e => setForm({...form, firstName:e.target.value})} />

      <input required placeholder="Last Name" value={form.lastName}
        onChange={e => setForm({...form, lastName:e.target.value})} />

      <input required type="email" placeholder="Email"
        value={form.email}
        onChange={e => setForm({...form, email:e.target.value})} />

      <input required placeholder="Phone"
        value={form.phone}
        onChange={e => setForm({...form, phone:e.target.value})} />

      <textarea required placeholder="Message"
        value={form.message}
        onChange={e => setForm({...form, message:e.target.value})} />

      <button type="submit">Send Message</button>
    </form>
  );
};

export default Contact;
