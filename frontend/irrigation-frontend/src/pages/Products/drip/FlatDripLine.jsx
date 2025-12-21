import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const FlatDripline = () => {
  return (
    <>
      {/* PRODUCT HEADER (FIXED & REUSABLE) */}
      <ProductHeader
        title="Flat Dripline PC & NON-PC"
        bgImage="/img/drip-head-3.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Drip Irrigation", link: "/products/drip" },
          { label: "Flat Dripline PC & NON-PC" },
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
          <h1 className="display-5 text-primary">Drip Tubing</h1>
          <hr className="border-success" />
        </div>

        <div className="row align-items-start">
          {/* LEFT IMAGE */}
          <div className="col-md-6 mb-4">
            <img
              src="/img/Drip-3.jpg"
              alt="Flat Dripline PC & NON-PC"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-6 mt-3">
            <h2 className="text-success">Flat Dripline PC & NON-PC</h2>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li className="mt-2">Uniform water distribution across all plants</li>
              <li className="mt-2">
                Efficient irrigation for uneven terrains and long laterals
              </li>
              <li className="mt-2">
                Manufactured from UV-resistant high-quality material
              </li>
              <li className="mt-2">
                Compact and durable dripper design minimizes clogging
              </li>
              <li className="mt-2">
                Suitable for both surface and subsurface irrigation
              </li>
              <li className="mt-2">
                Performs efficiently under varying pressure conditions
              </li>
              <li className="mt-2">Discharge range from 1.2 LPH to 4 LPH</li>
              <li className="mt-2">
                Excellent coefficient of variation (&lt; 5%)
              </li>
              <li className="mt-2">
                Standard emitter spacing from 20 cm onwards
              </li>
            </ul>

            <hr className="border-success mt-4" />

            <h3 className="text-success mt-4">Applications</h3>
            <hr className="border-success" />
            <p className="text-primary fw-bold">
              Ideal for row crops, vegetables, horticultural plantations,
              orchards, vineyards, fruit crops, sugarcane, floriculture, banana,
              cotton, chillies, greenhouses and landscape irrigation.
            </p>
          </div>
        </div>

        {/* TABLE IMAGES */}
        <div className="row mt-5">
          <div className="col-md-6"></div>
          <div className="col-md-6 text-center">
            {[7, 8, 9, 10, 11].map((num) => (
              <img
                key={num}
                src={`/img/drip-table-${num}.png`}
                alt={`Drip Table ${num}`}
                className="img-fluid mb-4"
              />
            ))}
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

export default FlatDripline;
