import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const TwoWay = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="2-Way / 4-Way Connector"
        bgImage="/img/land-head-5.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Landscape Irrigation", link: "/products/landscape" },
          { label: "2-Way / 4-Way Connector" },
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

          {/* 2-WAY CONNECTOR */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/img/land-6.png"
                alt="2-Way Connector"
                className="img-fluid"
                style={{ maxHeight: "700px" }}
              />
            </div>

            <div className="col-md-6 mt-5">
              <h2 className="text-success">2-WAY CONNECTOR</h2>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>
                  Dual-outlet single barb connector designed to divide one
                  dripper/emitter line into two.
                </li>
                <li>
                  Compact one-piece construction ensures leak-free performance.
                </li>
                <li>
                  Compatible with both PC and NPC drippers/emitters.
                </li>
                <li>
                  Manufactured from <b>high-strength 100% virgin engineering
                  raw material</b> for superior durability.
                </li>
                <li>
                  Corrosion-free and resistant to agricultural chemicals and
                  fertilizers.
                </li>
                <li>
                  Easy installation and removal for convenient maintenance.
                </li>
                <li>
                  Designed for <b>5.5 mm extension tubing</b> and pot drippers.
                </li>
                <li>
                  UV-stabilized material ensures long outdoor life.
                </li>
                <li>
                  Lightweight yet sturdy for all irrigation setups.
                </li>
                <li>
                  Ensures uniform water distribution for efficient irrigation.
                </li>
              </ul>

              <hr className="border-success" />

              <h4 className="text-success">Application</h4>
              <hr className="border-success" />
              <p className="text-primary">
                <b>
                  Widely used in home gardens, polyhouses, greenhouses, and
                  nurseries to extend two outlets from a single emitter,
                  ensuring balanced and efficient watering.
                </b>
              </p>

              <hr className="border-success" />
            </div>
          </div>

          {/* 4-WAY CONNECTOR */}
          <div className="row align-items-center mt-5">
            <div className="col-md-6">
              <img
                src="/img/Land-7.png"
                alt="4-Way Connector"
                className="img-fluid"
                style={{ maxHeight: "700px" }}
              />
            </div>

            <div className="col-md-6 mt-5">
              <h2 className="text-success">4-WAY CONNECTOR</h2>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>
                  Designed to connect <b>four outlets</b> from a single emitter.
                </li>
                <li>
                  Compact one-piece construction ensures durability and
                  leak-free operation.
                </li>
                <li>
                  Compatible with both PC and NPC drippers/emitters.
                </li>
                <li>
                  Made from <b>high-strength engineering plastic</b>.
                </li>
                <li>
                  Non-corrosive and chemical-resistant for harsh conditions.
                </li>
                <li>
                  Suitable for <b>6 mm extension tubes</b> and pot drippers.
                </li>
                <li>
                  UV-stabilized to withstand continuous sunlight exposure.
                </li>
                <li>
                  Ensures uniform water distribution across multiple plants.
                </li>
                <li>
                  Ideal for compact, space-saving irrigation layouts.
                </li>
              </ul>

              <hr className="border-success" />

              <h4 className="text-success">Application</h4>
              <hr className="border-success" />
              <p className="text-primary">
                <b>
                  Perfect for home gardens, polyhouses, greenhouses, and
                  nurseries—efficiently distributing water to four plants from
                  one emitter for uniform irrigation.
                </b>
              </p>

              <hr className="border-success" />

              <div className="text-center">
                <img
                  src="/img/Model-36.png"
                  alt="4-Way Connector Model"
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

export default TwoWay;
