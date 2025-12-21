import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const DripLateralFittings = () => {
  return (
    <>
      {/* PRODUCT HEADER */}
      <ProductHeader
        title="Drip Lateral Fittings"
        bgImage="/img/drip-head-17.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Drip Irrigation", link: "/products/drip" },
          { label: "Drip Lateral Fittings" },
        ]}
      />

      {/* CONTENT */}
      <section className="container py-5">
        {/* SECTION HEADING */}
        <div className="text-center mb-5" style={{ maxWidth: "500px", margin: "0 auto" }}>
          <p className="fs-5 fw-bold text-primary">Drip Irrigation</p>
          <h1 className="display-5 text-primary">Drip Fittings</h1>
          <hr className="border-success" />
        </div>

        {/* ===== START CONNECTOR ===== */}
        <div className="row mb-5">
          <div className="col-md-6">
            <img src="/img/Drip-23.jpg" className="img-fluid rounded" alt="" />
          </div>
          <div className="col-md-6">
            <h2 className="text-success mt-4">Start Connector / Polyano / Take Off</h2>
            <hr className="border-success" />
            <ul className="text-primary fw-semibold">
              <li>Used to connect dripline with mainline</li>
              <li>UV-resistant, leak-proof and durable</li>
              <li>Easy installation without tools</li>
              <li>Used along with grommet</li>
              <li><b>Sizes:</b> 12mm, 16mm, 16×12mm</li>
            </ul>
            <img src="/img/Model-1.png" className="img-fluid my-3" alt="" />
            <a href="/AM pdf.pdf" target="_blank" rel="noreferrer" className="btn btn-outline-primary">
              View PDF
            </a>
          </div>
        </div>

        {/* ===== RUBBER GROMMET ===== */}
        <div className="row mb-5">
          <div className="col-md-6">
            <img src="/img/Drip-24.jpg" className="img-fluid rounded" alt="" />
          </div>
          <div className="col-md-6">
            <h2 className="text-success mt-4">Rubber Grommet / Washer</h2>
            <hr className="border-success" />
            <ul className="text-primary fw-semibold">
              <li>Ensures leak-proof connection</li>
              <li>Flexible UV-resistant rubber</li>
              <li><b>Sizes:</b> 12mm, 16mm</li>
            </ul>
            <img src="/img/Model-2.png" className="img-fluid my-3" alt="" />
            <a href="/AM pdf.pdf" target="_blank" rel="noreferrer" className="btn btn-outline-primary">
              View PDF
            </a>
          </div>
        </div>

        {/* ===== STRAIGHT CONNECTOR ===== */}
        <div className="row mb-5">
          <div className="col-md-6">
            <img src="/img/Drip-26.png" className="img-fluid rounded" alt="" />
          </div>
          <div className="col-md-6">
            <h2 className="text-success mt-4">Straight Connector / Jointer</h2>
            <hr className="border-success" />
            <ul className="text-primary fw-semibold">
              <li>Joins two lateral pipes</li>
              <li>Leak-proof & corrosion resistant</li>
              <li><b>Sizes:</b> 5.5mm to 16mm</li>
            </ul>
            <img src="/img/Model-10.png" className="img-fluid my-3" alt="" />
            <a href="/AM pdf.pdf" target="_blank" rel="noreferrer" className="btn btn-outline-primary">
              View PDF
            </a>
          </div>
        </div>

        {/* ===== ELBOW CONNECTOR ===== */}
        <div className="row mb-5">
          <div className="col-md-6">
            <img src="/img/Drip-52.png" className="img-fluid rounded" alt="" />
          </div>
          <div className="col-md-6">
            <h2 className="text-success mt-4">Elbow Connector</h2>
            <hr className="border-success" />
            <ul className="text-primary fw-semibold">
              <li>90° pipe direction change</li>
              <li>Double barbed, leak-proof</li>
              <li><b>Sizes:</b> 5.5mm to 16mm</li>
            </ul>
            <img src="/img/Model-4.png" className="img-fluid my-3" alt="" />
            <a href="/AM pdf.pdf" target="_blank" rel="noreferrer" className="btn btn-outline-primary">
              View PDF
            </a>
          </div>
        </div>

        {/* ===== TEE CONNECTOR ===== */}
        <div className="row mb-5">
          <div className="col-md-6">
            <img src="/img/Drip-53.png" className="img-fluid rounded" alt="" />
          </div>
          <div className="col-md-6">
            <h2 className="text-success mt-4">Tee Connector</h2>
            <hr className="border-success" />
            <ul className="text-primary fw-semibold">
              <li>Divides lateral flow</li>
              <li>UV-resistant material</li>
              <li><b>Sizes:</b> 12mm, 16mm</li>
            </ul>
            <img src="/img/Model-5.png" className="img-fluid my-3" alt="" />
            <a href="/AM pdf.pdf" target="_blank" rel="noreferrer" className="btn btn-outline-primary">
              View PDF
            </a>
          </div>
        </div>

        {/* FINAL PDF */}
        <div className="text-center mt-5">
          <a href="/AM pdf.pdf" target="_blank" rel="noreferrer" className="btn btn-outline-primary px-4 py-2">
            View Complete PDF
          </a>
        </div>
      </section>
    </>
  );
};

export default DripLateralFittings;
