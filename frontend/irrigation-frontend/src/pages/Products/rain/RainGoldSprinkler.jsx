import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const RainGoldSprinkler = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title='1-1/2" Rain Gold Sprinkler'
        bgImage="/img/Rain-head-2.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Rain Sprinkler", link: "/products/rain" },
          { label: '1-1/2" Rain Gold Sprinkler' },
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
              Rain Gold Sprinklers
            </h1>
            <hr className="border-success" />
          </div>

          {/* MAIN CONTENT */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/img/Rain-2.png"
                alt='1-1/2" Rain Gold Sprinkler'
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 mt-5">
              <h2 className="text-success">
                1-1/2&quot; RAIN GOLD SPRINKLER
              </h2>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>
                  1-1/2&quot; Part Circle & Full Circle sprinkler gun for flexible
                  irrigation coverage.
                </li>
                <li>
                  Robust brass/SS bearing assembly ensures long-lasting
                  durability.
                </li>
                <li>
                  1-1/2&quot; female BSP/NPT connection for quick installation.
                </li>
                <li>
                  Stainless steel fulcrum pin, arm & bearing spring ensure
                  reliable performance.
                </li>
                <li>
                  Chemical-resistant bearing seal protects against corrosion.
                </li>
                <li>
                  Gravity die-cast aluminum body & arm provide superior strength.
                </li>
                <li>
                  Interchangeable nozzles available for varied irrigation needs.
                </li>
                <li>
                  Designed for smooth water distribution and consistent output.
                </li>
                <li>
                  Suitable for medium to large-scale agricultural and industrial
                  applications.
                </li>
              </ul>

              {/* APPLICATION */}
              <h4 className="text-success mt-4">Application</h4>
              <hr className="border-success" />
              <p className="text-primary">
                <b>
                  Ideal for irrigation of field crops like sugarcane, groundnut,
                  maize, wheat, grams, pulses, and plantations such as tea and
                  coffee.
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
                src="/img/rain-table-2.png"
                alt="Rain Gold Sprinkler Table"
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

export default RainGoldSprinkler;
