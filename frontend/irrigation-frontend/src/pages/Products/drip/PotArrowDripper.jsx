import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const PotArrowDripper = () => {
  return (
    <>
      {/* PRODUCT HEADER */}
      <ProductHeader
        title="Pot Dripper / Arrow Dripper"
        bgImage="/img/drip-head-10.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Drip Irrigation", link: "/products/drip" },
          { label: "Pot Dripper / Arrow Dripper" },
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
              src="/img/Drip-11.jpg"
              alt="Pot Dripper Arrow Dripper"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-6 mt-3">
            <h2 className="text-success mt-4">
              Pot Dripper / Arrow Dripper
            </h2>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li className="mt-2">
                Ideal for planter boxes, pots, hanging baskets, nursery grow bags,
                and vertical garden trays
              </li>
              <li className="mt-2">
                Provides discharge of <b>3.5 LPH at 1 Kg/cm²</b>
              </li>
              <li className="mt-2">
                Simple installation with minimal maintenance
              </li>
              <li className="mt-2">
                Ensures uniform and consistent water distribution
              </li>
              <li className="mt-2">
                Designed with clog-resistant technology
              </li>
              <li className="mt-2">
                Suitable for indoor and outdoor gardening setups
              </li>
            </ul>

            <hr className="border-success mt-4" />

            <h3 className="text-success mt-4">Application</h3>
            <hr className="border-success" />
            <p className="text-primary fw-bold">
              Perfect for home gardens, nurseries, and vertical garden systems,
              ensuring consistent, efficient, and hassle-free watering of plants.
            </p>

            <hr className="border-success mt-4" />

            {/* MODEL IMAGE */}
            <div className="text-center mb-4">
              <img
                src="/img/Model-37.png"
                alt="Model 37"
                className="img-fluid"
              />
            </div>

            {/* PDF BUTTON */}
            <div className="text-center">
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
        </div>
      </section>
    </>
  );
};

export default PotArrowDripper;
