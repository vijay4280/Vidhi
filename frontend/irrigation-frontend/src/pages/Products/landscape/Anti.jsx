import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const Anti = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Anti Bug Cap"
        bgImage="/img/land-head-7.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Landscape Irrigation", link: "/products/landscape" },
          { label: "Anti Bug Cap" },
        ]}
      />

      {/* CONTENT */}
      <section className="cycle_section layout_padding">
        <div className="container">

          {/* SECTION TITLE */}
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
            <p className="fs-5 fw-bold text-primary">Landscape Irrigation</p>
            <hr className="border-success" />
            <h1 className="display-6 text-primary">Emitting Devices</h1>
            <hr className="border-success" />
          </div>

          {/* MAIN CONTENT */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/img/Drip-13.jpg"
                alt="Anti Bug Cup"
                className="img-fluid"
                style={{ maxHeight: "700px" }}
              />
            </div>

            <div className="col-md-6 mt-5">
              <h2 className="text-success">ANTI BUG CAP</h2>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>
                  Prevents entry of insects, dust, and particles that may block
                  the emitter outlet.
                </li>
                <li>
                  Acts as a diffuser to spread water evenly and avoid direct
                  jetting.
                </li>
                <li>
                  Compatible with both PC and NPC online drippers.
                </li>
                <li>
                  Ensures consistent water flow and improves irrigation
                  efficiency.
                </li>
                <li>
                  Easy to install, clean, and replace whenever required.
                </li>
                <li>
                  Manufactured from durable, UV-stabilized material for
                  long-lasting use.
                </li>
                <li>
                  Helps maintain uniform watering and prevents clogging issues
                  in irrigation systems.
                </li>
              </ul>

              <hr className="border-success" />

              {/* APPLICATION */}
              <h4 className="text-success">Application</h4>
              <hr className="border-success" />
              <p className="text-primary">
                <b>
                  Ideal for use in greenhouses, nurseries, and gardens to ensure
                  smooth emitter performance and uniform water distribution for
                  all plants.
                </b>
              </p>

              <hr className="border-success" />

              <div className="text-center">
                <img
                  src="/img/Model-38.png"
                  alt="Anti Bug Cup Model"
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

export default Anti;
