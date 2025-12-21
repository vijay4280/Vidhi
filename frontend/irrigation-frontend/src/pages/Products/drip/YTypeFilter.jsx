import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const YTypeFilter = () => {
  return (
    <>
      {/* PRODUCT HEADER */}
      <ProductHeader
        title="Y-Type Filter"
        bgImage="/img/drip-head-38.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Drip Irrigation", link: "/products/drip" },
          { label: "Y-Type Filter" },
        ]}
      />

      {/* CONTENT */}
      <section className="container py-5">
        {/* SECTION HEADING */}
        <div
          className="text-center mb-5"
          style={{ maxWidth: "500px", margin: "0 auto" }}
        >
          <p className="fs-5 fw-bold text-primary">Drip Irrigation</p>
          <hr className="border-success" />
          <h1 className="display-5 text-primary">Filtration</h1>
          <hr className="border-success" />
        </div>

        {/* ===== Y TYPE FILTER ===== */}
        <div className="row mb-5 align-items-start">
          <div className="col-md-6">
            <img
              src="/img/Spri-23.png"
              alt="Y Type Filter"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-6">
            <h2 className="text-success mt-4">Y-Type Filter</h2>
            <hr className="border-success" />

            <p className="text-primary fw-bold">
              Connection Type: ¾", 1", 1¼", 1½" & 2" Male Thread
            </p>
            <p className="text-primary fw-bold">
              Flow Rate: 4–8, 12–16, 15–27 & 2–27 m³/Hr
            </p>
            <p className="text-primary fw-bold">
              Filtration Area: 120, 295, 295–480 & 150–480 cm²
            </p>
            <p className="text-primary fw-bold">
              Filtration Degree: 80 / 120 / 150 mesh
            </p>
            <p className="text-primary fw-bold">
              Pressure Rating: 4–8 kg/cm²
            </p>

            <h5 className="text-primary mt-4">Screen Filter</h5>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li>Made from 100% virgin premium materials</li>
              <li>UV-stabilized and corrosion resistant</li>
              <li>Removes sand, silt, algae and debris</li>
              <li>Ensures uniform water flow</li>
              <li>Easy to open and clean</li>
              <li>Optional flush valve available</li>
              <li>Compact and lightweight</li>
              <li>Available Sizes: ¾", 1", 1¼", 1½", 2"</li>
            </ul>

            <h4 className="text-success mt-4">Application</h4>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li>Prevents emitter clogging in drip irrigation</li>
              <li>Protects sprinkler nozzles</li>
              <li>Used in greenhouses and nurseries</li>
              <li>Ideal for home gardens and landscapes</li>
              <li>Acts as pre-filter before sand/disc filters</li>
            </ul>
          </div>
        </div>

        {/* ===== DISC FILTER ===== */}
        <div className="row mb-5 align-items-start">
          <div className="col-md-6">
            <img
              src="/img/Spri-26.png"
              alt="Disc Filter"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-6">
            <h5 className="text-primary mt-4">Disc Filter</h5>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li>100% virgin UV & chemical resistant material</li>
              <li>Stacked discs with micro grooves</li>
              <li>High dirt-holding capacity</li>
              <li>Easy manual or backflush cleaning</li>
              <li>Uniform multi-layer filtration</li>
              <li>Compact and space-saving design</li>
              <li>Low maintenance and long life</li>
              <li>Available Sizes: ¾", 1", 1½", 2"</li>
            </ul>
          </div>
        </div>

        {/* TABLE IMAGES */}
        <div className="row mt-5">
          <div className="col-md-6"></div>
          <div className="col-md-6 text-center">
            <img
              src="/img/drip-table-17.png"
              alt="Filter Table"
              className="img-fluid mb-4"
            />
            <img
              src="/img/drip-table-18.png"
              alt="Filter Table"
              className="img-fluid"
            />
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
            View PDF
          </a>
        </div>
      </section>
    </>
  );
};

export default YTypeFilter;
