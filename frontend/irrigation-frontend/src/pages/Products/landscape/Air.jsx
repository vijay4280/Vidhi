import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const Air = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Air Release Valve"
        bgImage="/img/drip-head-41.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Landscape Irrigation", link: "/products/landscape" },
          { label: "Air Release Valve" },
        ]}
      />

      {/* CONTENT */}
      <section className="cycle_section layout_padding">
        <div className="container">

          {/* SECTION TITLE */}
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
            <p className="fs-5 fw-bold text-primary">Landscape Irrigation</p>
            <hr className="border-success" />
            <h1 className="display-6 text-primary">
              Control Valves & Accessories
            </h1>
            <hr className="border-success" />
          </div>

          {/* ================= ARV – PLASTIC ================= */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <img
                src="/img/Drip-50.png"
                alt="Air Release Valve Plastic"
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 mt-4">
              <h2 className="text-success">Air Release Valve</h2>
              <hr className="border-success" />
              <h5 className="text-primary">ARV in Plastic</h5>

              <ul className="text-primary mt-3">
                <li>High-quality plastic construction for durability and corrosion resistance.</li>
                <li>Available in 3/4&quot; and 1&quot; Male BSP/NPT connections.</li>
                <li>Solid plastic float ball for smooth and reliable operation.</li>
                <li>Excellent seating characteristics prevent leakage.</li>
                <li>Works efficiently up to 4 kg/cm² pressure.</li>
                <li>Compact and lightweight design for easy installation.</li>
              </ul>

              <h5 className="text-success mt-4">Application</h5>
              <hr className="border-success" />
              <ul className="text-primary">
                <li>Used in drip and sprinkler irrigation systems for automatic air release.</li>
                <li>Suitable for agriculture, filtration units, and water supply systems.</li>
              </ul>
            </div>
          </div>

          {/* ================= ARV – ALUMINUM ================= */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <img
                src="/img/Drip-51.png"
                alt="Air Release Valve Aluminum"
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 mt-4">
              <h5 className="text-primary">ARV in Aluminum</h5>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>Gravity die-cast aluminum body for high strength.</li>
                <li>Available in 1½&quot;, 2&quot; and 3&quot; Female BSP/NPT sizes.</li>
                <li>Solid plastic float ball for smooth operation.</li>
                <li>Leak-proof seating design.</li>
                <li>Handles pressure up to 10 kg/cm².</li>
                <li>Corrosion-resistant for outdoor and industrial use.</li>
              </ul>

              <h5 className="text-success mt-4">Application</h5>
              <hr className="border-success" />
              <ul className="text-primary">
                <li>Used in drip, sprinkler, and filtration irrigation systems.</li>
                <li>Ideal for agricultural, industrial, and water management applications.</li>
              </ul>
            </div>
          </div>

          {/* PDF */}
          <div className="text-center mt-5">
            <a
              href="/AM pdf.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary px-4 py-2"
            >
              📄 View PDF
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default Air;
