import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const Saddles = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Service Saddles"
        bgImage="/img/land-head-11.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Landscape Irrigation", link: "/products/landscape" },
          { label: "Service Saddles" },
        ]}
      />

      {/* CONTENT */}
      <section className="cycle_section layout_padding">
        <div className="container">

          {/* SECTION TITLE */}
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
            <p className="fs-5 fw-bold text-primary">Landscape Irrigation</p>
            <hr className="border-success" />
            <h1 className="display-6 text-primary">
              Accessories For Pop VPs
            </h1>
            <hr className="border-success" />
          </div>

          {/* MAIN CONTENT */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/img/Land-29.png"
                alt="Service Saddles"
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 mt-4">
              <h2 className="text-success">SERVICE SADDLES</h2>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>
                  Made from high-quality virgin material for long-lasting
                  durability.
                </li>
                <li>
                  UV stabilized to withstand extreme weather conditions.
                </li>
                <li>
                  Corrosion and chemical resistant for reliable performance.
                </li>
                <li>
                  Available in various sizes to fit different pipe diameters.
                </li>
                <li>
                  Equipped with high-grade rubber sealing for leak-proof
                  connection.
                </li>
                <li>
                  Easy and quick installation without special tools.
                </li>
                <li>
                  Suitable for HDPE &amp; PVC pipes.
                </li>
                <li>
                  Fitted with brass threaded outlet for extra strength.
                </li>
                <li>
                  Provides strong grip ensuring no pipe slippage during
                  operation.
                </li>
              </ul>

              <hr className="border-success" />

              {/* PDF BUTTON */}
              <div className="mt-4">
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

        </div>
      </section>
    </>
  );
};

export default Saddles;
