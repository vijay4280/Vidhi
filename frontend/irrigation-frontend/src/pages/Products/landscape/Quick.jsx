import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const Quick = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Quick Coupling Valves, Key & Elbow"
        bgImage="/img/land-head-13.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Landscape Irrigation", link: "/products/landscape" },
          { label: "Quick Coupling Valves, Key & Elbow" },
        ]}
      />

      {/* CONTENT SECTION */}
      <section className="cycle_section layout_padding">
        <div className="container">

          {/* SECTION HEADING */}
          <div
            className="text-center mx-auto mb-5"
            style={{ maxWidth: "500px" }}
          >
            <p className="fs-5 fw-bold text-primary">
              Landscape Irrigation
            </p>
            <h1 className="display-6 text-primary">
              Accessories For Pop VPs
            </h1>
          </div>

          {/* PRODUCT DETAILS */}
          <div className="row align-items-center">
            {/* LEFT IMAGE */}
            <div className="col-md-6">
              <img
                src="/img/Land-31.png"
                alt="Quick Coupling Valve"
                className="img-fluid"
                style={{ maxHeight: "700px" }}
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-md-6 mt-4">
              <h2 className="text-success">
                Quick Coupling Valves, Key & Elbow
              </h2>
              <hr className="border-success border-3" />

              <ul className="text-primary">
                <li>
                  <b>Solid one-piece brass body</b> with durable thermoplastic
                  cover ensures long life and reliable field performance.
                </li>
                <li>
                  Available in <b>3/4&quot; and 1&quot; BSP female threaded
                  inlet connections</b> for versatile installation.
                </li>
                <li>
                  Equipped with a{" "}
                  <b>corrosion-resistant stainless-steel spring</b> for smooth,
                  leak-free operation.
                </li>
                <li>
                  <b>Drain hole design</b> minimizes debris collection and keeps
                  internal flow clean.
                </li>
                <li>
                  <b>Auto-closing lid</b> activated by spring mechanism protects
                  the valve when not in use.
                </li>
                <li>
                  <b>Quick Coupling Valve (QCV) key</b> threads into the valve for
                  instant and secure water access.
                </li>
                <li>
                  <b>360° hose swivel</b> allows flexible hose movement without
                  tangling.
                </li>
                <li>
                  Optional <b>locking cover models</b> available on request.
                </li>
                <li>
                  Ideal for{" "}
                  <b>
                    residential, commercial landscapes, golf courses, and sports
                    fields
                  </b>
                  .
                </li>
                <li>
                  Available dimensions:{" "}
                  <b>
                    3.8&quot; (¾&quot; QCV without cover), 5.0&quot; (1&quot; QCV
                    with cover)
                  </b>
                  <br />
                  Operating range:{" "}
                  <b>
                    0.5–8.5 Kg/cm² (5–125 psi)
                  </b>
                  <br />
                  Flow rates:
                  <b>
                    10–70 GPM (38–265 LPM) for ¾&quot; QCV
                  </b>{" "}
                  and{" "}
                  <b>
                    10–125 GPM (38–473 LPM) for 1&quot; QCV
                  </b>
                </li>
              </ul>

              <hr className="border-success" />
            </div>
          </div>

          {/* MODEL IMAGES */}
          <div className="row align-items-center mt-5">
            <div className="col-md-6">
              <img
                src="/img/Land-32.png"
                alt="QCV Installation"
                className="img-fluid"
                style={{ maxHeight: "700px" }}
              />
            </div>

            <div className="col-md-6 text-center">
              <img src="/img/Model-53.png" alt="Model 53" className="img-fluid mb-3" />
              <img src="/img/Model-54.png" alt="Model 54" className="img-fluid mb-3" />
              <img src="/img/Model-55.png" alt="Model 55" className="img-fluid mb-3" />
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
              📄 View PDF
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default Quick;
