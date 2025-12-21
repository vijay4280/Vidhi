import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const RiserPipes = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Riser Pipes"
        bgImage="/img/Spri-head-7.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Sprinkler Irrigation", link: "/products/sprinkler" },
          { label: "Riser Pipes" },
        ]}
      />

      {/* CONTENT */}
      <section className="cycle_section layout_padding">
        <div className="container">

          {/* SECTION TITLE */}
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
            <p className="fs-5 fw-bold text-primary">Sprinkler Irrigation</p>
            <hr className="border-success" />
            <h1 className="display-6 text-primary">Sprinkler Accessories</h1>
            <hr className="border-success" />
          </div>

          {/* MAIN CONTENT */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/img/Spri-22.png"
                alt="Riser Pipes"
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 mt-5">
              <h2 className="text-success">RISER PIPES</h2>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>Made from high-quality, UV-stabilized HDPE or PVC material.</li>
                <li>Available in various diameters and lengths.</li>
                <li>Corrosion and rust-resistant for long life.</li>
                <li>Provides stable connection between lateral and sprinkler.</li>
                <li>Withstands high operating pressure without leakage.</li>
                <li>Lightweight and easy to install.</li>
                <li>Ensures vertical water delivery to sprinklers.</li>
                <li>Compatible with all standard fittings.</li>
                <li>Durable for field and garden irrigation systems.</li>
                <li>
                  Internal water flow guide minimizes friction loss and ensures
                  smooth water movement.
                </li>
                <li>
                  Larger inlet reduces pressure drop during vertical
                  installation.
                </li>
                <li>
                  Allows flexible height adjustment as per crop requirements.
                </li>
              </ul>

              <h4 className="text-success mt-4">Application</h4>
              <hr className="border-success" />
              <p className="text-primary fw-semibold">
                Used for connecting sprinklers, micro-sprinklers, or emitters
                above ground for effective irrigation.
              </p>
              <p className="text-primary fw-semibold">
                Ideal for agricultural, horticultural, and landscape irrigation
                systems.
              </p>
              <hr className="border-success" />
            </div>
          </div>

          {/* PDF */}
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

export default RiserPipes;
