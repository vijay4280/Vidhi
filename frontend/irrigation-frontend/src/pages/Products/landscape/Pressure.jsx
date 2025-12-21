import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const Pressure = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Pressure Regulating Valves"
        bgImage="/img/land-head-10.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Landscape Irrigation", link: "/products/landscape" },
          { label: "Pressure Regulating Valves" },
        ]}
      />

      {/* CONTENT */}
      <section className="cycle_section layout_padding">
        <div className="container">

          {/* SECTION TITLE */}
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
            <p className="fs-5 fw-bold text-primary">Landscape Irrigation</p>
            <h1 className="display-6 text-primary">
              Pressure Regulating Valves
            </h1>
          </div>

          {/* MAIN CONTENT */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/img/Land-28.png"
                alt="Pressure Regulating Valves"
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 mt-4">
              <h2 className="text-success">Pressure Regulating Valves</h2>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>Available in two models:</li>
              </ul>

              <ol className="text-primary">
                <li>
                  <b>2&quot; BSP Male Threaded Connection</b>
                </li>
                <li>
                  <b>2&quot; BSP Female Threaded Connection</b>
                </li>
              </ol>

              <ul className="text-primary">
                <li>
                  Equipped with an aluminium cover for enhanced strength and
                  long-lasting performance.
                </li>
                <li>
                  Includes a 1½&quot; BSP/NPT female threaded drain port for easy
                  pressure discharge.
                </li>
                <li>
                  Manufactured from 100% virgin raw material ensuring superior
                  quality and durability.
                </li>
                <li>
                  Designed to maintain optimal system pressure and protect
                  irrigation components from overpressure damage.
                </li>
                <li>
                  Corrosion-resistant and weatherproof construction suitable
                  for irrigation and industrial environments.
                </li>
                <li>
                  Easy to install and maintain with reliable performance in
                  high-pressure applications.
                </li>
              </ul>

              <hr className="border-success" />
            </div>
          </div>

          {/* PDF BUTTON */}
          <div className="text-center mt-4">
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

export default Pressure;
