import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const SingleUnionBallValve = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Single Union Ball Valve"
        bgImage="/img/drip-head-44.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Drip Irrigation", link: "/products/drip" },
          { label: "Single Union Ball Valve" },
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
        <div className="row align-items-start mb-5">
          {/* IMAGE */}
          <div className="col-md-6">
            <img
              src="/img/Drip-42.png"
              alt="Single Union Ball Valve"
              className="img-fluid rounded"
            />
          </div>

          {/* CONTENT */}
          <div className="col-md-6">
            <h2 className="text-success mt-4">Single Union Ball Valve</h2>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li>
                Manufactured from high-quality PVC material ensuring strength and
                long service life.
              </li>
              <li>
                Available with Threaded (BSP, NPT & BSPT) or Solvent Glued Socket
                Ends as per ISO, ASTM, BS & DIN standards.
              </li>
              <li>
                Smooth handle operation with low torque for easy and reliable
                usage.
              </li>
              <li>
                Corrosion-resistant and UV-stabilized body suitable for outdoor
                conditions.
              </li>
              <li>
                Easy maintenance with dependable long-term performance.
              </li>
              <li>
                Suitable for temperature applications up to 50°C.
              </li>
              <li>
                <b>Available Sizes:</b> ½", ¾", 1", 1¼", 1½", 2", 2½", 3"
              </li>
            </ul>

            {/* APPLICATION */}
            <h4 className="text-success mt-4">Application</h4>
            <hr className="border-success" />

            <p className="text-primary fw-semibold">
              Ideal for manual shut-off and isolation in irrigation distribution
              lines and overhead sprinkler systems. Suitable for agricultural and
              industrial applications requiring smooth and reliable water
              control.
            </p>
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
            📘 View PDF
          </a>
        </div>
      </section>
    </>
  );
};

export default SingleUnionBallValve;
