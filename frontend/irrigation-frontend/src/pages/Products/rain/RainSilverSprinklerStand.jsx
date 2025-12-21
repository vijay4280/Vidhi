import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const RainSilverSprinklerStand = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title='1-1/4" Rain Silver Sprinkler Stand'
        bgImage="/img/Rain-head-1.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Rain Sprinkler", link: "/products/rain" },
          { label: '1-1/4" Rain Silver Sprinkler Stand' },
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
              Rain Silver Sprinklers
            </h1>
            <hr className="border-success" />
          </div>

          {/* MAIN CONTENT */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/img/rainstand-1.png"
                alt='1-1/4" Rain Silver Sprinkler Stand'
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 mt-5">
              <h2 className="text-success">
                1-1/4&quot; RAIN SILVER SPRINKLER STAND
              </h2>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>
                  Heavy-duty construction ensures strong performance and long
                  operational life.
                </li>
                <li>
                  Manufactured from premium virgin mild steel for superior
                  strength and stability.
                </li>
                <li>
                  Protective coating provides excellent corrosion resistance.
                </li>
                <li>
                  Adjustable height up to 4.5 ft for precise sprinkler
                  positioning.
                </li>
                <li>
                  Easy to install and relocate across agricultural fields.
                </li>
                <li>
                  Ensures better pattern coverage even in windy conditions.
                </li>
                <li>
                  Suitable for tropical, temperate, and humid climates.
                </li>
                <li>
                  Compatible with solid set irrigation and center pivot systems.
                </li>
                <li>
                  Gentle and even watering minimizes soil and crop damage.
                </li>
                <li>
                  Comes with 1¼&quot; riser size for stable flow and output.
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

export default RainSilverSprinklerStand;
