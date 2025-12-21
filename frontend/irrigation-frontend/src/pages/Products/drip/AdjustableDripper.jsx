import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const AdjustableDripper = () => {
  return (
    <>
      {/* PRODUCT HEADER (FIXED – SAME FOR ALL PRODUCTS) */}
      <ProductHeader
        title="Adjustable Dripper"
        bgImage="/img/drip-head-7.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Drip Irrigation", link: "/products/drip" },
          { label: "Adjustable Dripper" },
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
              src="/img/Drip-7.jpg"
              alt="Adjustable Dripper"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-6 mt-3">
            <h2 className="text-success">Adjustable Dripper</h2>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li className="mt-2">
                Variable flow rate for different crop requirements
              </li>
              <li className="mt-2">
                Made from <b>UV-stabilized 100% virgin raw materials</b>
              </li>
              <li className="mt-2">
                Clog-resistant design ensures consistent water flow
              </li>
              <li className="mt-2">
                Easy to install on lateral pipes
              </li>
              <li className="mt-2">
                Compatible with fertilizers and chemicals (fertigation safe)
              </li>
              <li className="mt-2">
                Precise and targeted watering for efficient water use
              </li>
              <li className="mt-2">
                Durable and long-lasting
              </li>
              <li className="mt-2">
                Ensures uniform crop growth
              </li>
              <li className="mt-2">
                Available in <b>Vari Flow</b> and <b>Single Flow</b> options
              </li>
              <li className="mt-2">
                Color-coded for easy identification of flow ranges
              </li>
            </ul>

            <hr className="border-success mt-4" />

            <h3 className="text-success mt-4">Applications</h3>
            <hr className="border-success" />
            <p className="text-primary fw-bold">
              Suitable for vegetable crops, fruit orchards, nurseries, and garden
              plants, ensuring precise irrigation and nutrient delivery. Ideal
              for uneven terrains and variable soil conditions.
            </p>
          </div>
        </div>

        {/* MODEL IMAGE */}
        <div className="row mt-5">
          <div className="col-md-6"></div>
          <div className="col-md-6 text-center">
            <img
              src="/img/Model-34.png"
              alt="Adjustable Dripper Model"
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

export default AdjustableDripper;

