import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const AirReleaseValve = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Air Release Valve"
        bgImage="/img/drip-head-41.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Drip Irrigation", link: "/products/drip" },
          { label: "Air Release Valve" },
        ]}
      />

      {/* CONTENT */}
      <section className="container py-5">
        {/* SECTION TITLE */}
        <div
          className="text-center mb-5"
          style={{ maxWidth: "500px", margin: "0 auto" }}
        >
          <p className="fs-5 fw-bold text-primary">Drip Irrigation</p>
          <hr className="border-success" />
          <h1 className="display-5 text-primary">Control Valves & ACC</h1>
          <hr className="border-success" />
        </div>

        {/* ===== ARV PLASTIC ===== */}
        <div className="row mb-5 align-items-start">
          <div className="col-md-6">
            <img
              src="/img/Drip-50.png"
              alt="Air Release Valve Plastic"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-6">
            <h2 className="text-success mt-4">Air Release Valve</h2>
            <hr className="border-success" />

            <h5 className="text-primary">ARV in Plastic</h5>

            <ul className="text-primary fw-semibold">
              <li>High-quality plastic body for durability & corrosion resistance</li>
              <li>Available in ¾" & 1" Male BSP/NPT connections</li>
              <li>Solid plastic float ball for smooth operation</li>
              <li>Excellent seating to prevent leakage</li>
              <li>Working pressure up to 4 kg/cm²</li>
              <li>Lightweight & compact design</li>
              <li>
                <b>Available Sizes:</b> ¾", 1", 1½", 2", 3"
              </li>
            </ul>

            <h4 className="text-success mt-4">Application</h4>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li>Drip & sprinkler irrigation systems</li>
              <li>Agriculture, filtration & water supply systems</li>
            </ul>
          </div>
        </div>

        {/* ===== ARV ALUMINUM ===== */}
        <div className="row mb-5 align-items-start">
          <div className="col-md-6">
            <img
              src="/img/Drip-51.png"
              alt="Air Release Valve Aluminum"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-6">
            <h5 className="text-primary mt-4">ARV in Aluminum</h5>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li>Gravity die-cast aluminum body for high strength</li>
              <li>Available in 1½", 2" & 3" Female BSP/NPT</li>
              <li>Solid plastic float ball for reliable operation</li>
              <li>Leak-proof seating characteristics</li>
              <li>Working pressure up to 10 kg/cm²</li>
              <li>Corrosion-resistant & rugged construction</li>
            </ul>

            <h4 className="text-success mt-4">Application</h4>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li>Drip, sprinkler & filtration systems</li>
              <li>Agricultural, industrial & water management use</li>
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
            📘 View PDF
          </a>
        </div>
      </section>
    </>
  );
};

export default AirReleaseValve;
