import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const PressureReliefValve = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Pressure Relief Valve"
        bgImage="/img/drip-head-43.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Drip Irrigation", link: "/products/drip" },
          { label: "Pressure Relief Valve" },
        ]}
      />

      {/* PAGE CONTENT */}
      <section className="container py-5">
        {/* SECTION TITLE */}
        <div
          className="text-center mb-5"
          style={{ maxWidth: "500px", margin: "0 auto" }}
        >
          <p className="fs-5 fw-bold text-primary">Drip Irrigation</p>
          <hr className="border-success" />
          <h1 className="display-5 text-primary">Control Valves & ACC</h1>
          <hr className="border-success" />
        </div>

        {/* PRODUCT SECTION */}
        <div className="row align-items-start">
          {/* IMAGE */}
          <div className="col-md-6">
            <img
              src="/img/Drip-44.png"
              alt="Pressure Relief Valve"
              className="img-fluid rounded"
            />
          </div>

          {/* CONTENT */}
          <div className="col-md-6 mt-4">
            <h2 className="text-success">Pressure Relief Valve</h2>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li>Available in two models:</li>
              <ol>
                <li>
                  <b>2″ BSP Male Threaded Connection</b>
                </li>
                <li>
                  <b>2″ BSP Male Threaded Connection (Heavy Duty)</b>
                </li>
              </ol>
            </ul>

            <ul className="text-primary fw-semibold">
              <li>
                Equipped with an aluminium cover for enhanced strength and long
                service life.
              </li>
              <li>
                Includes a 1½″ BSP/NPT female threaded drain port for easy pressure
                discharge.
              </li>
              <li>
                Manufactured from 100% virgin raw material ensuring superior
                durability.
              </li>
              <li>
                Designed to maintain optimal system pressure and protect
                irrigation components from overpressure damage.
              </li>
              <li>
                Corrosion-resistant and weatherproof construction for irrigation
                and industrial environments.
              </li>
              <li>
                Easy to install and maintain with reliable performance under
                high-pressure conditions.
              </li>
            </ul>

            {/* APPLICATION */}
            <h4 className="text-success mt-4">Application</h4>
            <hr className="border-success" />

            <p className="text-primary fw-semibold">
              Ideal for drip and sprinkler irrigation systems, filtration units,
              and industrial pipelines to automatically release excess pressure
              and ensure safe, continuous system operation.
            </p>

            {/* PDF BUTTON */}
            <div className="mt-4">
              <a
                href="/AM pdf.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary px-4 py-2"
              >
                📘 View PDF
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PressureReliefValve;
