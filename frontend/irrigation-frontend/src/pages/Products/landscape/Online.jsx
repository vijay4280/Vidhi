import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const OnlinePCDripper = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Online PC Dripper / Emitters"
        bgImage="/img/land-head-3.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Landscape Irrigation", link: "/products/landscape" },
          { label: "Online PC Dripper / Emitters" },
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
              Emitting Devices
            </h1>
            <hr className="border-success" />
          </div>

          {/* MAIN CONTENT */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/img/Land-3.png"
                alt="Online PC Dripper Emitters"
                className="img-fluid"
                style={{ maxHeight: "700px" }}
              />
            </div>

            <div className="col-md-6 mt-5">
              <h2 className="text-success">
                ONLINE PC DRIPPER / EMITTERS
              </h2>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>
                  Ensures uniform water discharge under varying pressure
                  conditions.
                </li>
                <li>
                  Manufactured from <b>100% virgin raw material</b> for long
                  service life.
                </li>
                <li>
                  Self-flushing mechanism minimizes clogging.
                </li>
                <li>
                  Color-coded design enables easy identification of flow rates
                  such as <b>2 LPH, 4 LPH, and 8 LPH</b>.
                </li>
                <li>
                  Highly resistant to fertilizers and agricultural chemicals.
                </li>
                <li>
                  Provides accurate and consistent discharge rate.
                </li>
                <li>
                  Easy and quick installation.
                </li>
                <li>
                  Option available for <b>Anti-Bug cap</b>.
                </li>
                <li>
                  Extended outlet allows use of micro tube for extended reach
                  applications.
                </li>
                <li>
                  Sealed turbulent flow path PC emitter with diaphragm maintains
                  uniform flow across wide pressure range.
                </li>
              </ul>

              <hr className="border-success" />

              {/* APPLICATION */}
              <h4 className="text-success">Application</h4>
              <hr className="border-success" />

              <p className="text-primary">
                <b>
                  Suitable for undulated lands, hilly regions, orchards, trees,
                  shrubs, vineyards, greenhouse irrigation, vertical gardens,
                  and landscape irrigation.
                </b>
              </p>

              <hr className="border-success" />
            </div>
          </div>

          {/* EXTRA IMAGES */}
          <div className="row mt-5">
            <div className="col-md-6"></div>
            <div className="col-md-6 text-center">
              <img
                src="/img/drip-table-12.png"
                alt="PC Dripper Table"
                className="img-fluid mb-3"
              />
              <img
                src="/img/Model-32.png"
                alt="PC Dripper Model"
                className="img-fluid"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default OnlinePCDripper;
