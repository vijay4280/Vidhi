import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const TurboKey = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Online Emitters NPC TurboKey Drippers"
        bgImage="/img/land-head-4.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Landscape Irrigation", link: "/products/landscape" },
          { label: "Online Emitters NPC TurboKey Drippers" },
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
                src="/img/Drip-5.jpg"
                alt="Online NPC TurboKey Dripper"
                className="img-fluid"
                style={{ maxHeight: "700px" }}
              />
            </div>

            <div className="col-md-6 mt-5">
              <h2 className="text-success">
                ONLINE EMITTERS NPC TURBOKEY DRIPPERS
              </h2>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>
                  Manufactured from <b>virgin engineering polymers</b> and
                  UV-stabilized for long outdoor life.
                </li>
                <li>
                  Suitable for <b>12 mm, 16 mm, and 20 mm</b> plain drip laterals.
                </li>
                <li>
                  Openable design allows easy cleaning and maintenance.
                </li>
                <li>
                  Angled inlet ensures smooth water entry into the emitter.
                </li>
                <li>
                  Resistant to fertilizers and chemicals used in fertigation.
                </li>
                <li>
                  Compact, sturdy construction ensures long service life.
                </li>
                <li>
                  Easy installation using standard punching tools.
                </li>
                <li>
                  Available in color-coded flow rates:
                  <ul className="mt-2">
                    <li>
                      <b style={{ backgroundColor: "yellow", padding: "2px 6px" }}>
                        2 LPH (Yellow)
                      </b>
                    </li>
                    <li>
                      <b style={{ backgroundColor: "lightgreen", padding: "2px 6px" }}>
                        4 LPH (Green)
                      </b>
                    </li>
                    <li>
                      <b style={{ backgroundColor: "red", color: "#fff", padding: "2px 6px" }}>
                        8 LPH (Red)
                      </b>
                    </li>
                    <li>
                      <b style={{ backgroundColor: "black", color: "#fff", padding: "2px 6px" }}>
                        4 LPH (Black)
                      </b>
                    </li>
                  </ul>
                </li>
              </ul>

              <hr className="border-success" />
            </div>
          </div>

          {/* APPLICATION + EXTRA IMAGES */}
          <div className="row mt-5 align-items-center">
            <div className="col-md-6">
              <img
                src="/img/Drip-6.jpg"
                alt="NPC Dripper Application"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </div>

            <div className="col-md-6">
              <h4 className="text-success">Application</h4>
              <hr className="border-success" />

              <p className="text-primary">
                <b>
                  Ideal for precise irrigation in orchards, vineyards,
                  greenhouses, and landscape areas. Ensures uniform water
                  distribution for vegetables, fruits, and closely spaced crops.
                </b>
              </p>

              <hr className="border-success" />

              <div className="text-center">
                <img
                  src="/img/drip-table-13.png"
                  alt="Dripper Table"
                  className="img-fluid mb-3"
                />
                <img
                  src="/img/Model-33.png"
                  alt="NPC Dripper Model"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* PDF */}
          <div className="text-center mt-5">
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

export default TurboKey;
