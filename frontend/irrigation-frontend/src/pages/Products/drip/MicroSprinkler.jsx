import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const MicroSprinkler = () => {
  return (
    <>
      {/* PRODUCT HEADER */}
      <ProductHeader
        title="Micro Sprinkler"
        bgImage="/img/drip-head-14.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Drip Irrigation", link: "/products/drip" },
          { label: "Micro Sprinkler" },
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

        {/* MAIN CONTENT */}
        <div className="row align-items-start">
          {/* LEFT IMAGE */}
          <div className="col-md-6 mb-4">
            <img
              src="/img/Drip-17.png"
              alt="Micro Sprinkler"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-6 mt-3">
            <h2 className="text-success mt-4">Micro Sprinkler</h2>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li className="mt-2">
                Made from premium virgin engineering material and UV stabilized
              </li>
              <li className="mt-2">
                Designed for precise low-volume irrigation in horticulture and
                orchards
              </li>
              <li className="mt-2">
                Suitable for upright and inverted installation
              </li>
              <li className="mt-2">
                Supplied with 5.5mm microtube, pin connector and PVC stake
              </li>
              <li className="mt-2">
                Ensures uniform water distribution with fine droplets
              </li>
              <li className="mt-2">
                Resistant to clogging and weather variations
              </li>
              <li className="mt-2">
                Easy to install, clean and maintain
              </li>
              <li className="mt-2">
                Reduces water wastage and supports uniform plant growth
              </li>
              <li className="mt-2">
                <b>Available Models:</b> 50 LPH, 60 LPH, 90 LPH, 160 LPH
              </li>
            </ul>

            <hr className="border-success mt-4" />

            <p className="text-primary fw-bold">
              Available in 4 Different Colour Micro Sprinklers:
            </p>

            <ul className="text-primary fw-semibold">
              <li>50 LPH – Red (8mm)</li>
              <li>60 LPH – Black / White (8mm / 16mm)</li>
              <li>90 LPH – Orange (5.5mm)</li>
              <li>160 LPH – Green (8mm)</li>
            </ul>

            <hr className="border-success mt-4" />
          </div>
        </div>

        {/* APPLICATION SECTION */}
        <div className="row mt-5 align-items-start">
          <div className="col-md-6 mb-4">
            <img
              src="/img/Drip-16.jpg"
              alt="Micro Sprinkler Application"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-6 mt-3">
            <h3 className="text-success">Application</h3>
            <hr className="border-success" />
            <p className="text-primary fw-bold">
              Ideal for greenhouses, nurseries, fruit orchards and landscape
              irrigation. Suitable for overhead watering, under-tree irrigation,
              frost protection and crop cooling.
            </p>

            <hr className="border-success mt-4" />

            <div className="text-center mb-4">
              <img
                src="/img/Model-40.png"
                alt="Micro Sprinkler Model"
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

export default MicroSprinkler;
