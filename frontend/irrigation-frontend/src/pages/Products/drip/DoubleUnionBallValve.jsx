import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const DoubleUnionBallValve = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Double Union Ball Valve"
        bgImage="/img/drip-head-42.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Drip Irrigation", link: "/products/drip" },
          { label: "Double Union Ball Valve" },
        ]}
      />

      {/* PAGE CONTENT */}
      <section className="container py-5">
        {/* SECTION TITLE */}
        <div
          className="text-center mb-5"
          style={{ maxWidth: "500px", margin: "0 auto" }}
        >
          <p className="fs-5 fw-bold text-primary">Drip Irrigation</p>
          <hr className="border-success" />
          <h1 className="display-5 text-primary">Control Valves & ACC</h1>
          <hr className="border-success" />
        </div>

        {/* PRODUCT SECTION */}
        <div className="row align-items-start">
          {/* IMAGE */}
          <div className="col-md-6">
            <img
              src="/img/Drip-43.png"
              alt="Double Union Ball Valve"
              className="img-fluid rounded"
            />
          </div>

          {/* CONTENT */}
          <div className="col-md-6 mt-4">
            <h2 className="text-success">Double Union Ball Valve</h2>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li>
                Made from high-quality Polypropylene (PP) material for excellent
                strength and long-lasting performance.
              </li>
              <li>
                Available with Threaded (BSP, NPT & BSPT) or Solvent Glued Socket
                Ends as per ISO, ASTM, BS & DIN standards.
              </li>
              <li>
                Ergonomic and user-friendly design ensures smooth handle
                operation with low torque.
              </li>
              <li>
                Corrosion-resistant and UV-stabilized body suitable for outdoor
                and chemical-prone environments.
              </li>
              <li>
                Union design allows easy installation and repair without
                disturbing the pipeline.
              </li>
              <li>
                Reliable, durable, and easy to maintain with minimal upkeep.
              </li>
              <li>
                Suitable for temperature applications up to 50°C.
              </li>
              <li>
                <b>Available Sizes:</b> 1", 1¼", 1½", 2", 2½", 3"
              </li>
            </ul>

            {/* APPLICATION */}
            <h4 className="text-success mt-4">Application</h4>
            <hr className="border-success" />

            <p className="text-primary fw-semibold">
              Ideal for manual shut-off, overhead sprinkler control, and isolation
              in irrigation distribution lines. Ensures smooth, leak-free, and
              durable water management for agricultural and industrial systems.
            </p>

            {/* PDF BUTTON */}
            <div className="mt-4">
              <a
                href="/AM pdf.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary px-4 py-2"
              >
                📘 View PDF
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoubleUnionBallValve;
