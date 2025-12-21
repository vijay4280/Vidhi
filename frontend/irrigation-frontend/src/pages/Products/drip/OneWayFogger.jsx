import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const OneWayFogger = () => {
  return (
    <>
      {/* PRODUCT HEADER */}
      <ProductHeader
        title="1-Way-Fogger"
        bgImage="/img/drip-head-15.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Drip Irrigation", link: "/products/drip" },
          { label: "1-Way-Fogger" },
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
              src="/img/Drip-18.jpg"
              alt="1-Way Fogger"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-6 mt-3">
            <h2 className="text-success mt-4">1-Way-Fogger</h2>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li className="mt-2">
                Anti-Drip device instantly stops dripping after irrigation cycle
              </li>
              <li className="mt-2">
                Starts operating automatically above 1.5 kg/cm² pressure
              </li>
              <li className="mt-2">
                Automatically shuts off below 0.7 kg/cm² pressure
              </li>
              <li className="mt-2">
                Bridgeless design ensures completely drip-free operation
              </li>
              <li className="mt-2">
                Produces fine droplets with average size of 65 microns
              </li>
              <li className="mt-2">
                Ensures uniform and consistent misting
              </li>
              <li className="mt-2">
                Made from acid-resistant raw materials
              </li>
              <li className="mt-2">
                Compatible with acid cleaning treatment
              </li>
              <li className="mt-2">
                Efficient fogging for cooling and humidification
              </li>
              <li className="mt-2">
                Durable construction for greenhouse and livestock use
              </li>
            </ul>

            <hr className="border-success mt-4" />
          </div>
        </div>

        {/* APPLICATION SECTION */}
        <div className="row mt-5 align-items-start">
          <div className="col-md-6"></div>

          <div className="col-md-6 mt-3">
            <h3 className="text-success">Application</h3>
            <hr className="border-success" />
            <p className="text-primary fw-bold">
              Ideal for cooling and humidifying greenhouses and rooting tables,
              creating optimal conditions for plant propagation and seed
              germination. Widely used in poultry sheds, cow sheds and livestock
              areas for temperature and humidity control. Ensures a uniform
              micro-climate for healthy plant and animal growth.
            </p>

            <hr className="border-success mt-4" />

            <div className="text-center mb-3">
              <img
                src="/img/drip-table-15.png"
                alt="Fogger Table"
                className="img-fluid mb-3"
              />
              <img
                src="/img/drip-table-16.png"
                alt="Fogger Table"
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

export default OneWayFogger;
