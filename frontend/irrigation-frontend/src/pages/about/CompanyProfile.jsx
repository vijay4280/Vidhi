import React, { useEffect } from "react";
import "./companyProfile.css";
import {
  heroContent,
  sections,
  promise,
} from "./companyProfile.data";

const CompanyProfile = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".animate").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="company-profile">

      {/* HERO */}
      <header className="company-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content animate">
          <h1>{heroContent.title}</h1>
          <p className="slogan">{heroContent.slogan}</p>
          <p className="hero-text">{heroContent.description}</p>
        </div>
      </header>

      {/* SECTIONS */}
      {sections.map((section, idx) => (
        <section key={idx} className="company-section animate">
          <div className="container">
            <h2>{section.heading}</h2>

            <div className="profile-grid">
              {section.items.map((item, i) => (
                <div className="profile-card animate" key={i}>
                  <i className={item.icon}></i>
                  <h3>{item.title}</h3>
                  {item.text && <p>{item.text}</p>}
                </div>
              ))}
            </div>

            {section.note && (
              <p className="section-note">{section.note}</p>
            )}
          </div>
        </section>
      ))}

      {/* PROMISE */}
      <section className="promise-section animate">
        <div className="container">
          <h2>{promise.title}</h2>
          <p>{promise.text}</p>
        </div>
      </section>

    </div>
  );
};

export default CompanyProfile;
