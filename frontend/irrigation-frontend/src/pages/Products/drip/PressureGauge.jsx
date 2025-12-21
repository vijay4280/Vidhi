import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const PressureGauge = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Pressure Gauge"
        bgImage="/img/drip-head-44.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Drip Irrigation", link: "/products/drip" },
          { label: "Pressure Gauge" },
        ]}
      />

      {/* PAGE CONTENT */}
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

        {/* PRODUCT SECTION */}
        <div className="row align-items-start">
          {/* IMAGE */}
          <div className="col-md-6">
            <img
              src="/img/Drip-42.png"
              alt="Pressure Gauge"
              className="img-fluid rounded"
            />
          </div>

          {/* CONTENT */}
          <div className="col-md-6 mt-4">
            <h2 className="text-success">Pressure Gauge</h2>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li>
                Manufactured from high-quality PVC material, ensuring strength
                and long service life.
              </li>
              <li>
                Connections available in Threaded (BSP, NPT & BSPT) or Solvent
                Glued Socket Ends, conforming to ISO, ASTM, BS, and DIN standards.
              </li>
              <li>
                User-friendly design allows smooth operation with low torque.
              </li>
              <li>
                Corrosion-resistant and UV-stabilized body for outdoor durability.
              </li>
              <li>
                Reliable and easy to maintain with minimal servicing.
              </li>
              <li>
                Suitable for temperature applications up to 50°C.
              </li>
              <li>
                <b>Available Sizes:</b> ½", ¾", 1", 1¼", 1½", 2", 2½", 3"
              </li>
            </ul>

            {/* APPLICATION */}
            <h4 className="text-success mt-4">Application</h4>
            <hr className="border-success" />

            <p className="text-primary fw-semibold">
              Ideal for monitoring and controlling pressure in irrigation
              distribution lines and overhead sprinkler systems, ensuring smooth
              and reliable water management in agricultural and industrial
              applications.
            </p>

            {/* PDF BUTTON */}
            <div className="mt-4">
              <a
                href="/AM pdf.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary px-4 py-2"
              >
                📘 View PDF
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PressureGauge;
