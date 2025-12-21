import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const Valve = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Valve Box"
        bgImage="/img/land-head-14.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Landscape Irrigation", link: "/products/landscape" },
          { label: "Valve Box" },
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
              Accessories For Pop VPs
            </h1>
            <hr className="border-success" />
          </div>

          {/* MAIN CONTENT */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/img/land-33.png"
                alt="Valve Box"
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 mt-4">
              <h2 className="text-success">VALVE BOX</h2>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>
                  Lightweight yet heavy-duty plastic construction ensures
                  long-lasting durability.
                </li>
                <li>
                  Provides strong protection for sprinkler system valves in all
                  environments.
                </li>
                <li>
                  Removable pre-moulded slots allow easy installation of
                  sprinkler header lines without special tools.
                </li>
                <li>
                  Green lid and black box design blends naturally with garden
                  and landscape surroundings.
                </li>
                <li>
                  Suitable for both freezing and non-freezing areas, ensuring
                  year-round performance.
                </li>
                <li>
                  Anti-skid lid design offers added safety and stability.
                </li>
                <li>
                  Side ridges provide enhanced side-wall strength and structural
                  support.
                </li>
                <li>
                  Bottom flanges prevent sinking, keeping the valve box stable
                  in soft soil.
                </li>
                <li>
                  Environment-friendly manufacturing with strong grip to ensure
                  no pipe slippage during operation.
                </li>
              </ul>

              <hr className="border-success" />
            </div>
          </div>

          {/* TABLE IMAGE */}
          <div className="row mt-5">
            <div className="col-md-12 text-center">
              <img
                src="/img/valve-table.png"
                alt="Valve Box Specification Table"
                className="img-fluid"
              />
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

export default Valve;
