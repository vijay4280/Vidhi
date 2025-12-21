import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const TwoFourWayConnector = () => {
  return (
    <>
      {/* PRODUCT HEADER */}
      <ProductHeader
        title="2-Way / 4-Way Connector"
        bgImage="/img/drip-head-9.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Drip Irrigation", link: "/products/drip" },
          { label: "2-Way / 4-Way Connector" },
        ]}
      />

      {/* CONTENT SECTION */}
      <section className="container py-5">
        {/* SECTION HEADING */}
        <div
          className="text-center mb-5"
          style={{ maxWidth: "500px", margin: "0 auto" }}
        >
          <p className="fs-5 fw-bold text-success">Drip Irrigation</p>
          <hr className="border-success" />
          <h1 className="display-5 text-primary">Emitting Devices</h1>
          <hr className="border-success" />
        </div>

        {/* ================= 2-WAY CONNECTOR ================= */}
        <div className="row align-items-start mb-5">
          {/* LEFT IMAGE */}
          <div className="col-md-6 mb-4">
            <img
              src="/img/land-6.png"
              alt="2-Way Connector"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-6">
            <h2 className="text-success mt-4">2-Way Connector</h2>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li className="mt-2">
                Dual-outlet single barb connector to divide one emitter into two
              </li>
              <li className="mt-2">
                Compact one-piece design ensures leak-free performance
              </li>
              <li className="mt-2">
                Suitable for both PC and NPC drippers/emitters
              </li>
              <li className="mt-2">
                Made from <b>high-strength 100% virgin raw materials</b>
              </li>
              <li className="mt-2">
                Corrosion-free and resistant to agricultural chemicals
              </li>
              <li className="mt-2">
                Easy installation and removal for maintenance
              </li>
              <li className="mt-2">
                Designed for 5.5 mm extension tubing and pot drippers
              </li>
              <li className="mt-2">
                UV-stabilized for long outdoor service life
              </li>
              <li className="mt-2">
                Lightweight yet sturdy construction
              </li>
              <li className="mt-2">
                Ensures uniform water distribution
              </li>
            </ul>

            <hr className="border-success mt-4" />

            <h3 className="text-success mt-4">Application</h3>
            <hr className="border-success" />
            <p className="text-primary fw-bold">
              Widely used in home gardens, polyhouses, greenhouses, and nurseries
              to extend two outlets from a single emitter for balanced irrigation.
            </p>
          </div>
        </div>

        {/* ================= 4-WAY CONNECTOR ================= */}
        <div className="row align-items-start mt-5">
          {/* LEFT IMAGE */}
          <div className="col-md-6 mb-4">
            <img
              src="/img/Land-7.png"
              alt="4-Way Connector"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-6">
            <h2 className="text-success mt-4">4-Way Connector</h2>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li className="mt-2">
                Designed to connect <b>four outlets</b> from one emitter
              </li>
              <li className="mt-2">
                One-piece compact structure ensures durability
              </li>
              <li className="mt-2">
                Compatible with PC and NPC drippers/emitters
              </li>
              <li className="mt-2">
                Made from <b>high-strength engineering plastic</b>
              </li>
              <li className="mt-2">
                Non-corrosive and chemical-resistant
              </li>
              <li className="mt-2">
                Suitable for 6 mm extension tubes and pot drippers
              </li>
              <li className="mt-2">
                UV stabilized for outdoor use
              </li>
              <li className="mt-2">
                Ensures uniform water distribution to multiple plants
              </li>
              <li className="mt-2">
                Ideal for space-saving irrigation layouts
              </li>
            </ul>

            <hr className="border-success mt-4" />

            <h3 className="text-success mt-4">Application</h3>
            <hr className="border-success" />
            <p className="text-primary fw-bold">
              Ideal for home gardens, polyhouses, greenhouses, and nurseries —
              efficiently supplies water to four plants from a single emitter.
            </p>

            <hr className="border-success mt-4" />
            <div className="text-center">
              <img
                src="/img/Model-36.png"
                alt="Model 36"
                className="img-fluid mb-4"
              />
            </div>
          </div>
        </div>

        {/* PDF BUTTON */}
        <div className="text-center mt-5">
          <a
            href="/AM pdf.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary px-4 py-2"
          >
            View PDF
          </a>
        </div>
      </section>
    </>
  );
};

export default TwoFourWayConnector;
