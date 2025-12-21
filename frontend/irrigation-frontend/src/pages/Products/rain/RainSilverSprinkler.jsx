import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const RainSilverSprinkler = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title='1-1/4" Rain Silver Sprinkler'
        bgImage="/img/Rain-head-1.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Rain Sprinkler", link: "/products/rain" },
          { label: '1-1/4" Rain Silver Sprinkler' },
        ]}
      />

      {/* CONTENT */}
      <section className="cycle_section layout_padding">
        <div className="container">

          {/* SECTION TITLE */}
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
            <p className="fs-5 fw-bold text-primary">Rain Sprinkler</p>
            <hr className="border-success" />
            <h1 className="display-6 text-primary">Rain Silver Sprinklers</h1>
            <hr className="border-success" />
          </div>

          {/* MAIN CONTENT */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/img/Rain-1.png"
                alt='1-1/4" Rain Silver Sprinkler'
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 mt-5">
              <h2 className="text-success">
                1-1/4&quot; RAIN SILVER SPRINKLER
              </h2>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>1-1/4&quot; Part Circle & Full Circle sprinkler gun.</li>
                <li>Durable Brass / SS bearing assembly for long life.</li>
                <li>1-1/4&quot; Female BSP / NPT connection.</li>
                <li>Stainless steel fulcrum pin, arm & bearing spring.</li>
                <li>Chemical-resistant bearing seal for corrosion protection.</li>
                <li>Pressure die-cast aluminum body & arm.</li>
                <li>Interchangeable nozzles available in multiple sizes.</li>
                <li>Smooth operation under different water pressures.</li>
                <li>Suitable for agricultural & industrial irrigation.</li>
              </ul>

              <h4 className="text-success mt-4">Application</h4>
              <hr className="border-success" />
              <p className="text-primary fw-semibold">
                Ideal for irrigation of field crops like sugarcane, groundnut,
                maize, wheat, grams, pulses, and plantations such as tea and
                coffee.
              </p>
              <p className="text-primary fw-semibold">
                Also suitable for dust suppression, green pastures, sports
                fields, and golf courses with uniform water coverage.
              </p>
              <hr className="border-success" />
            </div>
          </div>

          {/* TABLE IMAGE */}
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6 mt-5 text-center">
              <img
                src="/img/rain-table-1.png"
                alt="Rain Sprinkler Table"
                className="img-fluid"
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
              📄 View PDF
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default RainSilverSprinkler;
