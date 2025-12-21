import { useState, useEffect } from "react";
import API from "../api/axios";
import "../styles/newsletter.css";

const NewsletterPopup = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const submitHandler = async () => {
    await API.post("/newsletter", { email });
    alert("Subscribed!");
    setShow(false);
  };

  return (
    <div className="newsletter-overlay">
      <div className="newsletter-popup">
        <span
          className="newsletter-close"
          onClick={() => setShow(false)}
        >
          ✖
        </span>

        <h3>Subscribe to Newsletter</h3>

        <input
          type="email"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={submitHandler}>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsletterPopup;
