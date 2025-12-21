import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const Low = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Low Thickness Plain Laterals"
        bgImage="/img/eco-head-1.png"
        titleClass="text-green"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Economical Irrigation", link: "/products/economical" },
          { label: "Low Thickness Plain Laterals" },
        ]}
      />

      {/* CONTENT */}
      <section className="cycle_section layout_padding">
        <div className="container">

          {/* SECTION TITLE */}
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
            <p className="fs-5 fw-bold text-primary">Economical Irrigation</p>
            <hr className="border-success" />
            <h1 className="display-5 text-primary">
              Drip Tubing &amp; Fittings
            </h1>
            <hr className="border-success" />
          </div>

          {/* MAIN CONTENT */}
          <div className="row align-items-center">
            <div className="col-md-6 mt-4">
              <img
                src="/img/Eco-1.png"
                alt="Low Thickness Plain Laterals"
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 mt-4">
              <h2 className="text-success">
                LOW THICKNESS PLAIN LATERALS
              </h2>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>
                  Designed as a budget-friendly option, these low-thickness plain
                  laterals (ISI Class I) perfectly fulfill farmers’ irrigation
                  needs.
                </li>
                <li>
                  These laterals act as the backbone of any efficient drip
                  irrigation setup.
                </li>
                <li>
                  Manufactured using premium-quality 100% virgin raw material
                  for superior performance.
                </li>
                <li>
                  Each roll features laser-etched product information with time
                  stamping for complete production tracking.
                </li>
                <li>
                  Comes in neatly packed compact coils, ensuring convenient
                  storage and easy transportation.
                </li>
                <li>
                  UV-protected material safeguards the pipe from sunlight damage
                  and prevents stress-related cracks.
                </li>
                <li>
                  Every batch passes through strict quality inspections at
                  multiple manufacturing levels.
                </li>
                <li>
                  Suitable for both above-ground installation and underground
                  drip irrigation systems.
                </li>
                <li>
                  A green guiding strip helps in perfect alignment while
                  installing emitters or dripper accessories.
                </li>
                <li>
                  The smooth interior minimizes frictional resistance, ensuring
                  better water flow and long-term dependability.
                </li>
              </ul>

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

export default Low;
