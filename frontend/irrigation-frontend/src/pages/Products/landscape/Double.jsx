import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const Double = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Double Union Ball Valve"
        bgImage="/img/drip-head-42.png"
        titleClass="text-white"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Landscape Irrigation", link: "/products/landscape" },
          { label: "Double Union Ball Valve" },
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

          {/* MAIN CONTENT */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/img/Drip-43.png"
                alt="Double Union Ball Valve"
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 mt-4">
              <h2 className="text-success">Double Union Ball Valve</h2>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>
                  Made from high-quality Polypropylene (PP) material for excellent
                  strength and long-lasting performance.
                </li>
                <li>
                  Available with Threaded (BSP, NPT & BSPT) or Solvent Glued
                  Socket Ends as per ISO, ASTM, BS, and DIN standards.
                </li>
                <li>
                  Ergonomic design allows smooth handle operation with low
                  operational torque.
                </li>
                <li>
                  Corrosion-resistant and UV-stabilized body suitable for outdoor
                  and chemical-prone environments.
                </li>
                <li>
                  Double union design allows easy installation, removal, and
                  maintenance without disturbing pipelines.
                </li>
                <li>
                  Reliable, durable, and easy to maintain with consistent
                  long-term performance.
                </li>
                <li>
                  Suitable for temperature applications up to 50°C.
                </li>
                <li>
                  Available sizes: 1", 1¼", 1½", 2", 2½", and 3".
                </li>
              </ul>

              <h5 className="text-success mt-4">Application</h5>
              <hr className="border-success" />
              <p className="text-primary">
                <b>
                  Ideal for manual shut-off, overhead sprinkler control, and
                  isolation in irrigation distribution lines, ensuring smooth,
                  leak-free, and durable water management in agricultural and
                  industrial systems.
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
              📄
 </a>
          </div>

        </div>
      </section>
    </>
  );
};
export default Double;