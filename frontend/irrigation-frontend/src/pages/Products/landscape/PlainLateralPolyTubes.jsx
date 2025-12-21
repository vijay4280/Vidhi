import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const PlainLateralPolytubes = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Plain Lateral / Polytubes"
        bgImage="/img/land-head-1.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Landscape Irrigation", link: "/products/landscape" },
          { label: "Plain Lateral / Polytubes" },
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
              Brown Drip Tubing
            </h1>
            <hr className="border-success" />
          </div>

          {/* MAIN CONTENT */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/img/Land-1.png"
                alt="Plain Lateral Polytubes"
                className="img-fluid"
                style={{ maxHeight: "1000px" }}
              />
            </div>

            <div className="col-md-6 mt-5">
              <h2 className="text-success">
                Plain Lateral / Polytubes
              </h2>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>
                  Laterals serve as the <b>core lifeline</b> of every efficient drip irrigation system.
                </li>
                <li>
                  Crafted from <b>premium 100% virgin raw materials</b> for unmatched durability.
                </li>
                <li>
                  Each roll features <b>laser-etched markings</b> with date stamps for traceability.
                </li>
                <li>
                  <b>Compact and neatly coiled</b> for easy storage and transportation.
                </li>
                <li>
                  Designed with <b>UV stabilization</b> to resist sunlight damage.
                </li>
                <li>
                  <b>Thoroughly tested</b> at every manufacturing stage for reliability.
                </li>
                <li>
                  Suitable for <b>surface and subsurface irrigation</b> applications.
                </li>
                <li>
                  <b>Smooth inner surface</b> minimizes friction loss for better flow.
                </li>
                <li>
                  <b>Strong, dependable, and long-lasting</b> performance.
                </li>
              </ul>

              <hr className="border-success" />

              {/* APPLICATION */}
              <h4 className="text-success">Application</h4>
              <hr className="border-success" />

              <p className="text-primary">
                <b>
                  Ideal for row crops, vegetables, horticultural plantations,
                  orchards, vineyards, fruit crops, sugarcane, floriculture,
                  banana, cotton, chillies, close-spaced field crops,
                  greenhouses, and landscape irrigation.
                </b>
              </p>

              <hr className="border-success" />
            </div>
          </div>

          {/* TABLE IMAGE */}
          <div className="row mt-5">
            <div className="col-md-6"></div>
            <div className="col-md-6 text-center">
              <img
                src="/img/TABLE.png"
                alt="Technical Table"
                className="img-fluid"
              />
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

export default PlainLateralPolytubes;
