import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const Single = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Single Union Ball Valve"
        bgImage="/img/drip-head-44.png"
        titleClass="text-white"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Landscape Irrigation", link: "/products/landscape" },
          { label: "Single Union Ball Valve" },
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
                src="/img/Drip-42.png"
                alt="Single Union Ball Valve"
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 mt-4">
              <h2 className="text-success">Single Union Ball Valve</h2>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>
                  Manufactured from high-quality PVC material ensuring strength
                  and long service life.
                </li>
                <li>
                  Available with Threaded (BSP, NPT & BSPT) or Solvent Glued
                  Socket Ends as per ISO, ASTM, BS, and DIN standards.
                </li>
                <li>
                  Smooth handle operation with low torque for user-friendly
                  performance.
                </li>
                <li>
                  Corrosion-resistant and UV-stabilized body suitable for outdoor
                  conditions.
                </li>
                <li>
                  Easy to maintain with reliable long-term performance.
                </li>
                <li>
                  Suitable for operating temperatures up to 50°C.
                </li>
                <li>
                  Available sizes: ½", ¾", 1", 1¼", 1½", 2", 2½", and 3".
                </li>
              </ul>

              <h5 className="text-success mt-4">Application</h5>
              <hr className="border-success" />
              <p className="text-primary">
                <b>
                  Ideal for manual shut-off and isolation in irrigation
                  distribution lines and overhead sprinkler systems, providing
                  smooth and reliable water control for agricultural and
                  industrial applications.
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

export default Single;
