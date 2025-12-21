import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const OnlinePCDripper = () => {
  return (
    <>
      {/* PRODUCT HEADER (FIXED – SAME FOR ALL PRODUCTS) */}
      <ProductHeader
        title="Online PC Dripper / Emitters"
        bgImage="/img/drip-head-5.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Drip Irrigation", link: "/products/drip" },
          { label: "Online PC Dripper / Emitters" },
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
              src="/img/Drip-4.jpg"
              alt="Online PC Dripper Emitters"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-6 mt-3">
            <h2 className="text-success">Online PC Dripper / Emitters</h2>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li className="mt-2">
                Uniform water discharge under varying pressure conditions
              </li>
              <li className="mt-2">
                Made from <b>100% virgin raw materials</b> for long life
              </li>
              <li className="mt-2">
                Self-flushing mechanism reduces clogging
              </li>
              <li className="mt-2">
                Color-coded for easy flow-rate identification (2, 4, 8 LPH)
              </li>
              <li className="mt-2">
                Resistant to chemicals and fertilizers
              </li>
              <li className="mt-2">
                Accurate and consistent flow rate
              </li>
              <li className="mt-2">Easy to install</li>
              <li className="mt-2">Compatible with Anti-Bug cap</li>
              <li className="mt-2">
                Extended outlet supports micro tube connections
              </li>
              <li className="mt-2">
                Sealed turbulent flow path with diaphragm ensures pressure
                compensation
              </li>
            </ul>

            <hr className="border-success mt-4" />

            <h3 className="text-success mt-4">Applications</h3>
            <hr className="border-success" />
            <p className="text-primary fw-bold">
              Suitable for undulated lands, hilly regions, orchards, trees,
              shrubs, vineyards, greenhouse irrigation, vertical gardens and
              landscape irrigation.
            </p>
          </div>
        </div>

        {/* TABLE / MODEL IMAGES */}
        <div className="row mt-5">
          <div className="col-md-6"></div>
          <div className="col-md-6 text-center">
            <img
              src="/img/drip-table-12.png"
              alt="Drip Table"
              className="img-fluid mb-4"
            />
            <img
              src="/img/Model-32.png"
              alt="Model 32"
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

export default OnlinePCDripper;
