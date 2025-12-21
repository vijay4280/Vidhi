import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const RainVioletSprinkler = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title='2" Rain Violet Sprinkler'
        bgImage="/img/Rain-head-3.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Rain Sprinkler", link: "/products/rain" },
          { label: '2" Rain Violet Sprinkler' },
        ]}
      />

      {/* CONTENT */}
      <section className="cycle_section layout_padding">
        <div className="container">

          {/* SECTION TITLE */}
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
            <p className="fs-5 fw-bold text-primary">Rain Sprinkler</p>
            <hr className="border-success" />
            <h1 className="display-6 text-primary">
              Rain Violet Sprinklers
            </h1>
            <hr className="border-success" />
          </div>

          {/* MAIN CONTENT */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/img/Rain-3.png"
                alt='2" Rain Violet Sprinkler'
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 mt-5">
              <h2 className="text-success">
                2&quot; RAIN VIOLET SPRINKLER
              </h2>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>
                  2&quot; Part Circle & Full Circle Sprinkler Gun for wide-area
                  irrigation coverage.
                </li>
                <li>
                  Heavy-duty Brass / SS bearing assembly ensures long service
                  life.
                </li>
                <li>
                  2&quot; Female BSP / NPT connection allows easy and secure
                  installation.
                </li>
                <li>
                  Stainless steel fulcrum pin, arm & bearing spring offer strong
                  reliability.
                </li>
                <li>
                  Chemical-resistant bearing seal provides protection against
                  corrosion.
                </li>
                <li>
                  Gravity die-cast aluminum body & arm deliver superior strength
                  and durability.
                </li>
                <li>
                  Equipped with interchangeable nozzles to suit various
                  irrigation needs.
                </li>
                <li>
                  Ensures uniform water distribution with efficient performance.
                </li>
                <li>
                  Suitable for high-pressure agricultural and industrial
                  irrigation systems.
                </li>
              </ul>

              <h4 className="text-success mt-4">Application</h4>
              <hr className="border-success" />
              <p className="text-primary">
                <b>
                  Ideal for irrigation of field crops like sugarcane,
                  groundnut, maize, wheat, grams, pulses, and plantations such
                  as tea and coffee.
                </b>
              </p>
              <p className="text-primary">
                <b>
                  Also suitable for dust suppression, green pastures, sports
                  fields, and golf courses, ensuring efficient and uniform water
                  coverage.
                </b>
              </p>

              <hr className="border-success" />
            </div>
          </div>

          {/* TABLE IMAGE */}
          <div className="row mt-5">
            <div className="col-md-6"></div>
            <div className="col-md-6 text-center">
              <img
                src="/img/rain-table-3.png"
                alt="Rain Violet Sprinkler Table"
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

export default RainVioletSprinkler;
