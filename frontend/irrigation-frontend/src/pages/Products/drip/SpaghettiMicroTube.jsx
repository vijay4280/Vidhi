import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const SpaghettiMicroTube = () => {
  return (
    <>
      {/* PRODUCT HEADER */}
      <ProductHeader
        title="5.5 mm Spaghetti / Distribution Pipe / Micro Tube"
        bgImage="/img/drip-head-11.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Drip Irrigation", link: "/products/drip" },
          {
            label:
              "5.5 mm Spaghetti / Distribution Pipe / Connecting Tube / Micro Tube",
          },
        ]}
      />

      {/* CONTENT SECTION */}
      <section className="container py-5">
        {/* SECTION HEADING */}
        <div
          className="text-center mb-5"
          style={{ maxWidth: "500px", margin: "0 auto" }}
        >
          <p className="fs-5 fw-bold text-success">Drip Irrigation</p>
          <hr className="border-success" />
          <h1 className="display-5 text-primary">Emitting Devices</h1>
          <hr className="border-success" />
        </div>

        <div className="row align-items-start">
          {/* LEFT IMAGE */}
          <div className="col-md-6 mb-4">
            <img
              src="/img/Drip-12.jpg"
              alt="5.5 mm Spaghetti Micro Tube"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-6 mt-3">
            <h2 className="text-success mt-4">
              5.5 mm Spaghetti / Distribution Pipe / Micro Tube
            </h2>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li className="mt-2">
                Made from high-quality, flexible, and UV-resistant material
              </li>
              <li className="mt-2">
                Easy installation with secure connection to drippers and
                emitters
              </li>
              <li className="mt-2">
                Commonly used in drip irrigation for gardens and greenhouses
              </li>
              <li className="mt-2">
                Compatible with standard <b>5.5 mm drip fittings</b>
              </li>
              <li className="mt-2">
                Resistant to chemicals, algae growth, and environmental stress
              </li>
              <li className="mt-2">
                Ensures uniform water flow without leakage
              </li>
            </ul>

            <hr className="border-success mt-4" />

            <h3 className="text-success mt-4">Application</h3>
            <hr className="border-success" />
            <p className="text-primary fw-bold">
              Used for connecting drippers, emitters, and micro-sprinklers in
              home gardens, greenhouses, nurseries, and landscape irrigation
              systems to ensure efficient and uniform water distribution.
            </p>

            <hr className="border-success mt-4" />

            {/* PDF BUTTON */}
            <div className="text-center mt-4">
              <a
                href="/AM pdf.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary px-4 py-2"
              >
                View PDF
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpaghettiMicroTube;
