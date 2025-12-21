// FounderVisionPage.jsx
// Navbar & Footer intentionally NOT included
// All content DATA-DRIVEN for Admin Panel control

import "./founderVision.css";

const founderVisionData = {
  hero: {
    title: "Founder’s Vision",
    name: "Late Shri Dhirendar Kumar Jain (Pipewale Bauji)",
    subtitle: "Engineer. Architect. Visionary.",
    image: "/img/dada-ji.png",
  },

  intro: [
    "Vidhi Enterprises stands on the foundation laid by Late Shri Dhirendar Kumar Jain, affectionately known as Pipewale Bauji, whose remarkable journey continues to guide our purpose, values, and ambition.",
    "An engineer and architect by profession, he believed that precision, discipline, and good design were not just principles for buildings—but for businesses, products, and life itself.",
    "In the early 1980s, with no capital, no workforce, and no industry connections, he started everything from his home, working tirelessly with just one helper.",
    "What began as a modest effort grew—brick by brick—into a brand known for quality, integrity, and innovation in irrigation components.",
  ],

  visionPoints: [
    "Make reliable irrigation components accessible",
    "Support farmers with quality they can trust",
    "Build a company where ethics come before profit",
    "Innovate to reduce water wastage and increase productivity",
  ],

  engineeringPoints: [
    "Accuracy in design",
    "Consistency in production",
    "Long-lasting materials",
    "Practical innovation",
    "Strong quality control",
  ],

  journeyPoints: [
    "A modern manufacturing setup",
    "A strong workforce",
    "Multiple product lines",
    "ISO and industry certifications",
    "A growing export presence across the Middle East, Africa & Asia",
  ],

  values: [
    "Integrity first",
    "Build long-term relationships",
    "Create value, not just products",
    "Work hard and stay grounded",
    "Let quality speak louder than marketing",
  ],
};

const FounderVisionPage = () => {
  return (
    <>
      {/* HERO */}
      <header className="fv-header">
        <div className="fv-hero">
          <div className="fv-hero-text">
            <h1>{founderVisionData.hero.title}</h1>
            <p className="founder-name">{founderVisionData.hero.name}</p>
            <p className="founder-subtitle">{founderVisionData.hero.subtitle}</p>
          </div>

          <div className="fv-hero-image">
            <img src={founderVisionData.hero.image} alt="Founder" />
          </div>
        </div>
      </header>

      {/* INTRO */}
      <section className="fv-intro">
        <div className="container">
          {founderVisionData.intro.map((text, i) => (
            <p  key={i}>{text}</p>
          ))}
        </div>
      </section>

      {/* VISION */}
      <section className="fv-section light">
        <div className="container">
          <h2>A Vision Rooted in Purpose</h2>
          <p className="subtitle">
            Shri D.K. Jain saw agriculture as the backbone of the nation and understood that water-efficient irrigation would shape the future of farming.
          </p>

          <div className="fv-grid">
            {founderVisionData.visionPoints.map((item, i) => (
              <div className="fv-card" key={i}>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING */}
      <section className="fv-section">
        <div className="container">
          <h2>Engineering Excellence as a Philosophy</h2>
          <p className="subtitle">
            Being an engineer and architect, he was meticulous about:
          </p>

          <div className="fv-grid">
            {founderVisionData.engineeringPoints.map((item, i) => (
              <div className="fv-card" key={i}>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="fv-section light">
        <div className="container">
          <h2 style = {{color: 'rgba(16, 16, 223, 0.668)'}}>From a Small Room to a Global Journey</h2>
          <hr className="text-success fw-bold"/>

          <div className="timeline text-success">
            {founderVisionData.journeyPoints.map((item, i) => (
              <div className="timeline-item" key={i}>
                <span className="dot"></span>
                <div className="content">
                  <h3>{item}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="fv-section">
        <div className="container">
          <h2>Values That Continue to Guide Us</h2>

          <div className="values-grid">
            {founderVisionData.values.map((val, i) => (
              <div className="value-card" key={i}>
                <h3>{val}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="promise">
        <div className="container">
          <h2>Looking Ahead — Continuing His Vision</h2>
          <p>
            Today, the company is led with the same passion he carried — to become a global benchmark in precision irrigation and sustainable manufacturing.
          </p>
          <p>
            Vidhi Enterprises moves forward carrying his legacy — with pride, purpose, and responsibility.
          </p>
        </div>
      </section>
    </>
  );
};

export default FounderVisionPage;
