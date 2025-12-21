import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const VenturiInjector = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Venturi Injector"
        bgImage="/img/drip-head-40.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Drip Irrigation", link: "/products/drip" },
          { label: "Venturi Injector" },
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
          <h1 className="display-6 text-primary">Fertigation Devices</h1>
          <hr className="border-success" />
        </div>

        {/* ===== 3/4" VENTURI WITH SUCTION PIPE ===== */}
        <div className="row mb-5 align-items-start">
          <div className="col-md-6">
            <img
              src="/img/Spri-27.png"
              alt="Venturi Injector"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-6">
            <h2 className="text-success mt-4">Venturi Injector</h2>
            <hr className="border-success" />

            <h5 className="text-primary">
              3/4" Venturi Injector with Suction Pipe & Filter
            </h5>

            <ul className="text-primary fw-semibold">
              <li>100% virgin premium material construction</li>
              <li>Chemical & corrosion resistant</li>
              <li>Compact design for easy installation</li>
              <li>Works on differential pressure principle</li>
              <li>Uniform fertilizer mixing & delivery</li>
              <li>Cost-effective fertigation solution</li>
              <li>Low maintenance & easy cleaning</li>
              <li>3/4" BSP male thread connection</li>
              <li>BIS approved ISI marked</li>
              <li>
                <b>Available Sizes:</b> ¾", 2"
              </li>
            </ul>
          </div>
        </div>

        {/* ===== 3/4" VENTURI WITH MANIFOLD ===== */}
        <div className="row mb-5 align-items-start">
          <div className="col-md-6">
            <img
              src="/img/Spri-28.png"
              alt="Venturi Injector Manifold"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-6">
            <h5 className="text-primary mt-4">
              3/4" Venturi Injector with Manifold
            </h5>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li>Premium virgin material build</li>
              <li>Resistant to fertilizers & chemicals</li>
              <li>Compact & efficient design</li>
              <li>Differential pressure operation</li>
              <li>Uniform fertigation performance</li>
              <li>Economical & reliable solution</li>
              <li>Low maintenance requirement</li>
              <li>3/4" BSP male thread</li>
              <li>BIS approved ISI marked</li>
            </ul>

            <h4 className="text-success mt-4">Application</h4>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li>Drip & sprinkler irrigation fertigation</li>
              <li>Agriculture, horticulture & greenhouses</li>
            </ul>
          </div>
        </div>

        {/* ===== 2" VENTURI WITH SUCTION PIPE ===== */}
        <div className="row mb-5 align-items-start">
          <div className="col-md-6">
            <img
              src="/img/Spri-29.png"
              alt="2 inch Venturi Injector"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-6">
            <h5 className="text-primary mt-4">
              2" Venturi Injector with Suction Pipe & Filter
            </h5>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li>100% virgin material construction</li>
              <li>Highly resistant to fertilizers & chemicals</li>
              <li>Differential pressure injection device</li>
              <li>Compact & lightweight design</li>
              <li>Accurate fertilizer mixing</li>
              <li>Low-cost & economical</li>
              <li>Low maintenance & reliable</li>
              <li>2" BSP male thread connection</li>
              <li>BIS approved ISI marked</li>
            </ul>

            <h4 className="text-success mt-4">Application</h4>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li>Drip & sprinkler fertigation systems</li>
              <li>Agriculture, nurseries & greenhouses</li>
            </ul>

            <div className="text-center mt-4">
              <img
                src="/img/Model-63.png"
                alt="Venturi Model"
                className="img-fluid"
              />
            </div>
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
            View PDF
          </a>
        </div>
      </section>
    </>
  );
};

export default VenturiInjector;
