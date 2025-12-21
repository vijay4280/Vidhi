import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const RainGoldSprinklerStand = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title='1-1/2" Rain Gold Sprinkler Stand'
        bgImage="/img/Rain-head-2.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Rain Sprinkler", link: "/products/rain" },
          { label: '1-1/2" Rain Gold Sprinkler Stand' },
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
                src="/img/rainstand-2.png"
                alt='1-1/2" Rain Gold Sprinkler Stand'
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 mt-5">
              <h2 className="text-success">
                1-1/2&quot; RAIN GOLD SPRINKLER STAND
              </h2>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>
                  Heavy-duty construction designed to withstand high pressure
                  and tough field conditions.
                </li>
                <li>
                  Made from top-quality virgin mild steel for superior strength
                  and durability.
                </li>
                <li>
                  Protective coating ensures long-lasting performance in all
                  weather conditions.
                </li>
                <li>
                  Adjustable height up to 4.5 ft for accurate sprinkler
                  positioning and maximum coverage.
                </li>
                <li>
                  Easy to install, allowing quick shifting and setup in fields.
                </li>
                <li>
                  Provides better pattern coverage and consistent performance
                  even in windy conditions.
                </li>
                <li>
                  Suitable for tropical, temperate, and humid climates.
                </li>
                <li>
                  Compatible with solid set irrigation systems and center pivot
                  systems.
                </li>
                <li>
                  Ensures gentle and even watering, protecting soil and crops.
                </li>
                <li>
                  Comes with a 1-1/2&quot; riser size for stable flow and reliable
                  sprinkler operation.
                </li>
              </ul>

              <hr className="border-success" />
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

export default RainGoldSprinklerStand;
