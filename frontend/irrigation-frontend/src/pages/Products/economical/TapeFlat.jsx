import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const TapeFlat = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Thin Wall Drip Tape Flat"
        bgImage="/img/eco-head-3.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Economical Irrigation", link: "/products/economical" },
          { label: "Thin Wall Drip Tape Flat" },
        ]}
      />

      {/* CONTENT SECTION */}
      <section className="cycle_section layout_padding">
        <div className="container">

          {/* SECTION HEADING */}
          <div
            className="text-center mx-auto mb-5"
            style={{ maxWidth: "500px" }}
          >
            <p className="fs-5 fw-bold text-primary">
              Economical Irrigation
            </p>
            <h1 className="display-5 text-primary">
              Drip Tubing & Fittings
            </h1>
          </div>

          {/* PRODUCT DETAILS */}
          <div className="row align-items-center">
            {/* LEFT IMAGE */}
            <div className="col-md-6 mt-4">
              <img
                src="/img/Eco-2.png"
                alt="Thin Wall Drip Tape Flat"
                className="img-fluid"
                style={{ maxHeight: "700px" }}
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-md-6 mt-4">
              <h2 className="text-success">
                Thin Wall Drip Tape – Flat
              </h2>
              <hr className="border-success border-3" />

              <ul className="text-primary">
                <li>
                  Produced using <b>100% pure virgin raw material</b>, ensuring
                  strength, flexibility, and long service life.
                </li>
                <li>
                  Designed with <b>UV shielding properties</b> to protect against
                  sunlight damage and prevent cracking.
                </li>
                <li>
                  Available in <b>2 LPH to 4 LPH discharge options</b>, suitable
                  for various crop requirements.
                </li>
                <li>
                  Maintains <b>very high water output uniformity</b> with a
                  coefficient of variation <b>below 5%</b>.
                </li>
                <li>
                  Offers <b>excellent resistance to fertilizers and chemicals</b>
                  for reliable long-term operation.
                </li>
                <li>
                  Features a <b>large flow path emitter design</b> to minimize
                  clogging even with challenging water quality.
                </li>
                <li>
                  <b>Adjustable emitter spacing</b> starting from 20 cm to match
                  crop and field layout.
                </li>
                <li>
                  Ensures <b>uniform water distribution</b> for optimum irrigation
                  efficiency.
                </li>
                <li>
                  Ideal for <b>high-precision irrigation</b>, helping farmers
                  optimize water usage.
                </li>
                <li>
                  Delivers <b>smooth and consistent flow</b> across different soil
                  and crop conditions.
                </li>
              </ul>

              <hr className="border-success" />
            </div>
          </div>

          {/* PDF BUTTON */}
          <div className="text-center mt-5">
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

export default TapeFlat;
