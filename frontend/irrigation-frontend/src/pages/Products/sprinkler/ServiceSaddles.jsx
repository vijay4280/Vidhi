import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const ServiceSaddles = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Service Saddles"
        bgImage="/img/Spri-head-5.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Sprinkler Irrigation", link: "/products/sprinkler" },
          { label: "Service Saddles" },
        ]}
        titleClass="text-success"
      />

      {/* CONTENT */}
      <section className="cycle_section layout_padding">
        <div className="container">
          {/* SECTION TITLE */}
          <div
            className="text-center mx-auto mb-5"
            style={{ maxWidth: "500px" }}
          >
            <p className="fs-5 fw-bold text-primary">Sprinkler Irrigation</p>
            <hr className="border-success" />
            <h1 className="display-6 text-primary">
              Sprinkler Accessories
            </h1>
            <hr className="border-success" />
          </div>

          {/* PRODUCT DETAILS */}
          <div className="row align-items-start mb-5">
            <div className="col-md-6">
              <img
                src="/img/Spri-15.png"
                alt="Service Saddles PPCP"
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 mt-5">
              <h2 className="text-success">SERVICE SADDLES (PPCP)</h2>
              <hr className="border-success" />

              <ul className="text-primary fw-semibold">
                <li>Made from high-quality virgin material.</li>
                <li>UV stabilized for extreme weather resistance.</li>
                <li>Corrosion and chemical resistant.</li>
                <li>Available in multiple sizes.</li>
                <li>High-grade rubber sealing for leak-proof joints.</li>
                <li>Quick installation without special tools.</li>
                <li>Suitable for HDPE & PVC pipes.</li>
                <li>Brass threaded outlet for added strength.</li>
                <li>Strong grip prevents pipe slippage.</li>
              </ul>

              <hr className="border-success" />
            </div>
          </div>

          {/* IMAGE SET 1 */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <img
                src="/img/Spri-16.png"
                alt="Service Saddle"
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 text-center mt-4">
              <img
                src="/img/Model-41.png"
                alt="Model 41"
                className="img-fluid"
              />
            </div>
          </div>

          {/* IMAGE SET 2 */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <img
                src="/img/Spri-17.png"
                alt="Service Saddle Models"
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 text-center mt-4">
              <img src="/img/Model-42.png" alt="Model 42" className="img-fluid mb-3" />
              <img src="/img/Model-43.png" alt="Model 43" className="img-fluid mb-3" />
              <img src="/img/Model-44.png" alt="Model 44" className="img-fluid mb-3" />
              <img src="/img/Model-45.png" alt="Model 45" className="img-fluid" />
            </div>
          </div>

          {/* PDF */}
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
        </div>
      </section>
    </>
  );
};

export default ServiceSaddles;
