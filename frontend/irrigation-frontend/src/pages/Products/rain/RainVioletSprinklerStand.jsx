import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const RainVioletSprinklerStand = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title='2" Rain Violet Sprinkler Stand'
        bgImage="/img/Rain-head-3.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Rain Sprinkler", link: "/products/rain" },
          { label: '2" Rain Violet Sprinkler Stand' },
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
                src="/img/rainstand-3.png"
                alt='2" Rain Violet Sprinkler Stand'
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 mt-5">
              <h2 className="text-success">
                2&quot; RAIN VIOLET SPRINKLER STAND
              </h2>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>
                  Heavy-duty stand designed for high-pressure rain sprinkler
                  systems.
                </li>
                <li>
                  Manufactured from premium virgin mild steel for maximum
                  strength.
                </li>
                <li>
                  Protective anti-corrosion coating for long outdoor life.
                </li>
                <li>
                  Adjustable height up to 4.5 ft for optimal sprinkler
                  coverage.
                </li>
                <li>
                  Easy installation and relocation across agricultural fields.
                </li>
                <li>
                  Ensures stable operation even in windy conditions.
                </li>
                <li>
                  Suitable for tropical, temperate, and humid climates.
                </li>
                <li>
                  Compatible with solid-set and mobile irrigation systems.
                </li>
                <li>
                  Gentle and uniform watering reduces soil erosion.
                </li>
                <li>
                  2&quot; riser size ensures strong water flow and stability.
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

export default RainVioletSprinklerStand;
