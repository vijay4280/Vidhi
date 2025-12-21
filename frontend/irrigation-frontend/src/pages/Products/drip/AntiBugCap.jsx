import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const AntiBugCap = () => {
  return (
    <>
      {/* PRODUCT HEADER */}
      <ProductHeader
        title="Anti Bug Cap"
        bgImage="/img/drip-head-12.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Drip Irrigation", link: "/products/drip" },
          { label: "Anti Bug Cap" },
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
              src="/img/Drip-13.jpg"
              alt="Anti Bug Cap"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-6 mt-3">
            <h2 className="text-success mt-4">Anti Bug Cap</h2>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li className="mt-2">
                Prevents entry of insects, dust, and particles that may block
                the emitter outlet
              </li>
              <li className="mt-2">
                Acts as a diffuser to spread water evenly and avoid direct
                jetting
              </li>
              <li className="mt-2">
                Compatible with both PC and NPC online drippers
              </li>
              <li className="mt-2">
                Ensures consistent water flow and improved irrigation efficiency
              </li>
              <li className="mt-2">
                Easy to install, clean, and replace when required
              </li>
              <li className="mt-2">
                Made from durable, UV-stabilized material for long service life
              </li>
              <li className="mt-2">
                Helps maintain uniform watering and prevents clogging issues
              </li>
            </ul>

            <hr className="border-success mt-4" />

            <h3 className="text-success mt-4">Application</h3>
            <hr className="border-success" />
            <p className="text-primary fw-bold">
              Ideal for use in greenhouses, nurseries, and gardens to maintain
              smooth emitter performance and ensure even water distribution for
              all plants.
            </p>

            <hr className="border-success mt-4" />

            {/* MODEL IMAGE */}
            <div className="text-center mb-4">
              <img
                src="/img/Model-38.png"
                alt="Anti Bug Cap Model"
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

export default AntiBugCap;
