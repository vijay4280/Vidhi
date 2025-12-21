import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const Swing = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Swing Joints"
        bgImage="/img/land-head-12.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Landscape Irrigation", link: "/products/landscape" },
          { label: "Swing Joints" },
        ]}
      />

      {/* CONTENT SECTION */}
      <section className="cycle_section layout_padding">
        <div className="container">

          {/* SECTION TITLE */}
          <div
            className="text-center mx-auto mb-5"
            style={{ maxWidth: "500px" }}
          >
            <p className="fs-5 fw-bold text-primary">
              Landscape Irrigation
            </p>
            <h1 className="display-6 text-primary">
              Accessories For Pop VPs
            </h1>
          </div>

          {/* MAIN CONTENT */}
          <div className="row align-items-center">
            {/* IMAGE */}
            <div className="col-md-6">
              <img
                src="/img/Land-30.png"
                alt="Swing Joints"
                className="img-fluid"
                style={{ maxHeight: "700px" }}
              />
            </div>

            {/* DETAILS */}
            <div className="col-md-6 mt-4">
              <h2 className="text-success">SWING JOINTS</h2>
              <hr className="border-success border-3" />

              <ul className="text-primary">
                <li>
                  Available in two sizes:{" "}
                  <b>1/2&quot; × 1/2&quot; × 12&quot;</b> and{" "}
                  <b>3/4&quot; × 3/4&quot; × 12&quot;</b>, both with a 12-inch length.
                </li>
                <li>
                  Designed to operate efficiently under{" "}
                  <b>pressures up to 5.5 bar</b>.
                </li>
                <li>
                  Withstands <b>surge pressures up to 15.5 bar</b> for enhanced
                  system safety.
                </li>
                <li>
                  Built to perform reliably in temperatures{" "}
                  <b>up to 50°C</b>.
                </li>
                <li>
                  Comes as a <b>quality pre-assembled swing assembly</b>,
                  reducing installation time.
                </li>
                <li>
                  Features a <b>flexible swing arm</b> for easy adjustment of
                  sprinkler heads to the desired grade.
                </li>
                <li>
                  <b>Flexible joints</b> ensure smooth positioning and easy
                  alignment during setup.
                </li>
                <li>
                  Flexible components <b>minimize leakage risk</b>, offering
                  better performance than rigid fittings.
                </li>
                <li>
                  Engineered to resist <b>cracking or breaking under stress</b>,
                  ensuring long-term durability.
                </li>
              </ul>

              <hr className="border-success" />

              {/* MODEL IMAGE */}
              <div className="text-center mb-4">
                <img
                  src="/img/Model-52.png"
                  alt="Swing Joint Model"
                  className="img-fluid"
                />
              </div>

              {/* PDF BUTTON */}
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

        </div>
      </section>
    </>
  );
};

export default Swing;
