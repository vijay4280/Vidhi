import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const Inline = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Cylindrical Dripline / Emitting Pipe / Inline Drip Tube – PC & NON PC"
        bgImage="/img/land-head-2.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Landscape Irrigation", link: "/products/landscape" },
          {
            label:
              "Cylindrical Dripline / Emitting Pipe / Inline Drip Tube – PC & NON PC",
          },
        ]}
      />

      {/* CONTENT */}
      <section className="cycle_section layout_padding">
        <div className="container">

          {/* SECTION TITLE */}
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
            <p className="fs-5 fw-bold text-primary">Landscape Irrigation</p>
            <hr className="border-success" />
            <h1 className="display-6 text-primary">
              Brown Drip Tubing
            </h1>
            <hr className="border-success" />
          </div>

          {/* MAIN CONTENT */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/img/Land-2.png"
                alt="Cylindrical Dripline"
                className="img-fluid"
                style={{ maxHeight: "700px" }}
              />
            </div>

            <div className="col-md-6 mt-5">
              <h2 className="text-success">
                Cylindrical Dripline / Emitting Pipe / Inline Drip Tube – PC & NON PC
              </h2>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>
                  Maintains uniform irrigation even on uneven terrain and long
                  lateral lengths.
                </li>
                <li>
                  Manufactured from high-quality <b>UV-resistant raw material</b>
                  for long outdoor life.
                </li>
                <li>
                  Fully compatible with fertigation and commonly used
                  agrochemicals.
                </li>
                <li>
                  Drip lines made from <b>100% virgin raw material</b>.
                </li>
                <li>
                  Wide discharge range from <b>1 LPH to 8 LPH</b> to suit field
                  conditions.
                </li>
                <li>
                  Excellent coefficient of variation <b>(less than 5%)</b>.
                </li>
                <li>
                  Available with <b>2 or 4 outlets per emitter</b> for uniform
                  water distribution.
                </li>
                <li>
                  Clog-resistant design due to wide emitter flow paths.
                </li>
                <li>
                  Custom emitter spacing available starting from <b>20 cm</b>
                  onwards.
                </li>
              </ul>

              <hr className="border-success" />

              {/* APPLICATION */}
              <h4 className="text-success">Application</h4>
              <hr className="border-success" />

              <p className="text-primary">
                <b>
                  Ideal for row crops, vegetables, horticultural plantations,
                  orchards, vineyards, fruit crops, sugarcane, floriculture,
                  banana, cotton, chillies, close-spaced field crops,
                  greenhouses, and landscape irrigation.
                </b>
              </p>

              <hr className="border-success" />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Inline;
