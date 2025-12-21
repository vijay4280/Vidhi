import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const DripFittings = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Drip Fittings"
        bgImage="/img/land-head-9.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Landscape Irrigation", link: "/products/landscape" },
          { label: "Drip Fittings" },
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
              Drip Fittings & Accessories
            </h1>
            <hr className="border-success" />
          </div>

          {/* ================= START CONNECTOR ================= */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <img src="/img/Land-11.png" alt="Start Connector" className="img-fluid" />
            </div>
            <div className="col-md-6 mt-4">
              <h2 className="text-success">START CONNECTOR / POLYANO / TAKE OFF</h2>
              <hr className="border-success" />
              <ul className="text-primary">
                <li>Connects dripline with mainline efficiently.</li>
                <li>UV-resistant material for long service life.</li>
                <li>Leak-proof and secure connection.</li>
                <li>Easy installation without tools.</li>
                <li>Used along with grommet to prevent leakage.</li>
              </ul>
            </div>
          </div>

          {/* ================= RUBBER GROMMET ================= */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <img src="/img/Land-12.png" alt="Rubber Grommet" className="img-fluid" />
            </div>
            <div className="col-md-6 mt-4">
              <h2 className="text-success">RUBBER GROMMET / WASHER / GTO</h2>
              <hr className="border-success" />
              <ul className="text-primary">
                <li>Ensures leak-proof sealing.</li>
                <li>Flexible UV-resistant rubber.</li>
                <li>Easy to install with drip fittings.</li>
                <li>Durable under harsh conditions.</li>
              </ul>
            </div>
          </div>

          {/* ================= STRAIGHT CONNECTOR ================= */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <img src="/img/Land-14.png" alt="Straight Connector" className="img-fluid" />
            </div>
            <div className="col-md-6 mt-4">
              <h2 className="text-success">STRAIGHT CONNECTOR / JOINTER</h2>
              <hr className="border-success" />
              <ul className="text-primary">
                <li>Joins two lateral pipes.</li>
                <li>Leak-proof and corrosion resistant.</li>
                <li>UV-stabilized engineering material.</li>
                <li>Easy installation.</li>
              </ul>
            </div>
          </div>

          {/* ================= ELBOW CONNECTOR ================= */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <img src="/img/land-34.png" alt="Elbow Connector" className="img-fluid" />
            </div>
            <div className="col-md-6 mt-4">
              <h2 className="text-success">ELBOW CONNECTOR</h2>
              <hr className="border-success" />
              <ul className="text-primary">
                <li>90° pipe connection.</li>
                <li>Double barbed leak-proof design.</li>
                <li>UV-resistant virgin material.</li>
                <li>No adhesive required.</li>
              </ul>
              <img src="/img/Model-51.png" alt="Elbow Model" className="img-fluid mt-3" />
            </div>
          </div>

          {/* ================= TEE CONNECTOR ================= */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <img src="/img/land-35.png" alt="Tee Connector" className="img-fluid" />
            </div>
            <div className="col-md-6 mt-4">
              <h2 className="text-success">TEE CONNECTOR</h2>
              <hr className="border-success" />
              <ul className="text-primary">
                <li>Divides water flow into branches.</li>
                <li>UV-stabilized virgin material.</li>
                <li>Easy to install.</li>
              </ul>
              <img src="/img/Model-46.png" alt="Tee Model" className="img-fluid mt-3" />
            </div>
          </div>

          {/* ================= END CAP ================= */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <img src="/img/Land-16.png" alt="End Cap" className="img-fluid" />
            </div>
            <div className="col-md-6 mt-4">
              <h2 className="text-success">END CAP (8 TYPE)</h2>
              <hr className="border-success" />
              <ul className="text-primary">
                <li>Closes lateral ends securely.</li>
                <li>Used for flushing laterals.</li>
                <li>Reusable and durable.</li>
              </ul>
              <img src="/img/Model-47.png" alt="End Cap Model" className="img-fluid mt-3" />
            </div>
          </div>

          {/* ================= PDF ================= */}
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

export default DripFittings;
