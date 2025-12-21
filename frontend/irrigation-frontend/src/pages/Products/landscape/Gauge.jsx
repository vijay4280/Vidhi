import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const Gauge = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Pressure Gauge"
        bgImage="/img/drip-head-44.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Landscape Irrigation", link: "/products/landscape" },
          { label: "Pressure Gauge" },
        ]}
      />

      {/* CONTENT */}
      <section className="cycle_section layout_padding">
        <div className="container">

          {/* SECTION TITLE */}
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
            <p className="fs-5 fw-bold text-primary">Landscape Irrigation</p>
            <hr className="border-success" />
            <h1 className="display-5 text-primary">
              Control Valves & ACC
            </h1>
            <hr className="border-success" />
          </div>

          {/* MAIN CONTENT */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/img/Drip-42.png"
                alt="Pressure Gauge"
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 mt-4">
              <h2 className="text-success">Pressure Gauge</h2>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>
                  Manufactured from high-quality PVC material, ensuring strength
                  and long service life.
                </li>
                <li>
                  Connections available in Threaded (BSP, NPT & BSPT) or Solvent
                  Glued Socket Ends, conforming to ISO, ASTM, BS, and DIN
                  standards.
                </li>
                <li>
                  User-friendly design enables smooth operation with low torque.
                </li>
                <li>
                  Corrosion-resistant and UV-stabilized body ensures durability
                  in harsh outdoor conditions.
                </li>
                <li>
                  Reliable and easy to maintain, offering long-term performance
                  with minimal servicing.
                </li>
                <li>
                  Suitable for temperature applications up to 50°C.
                </li>
                <li>
                  Available sizes: ½", ¾", 1", 1¼", 1½", 2", 2½", and 3".
                </li>
              </ul>

              <h4 className="text-success mt-4">Application</h4>
              <hr className="border-success" />
              <p className="text-primary">
                <b>
                  Ideal for monitoring pressure in irrigation distribution lines
                  and overhead sprinkler systems, ensuring smooth, accurate, and
                  reliable water control in agricultural and industrial
                  applications.
                </b>
              </p>

              <hr className="border-success" />
            </div>
          </div>

          {/* PDF BUTTON */}
          <div className="text-center mt-4">
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

export default Gauge;
