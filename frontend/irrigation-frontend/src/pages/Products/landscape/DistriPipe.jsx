import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const DistriPipe = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="6 mm Spaghetti / Distributor Pipes / Connecting Tube"
        bgImage="/img/land-head-8.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Landscape Irrigation", link: "/products/landscape" },
          { label: "6 mm Spaghetti / Distributor Pipes / Connecting Tube" },
        ]}
      />

      {/* CONTENT */}
      <section className="cycle_section layout_padding">
        <div className="container">

          {/* SECTION TITLE */}
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
            <p className="fs-5 fw-bold text-primary">Landscape Irrigation</p>
            <hr className="border-success" />
            <h1 className="display-6 text-primary">Emitting Devices</h1>
            <hr className="border-success" />
          </div>

          {/* MAIN CONTENT */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/img/Land-10.png"
                alt="6 mm Spaghetti / Distributor Pipes"
                className="img-fluid"
                style={{ maxHeight: "700px" }}
              />
            </div>

            <div className="col-md-6 mt-5">
              <h2 className="text-success">
                6 MM SPAGHETTI / DISTRIBUTOR PIPES / CONNECTING TUBE
              </h2>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>
                  Manufactured from high-quality, flexible, and UV-resistant
                  material for long service life.
                </li>
                <li>
                  Ensures easy installation and secure connection with drippers
                  and emitters.
                </li>
                <li>
                  Widely used in drip irrigation systems for gardens and
                  greenhouses.
                </li>
                <li>
                  Compatible with standard 5.5 mm drip fittings.
                </li>
                <li>
                  Resistant to chemicals, algae growth, and environmental stress.
                </li>
                <li>
                  Provides uniform water flow without leakage.
                </li>
              </ul>

              <hr className="border-success" />

              {/* APPLICATION */}
              <h4 className="text-success">Application</h4>
              <hr className="border-success" />
              <p className="text-primary">
                <b>
                  Used for connecting drippers, emitters, and micro-sprinklers in
                  home gardens, greenhouses, nurseries, and landscape irrigation
                  systems for efficient and precise water distribution.
                </b>
              </p>

              <hr className="border-success" />
            </div>
          </div>

          {/* PDF BUTTON */}
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

export default DistriPipe;
