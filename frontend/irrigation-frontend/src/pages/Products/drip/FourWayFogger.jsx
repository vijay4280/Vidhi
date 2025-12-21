import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const FourWayFogger = () => {
  return (
    <>
      {/* PRODUCT HEADER */}
      <ProductHeader
        title="4-Way Fogger"
        bgImage="/img/drip-head-16.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Drip Irrigation", link: "/products/drip" },
          { label: "4-Way Fogger" },
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
              src="/img/Drip-19.jpg"
              alt="4-Way Fogger"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-6 mt-3">
            <h2 className="text-success mt-4">4-Way Fogger</h2>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li className="mt-2">
                Anti-Drip device prevents dripping after each irrigation cycle
              </li>
              <li className="mt-2">
                Automatically starts operation above 1.5 kg/cm² pressure
              </li>
              <li className="mt-2">
                Automatically shuts down below 0.7 kg/cm² pressure
              </li>
              <li className="mt-2">
                Bridgeless design ensures completely drip-free performance
              </li>
              <li className="mt-2">
                Produces uniform droplets of approx. 65 microns at 4 kg/cm²
              </li>
              <li className="mt-2">
                Made from acid-resistant materials suitable for chemicals
              </li>
              <li className="mt-2">
                System can be cleaned using suitable acid treatment
              </li>
              <li className="mt-2">
                Operates efficiently between 2.5 – 5 kg/cm² pressure
              </li>
              <li className="mt-2">
                Recommended working pressure is 4.0 kg/cm²
              </li>
              <li className="mt-2">
                Press-fit inlet with 120 mesh (130 micron) filtration
              </li>
            </ul>

            <hr className="border-success mt-4" />

            {/* APPLICATION */}
            <h3 className="text-success mt-4">Application</h3>
            <hr className="border-success" />
            <p className="text-primary fw-bold">
              Designed for cooling and humidification in greenhouses, poultry
              sheds, cow sheds and other livestock environments. Ideal for
              irrigation over rooting tables, plant propagation and seed
              germination. Ensures uniform fogging and optimal micro-climate for
              plant and animal growth.
            </p>

            <hr className="border-success mt-4" />

            {/* TABLE IMAGES */}
            <div className="text-center">
              <img
                src="/img/drip-table-21.png"
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

export default FourWayFogger;
