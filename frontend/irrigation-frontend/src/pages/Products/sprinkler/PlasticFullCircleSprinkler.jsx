import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const PlasticFullCircleSprinkler = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Plastic Full Circle Sprinkler"
        bgImage="/img/Spri-head-4.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Sprinkler Irrigation", link: "/products/sprinkler" },
          { label: "Plastic Full Circle Sprinkler" },
        ]}
      />

      {/* CONTENT */}
      <section className="container py-5">
        {/* SECTION TITLE */}
        <div
          className="text-center mx-auto mb-5"
          style={{ maxWidth: "500px" }}
        >
          <p className="fs-5 fw-bold text-primary">Sprinkler Irrigation</p>
          <hr className="border-success" />
          <h1 className="display-6 text-primary">
            Plastic Impact Sprinklers
          </h1>
          <hr className="border-success" />
        </div>

        {/* ===== PRODUCT 1 ===== */}
        <div className="row align-items-start mb-5">
          <div className="col-md-6">
            <img
              src="/img/Spri-11.png"
              alt="Plastic Full Circle Sprinkler"
              className="img-fluid"
            />
          </div>

          <div className="col-md-6 mt-4">
            <h2 className="text-success">Plastic Full Circle Sprinkler</h2>
            <hr className="border-success" />
            <h5 className="text-primary">
              1/2" SPRINKLER / MINI SPRINKLER
            </h5>

            <ul className="text-primary fw-semibold">
              <li>½" Full Circle Plastic Sprinkler for micro irrigation.</li>
              <li>Durable plastic bearing assembly.</li>
              <li>½" Male BSP/NPT connection.</li>
              <li>Stainless steel fulcrum pin, arm & spring.</li>
              <li>BIS approved & ISI marked.</li>
              <li>Low pressure operation – energy saving.</li>
              <li>Easy installation and maintenance.</li>
              <li>Uniform water distribution.</li>
            </ul>

            <h4 className="text-success mt-4">Application</h4>
            <hr className="border-success" />
            <p className="text-primary fw-semibold">
              Designed for micro irrigation in potato, onion, garlic, ginger,
              pulses, tea, and nurseries. Ensures efficient water use and better
              crop productivity.
            </p>

            <div className="text-center mt-4">
              <img
                src="/img/plastic-table-1.png"
                alt="Specification Table"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        {/* ===== PRODUCT 2 ===== */}
        <div className="row align-items-start mb-5">
          <div className="col-md-6">
            <img
              src="/img/Spri-12.png"
              alt="3/4 Agricultural Sprinkler"
              className="img-fluid"
            />
          </div>

          <div className="col-md-6 mt-4">
            <h5 className="text-primary">3/4" AGRICULTURAL SPRINKLER</h5>

            <ul className="text-primary fw-semibold">
              <li>¾" Agricultural Sprinkler.</li>
              <li>High-quality durable materials.</li>
              <li>Brass bearing assembly.</li>
              <li>¾" Male BSP/NPT connection.</li>
              <li>Adjustable diffuser pin.</li>
              <li>Stainless steel internal parts.</li>
              <li>Chemical-resistant bearing seal.</li>
              <li>Wide pressure working range.</li>
            </ul>

            <h4 className="text-success mt-4">Application</h4>
            <hr className="border-success" />
            <p className="text-primary fw-semibold">
              Ideal for agricultural fields, gardens, and nurseries ensuring
              uniform water coverage.
            </p>

            <div className="text-center mt-4">
              <img
                src="/img/plastic-table-4.png"
                alt="Specification Table"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        {/* ===== PRODUCT 3 ===== */}
        <div className="row align-items-start mb-5">
          <div className="col-md-6">
            <img
              src="/img/Spri-13.png"
              alt="3/4 Sprinkler"
              className="img-fluid mb-3"
            />
            <img
              src="/img/Spri-14.png"
              alt="3/4 Sprinkler"
              className="img-fluid"
            />
          </div>

          <div className="col-md-6 mt-4">
            <h5 className="text-primary">3/4" SPRINKLER</h5>

            <ul className="text-primary fw-semibold">
              <li>¾" Sprinkler for uniform irrigation.</li>
              <li>Available in Black & White.</li>
              <li>Brass or Plastic nozzle options.</li>
              <li>High-quality construction.</li>
              <li>Easy installation.</li>
              <li>Corrosion resistant.</li>
              <li>Consistent water distribution.</li>
              <li>Suitable for agriculture & landscape.</li>
            </ul>

            <h4 className="text-success mt-4">Application</h4>
            <hr className="border-success" />
            <p className="text-primary fw-semibold">
              Suitable for agricultural fields, lawns, and gardens ensuring
              healthy plant growth.
            </p>

            <div className="text-center mt-4">
              <img
                src="/img/plastic-table-2.png"
                alt="Specification Table"
                className="img-fluid mb-3"
              />
              <img
                src="/img/plastic-table-3.png"
                alt="Specification Table"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        {/* PDF */}
        <div className="text-center">
          <a
            href="/AM pdf.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary px-4 py-2"
          >
            View PDF
          </a>
        </div>
      </section>
    </>
  );
};

export default PlasticFullCircleSprinkler;
