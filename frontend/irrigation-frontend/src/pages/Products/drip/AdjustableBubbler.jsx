import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const AdjustableBubbler = () => {
  return (
    <>
      {/* PRODUCT HEADER (FIXED – SAME FOR ALL PRODUCTS) */}
      <ProductHeader
        title="Adjustable Bubbler With Filter And Take (0–420 LPH)"
        bgImage="/img/drip-head-8.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Drip Irrigation", link: "/products/drip" },
          { label: "Adjustable Bubbler With Filter And Take (0–420 LPH)", },
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
              src="/img/Drip-9.png"
              alt="Adjustable Bubbler With Filter And Take"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-6 mt-3">
            <h2 className="text-success">
              Adjustable Bubbler With Filter And Take (0–420 LPH)
            </h2>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li className="mt-2">
                Special inlet filter prevents blockage by sand or silt
              </li>
              <li className="mt-2">
                Umbrella pattern flood bubbler for uniform water distribution
              </li>
              <li className="mt-2">
                Made from <b>premium 100% virgin raw materials</b>
              </li>
              <li className="mt-2">
                Threaded inlet connection (½” BSP female) for secure fitting
              </li>
              <li className="mt-2">
                Adjustable flow control for precise water regulation
              </li>
              <li className="mt-2">
                Can be mounted on stake or PVC risers using adaptor
              </li>
              <li className="mt-2">
                Bubbler stake assembly available with 13mm ID, 12 & 16mm OD tubing
              </li>
              <li className="mt-2">
                Operates at 1.0–3.0 kg/cm² with flow range 0–240 LPH
              </li>
            </ul>

            <hr className="border-success mt-4" />

            <h3 className="text-success mt-4">Applications</h3>
            <hr className="border-success" />
            <p className="text-primary fw-bold">
              Suitable for vegetable crops, fruit orchards, nurseries, and garden
              plants. Ensures precise irrigation and nutrient delivery. Ideal
              for uneven terrains and variable soil conditions.
            </p>
          </div>
        </div>

        {/* MODEL IMAGE */}
        <div className="row mt-5">
          <div className="col-md-6">
            <img
              src="/img/Drip-10.png"
              alt="Bubbler Image"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-6 text-center mt-4">
            <img
              src="/img/Model-35.png"
              alt="Model 35"
              className="img-fluid mb-4"
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
            View PDF
          </a>
        </div>
      </section>
    </>
  );
};

export default AdjustableBubbler;
