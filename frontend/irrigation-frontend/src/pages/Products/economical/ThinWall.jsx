import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const ThinWall = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Thin Wall Drip Line Cylindrical"
        bgImage="/img/eco-head-2.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Economical Irrigation", link: "/products/economical" },
          { label: "Thin Wall Drip Line Cylindrical" },
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
                src="/img/Eco-24.png"
                alt="Thin Wall Drip Line Cylindrical"
                className="img-fluid"
                style={{ maxHeight: "700px" }}
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-md-6 mt-4">
              <h2 className="text-success">
                Thin Wall Drip Line Cylindrical
              </h2>
              <hr className="border-success border-3" />

              <ul className="text-primary">
                <li>
                  Manufactured using <b>premium 100% virgin material</b> to
                  ensure long-lasting field performance.
                </li>
                <li>
                  <b>UV-protected construction</b> withstands sunlight exposure
                  and prevents cracking.
                </li>
                <li>
                  Available with <b>2 LPH and 4 LPH discharge rates</b> for
                  flexible crop irrigation needs.
                </li>
                <li>
                  Designed with a <b>very low coefficient of variation (below 5%)</b>,
                  ensuring uniform water output.
                </li>
                <li>
                  Offers <b>high resistance to fertilizers and agro-chemicals</b>,
                  ensuring durability.
                </li>
                <li>
                  Emitters available with <b>2 or 4 outlet options</b> for even
                  water distribution.
                </li>
                <li>
                  <b>Wide-flow emitter passage</b> minimizes clogging risk.
                </li>
                <li>
                  <b>Custom emitter spacing</b> available from 20 cm onwards as
                  per field layout.
                </li>
                <li>
                  Supports <b>grouped spacing</b> for crops planted at wider
                  intervals.
                </li>
                <li>
                  Ensures <b>consistent and efficient water delivery</b> for
                  healthy crop growth.
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

export default ThinWall;
