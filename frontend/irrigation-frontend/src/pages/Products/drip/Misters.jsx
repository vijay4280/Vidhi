import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const Misters = () => {
  return (
    <>
      {/* PRODUCT HEADER */}
      <ProductHeader
        title="Misters"
        bgImage="/img/drip-head-13.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Drip Irrigation", link: "/products/drip" },
          { label: "Misters" },
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
              src="/img/Drip-14.png"
              alt="Misters"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-6 mt-3">
            <h2 className="text-success mt-4">Misters</h2>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li className="mt-2">
                Manufactured from high-grade virgin engineering material with UV
                stabilization
              </li>
              <li className="mt-2">
                Essential for controlled environment agriculture and precision
                irrigation
              </li>
              <li className="mt-2">
                Functions as a humidifier to maintain optimal humidity levels
              </li>
              <li className="mt-2">
                Provides uniform fine mist water distribution
              </li>
              <li className="mt-2">
                Available with anti-drip / leak prevention mechanisms
              </li>
              <li className="mt-2">
                Easy to install, clean, and maintain
              </li>
              <li className="mt-2">
                Gentle mist suitable for delicate plants and seedlings
              </li>
              <li className="mt-2">
                Energy-efficient with low water consumption
              </li>
              <li className="mt-2">
                Optional Leak Prevention Devices (LPD) available
              </li>
            </ul>

            <hr className="border-success mt-4" />
          </div>
        </div>

        {/* APPLICATION SECTION */}
        <div className="row mt-5 align-items-start">
          <div className="col-md-6 mb-4">
            <img
              src="/img/Drip-15.jpg"
              alt="Misters Application"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-6 mt-3">
            <h3 className="text-success">Application</h3>
            <hr className="border-success" />
            <p className="text-primary fw-bold">
              Best suited for greenhouses, nurseries, and shade houses for
              overhead cooling, humidity control, and uniform misting to enhance
              plant growth under controlled climatic conditions.
            </p>

            <hr className="border-success mt-4" />

            <div className="text-center mb-4">
              <img
                src="/img/drip-table-14.png"
                alt="Misters Table"
                className="img-fluid mb-3"
              />
              <img
                src="/img/Model-39.png"
                alt="Misters Model"
                className="img-fluid"
              />
            </div>
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
            View PDF
          </a>
        </div>
      </section>
    </>
  );
};

export default Misters;
