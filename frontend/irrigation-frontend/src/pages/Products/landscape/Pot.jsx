import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const Pot= () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Pot Dripper / Arrow Dripper"
        bgImage="/img/land-head-6.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Landscape Irrigation", link: "/products/landscape" },
          { label: "Pot Dripper / Arrow Dripper" },
        ]}
      />

      {/* CONTENT */}
      <section className="cycle_section layout_padding">
        <div className="container">

          {/* SECTION TITLE */}
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
            <p className="fs-5 fw-bold text-primary">Landscape Irrigation</p>
            <hr className="border-success" />
            <h1 className="display-6 text-primary">Emitting Devices</h1>
            <hr className="border-success" />
          </div>

          {/* MAIN CONTENT */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/img/Drip-11.jpg"
                alt="Pot Dripper / Arrow Dripper"
                className="img-fluid"
                style={{ maxHeight: "700px" }}
              />
            </div>

            <div className="col-md-6 mt-5">
              <h2 className="text-success">POT DRIPPER / ARROW DRIPPER</h2>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>
                  Ideal for planter boxes, pots, hanging baskets, nursery grow
                  bags, and vertical garden trays.
                </li>
                <li>
                  Provides a discharge of <b>3.5 LPH at 1 Kg/cm²</b> ensuring
                  efficient irrigation.
                </li>
                <li>
                  Simple to install and requires minimal maintenance.
                </li>
                <li>
                  Ensures uniform and consistent water distribution.
                </li>
                <li>
                  Designed with clog-resistant technology for smooth operation.
                </li>
                <li>
                  Suitable for both indoor and outdoor gardening setups.
                </li>
              </ul>

              <hr className="border-success" />

              {/* APPLICATION */}
              <h4 className="text-success">Application</h4>
              <hr className="border-success" />
              <p className="text-primary">
                <b>
                  Perfect for home gardens, nurseries, balconies, and vertical
                  garden systems to ensure consistent, efficient, and
                  hassle-free watering.
                </b>
              </p>

              <hr className="border-success" />

              <div className="text-center">
                <img
                  src="/img/Model-37.png"
                  alt="Pot Dripper Model"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* PDF */}
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

export default Pot;
