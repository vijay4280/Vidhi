import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const MiniSprinklerAccessories = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Mini Sprinkler Accessories"
        bgImage="/img/Spri-head-6.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Sprinkler Irrigation", link: "/products/sprinkler" },
          { label: "Mini Sprinkler Accessories" },
        ]}
      />

      {/* CONTENT */}
      <section className="cycle_section layout_padding">
        <div className="container">

          {/* SECTION TITLE */}
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
            <p className="fs-5 fw-bold text-primary">Sprinkler Irrigation</p>
            <hr className="border-success" />
            <h1 className="display-6 text-primary">Sprinkler Accessories</h1>
            <hr className="border-success" />
          </div>

          {/* MINI SPRINKLER */}
          <div className="row mb-5 align-items-center">
            <div className="col-md-6">
              <img src="/img/Spri-18.png" className="img-fluid" alt="Mini Sprinkler" />
            </div>

            <div className="col-md-6 mt-5">
              <h2 className="text-success">MINI SPRINKLER ACCESSORIES</h2>
              <hr className="border-success" />

              <h5 className="text-primary">Mini Sprinkler</h5>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>Made from high-quality material.</li>
                <li>Plastic bearing assembly for smooth operation.</li>
                <li>½" Male BSP/NPT connection.</li>
                <li>Stainless steel fulcrum pin.</li>
                <li>SS arm and bearing spring.</li>
                <li>Efficient low pressure operation.</li>
                <li>BIS Approved & ISI Marked.</li>
                <li>Uniform water distribution.</li>
                <li>Easy installation & maintenance.</li>
              </ul>

              <h4 className="text-success">Application</h4>
              <hr className="border-success" />
              <p className="text-primary fw-semibold">
                Ideal for irrigation of crops, gardens, and plantations with
                uniform water coverage.
              </p>
            </div>
          </div>

          {/* MS STAND */}
          <div className="row mb-5 align-items-center">
            <div className="col-md-6">
              <img src="/img/Spri-20.png" className="img-fluid" alt="MS Stand" />
            </div>

            <div className="col-md-6 mt-5">
              <h5 className="text-primary">MS Stand (Trishul)</h5>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>100% virgin material.</li>
                <li>Rust & weather resistant.</li>
                <li>Trishul design for firm soil grip.</li>
                <li>Stable under high pressure.</li>
                <li>Suitable for all soil types.</li>
                <li>Easy insertion & removal.</li>
                <li>Available sizes: 1.20m & 1.50m.</li>
                <li>Lightweight and strong.</li>
              </ul>

              <h4 className="text-success">Application</h4>
              <hr className="border-success" />
              <p className="text-primary fw-semibold">
                Used in vegetables, nurseries, orchards & greenhouses for
                uniform irrigation.
              </p>
            </div>
          </div>

          {/* TUBE ASSEMBLY (TEXT) */}
          <div className="row mb-5 align-items-center">
            <div className="col-md-6">
              <img src="/img/Spri-21.png" className="img-fluid" alt="Tube Assembly" />
            </div>

            <div className="col-md-6 mt-5">
              <h5 className="text-primary">Tube Assembly</h5>
              <hr className="border-success" />
              <p className="text-primary fw-semibold">
                Tube Assembly includes Adopter, Tube and Connectors ensuring
                smooth water flow.
              </p>
              <ul className="text-primary">
                <li>Adopter</li>
                <li>Tube</li>
                <li>Male & Female Connector</li>
              </ul>
            </div>
          </div>

          {/* TUBE ASSEMBLY MODELS */}
          {[
            ["Spri-30.png", "Model-25.png"],
            ["Spri-31.png", "Model-26.png"],
            ["Spri-32.png", "Model-27.png"],
            ["Spri-33.png", "Model-28.png"],
            ["Spri-34.png", "Model-29.png"],
            ["Spri-35.png", "Model-30.png"],
            ["Spri-36.png", "Model-31.png"],
          ].map(([img, model], index) => (
            <div className="row mb-5 align-items-center" key={index}>
              <div className="col-md-6">
                <img src={`/img/${img}`} className="img-fluid" alt="Tube Assembly" />
              </div>
              <div className="col-md-6 text-center mt-5">
                <h5 className="text-primary">Tube Assembly</h5>
                <hr className="border-success" />
                <img src={`/img/${model}`} className="img-fluid" alt="Model" />
              </div>
            </div>
          ))}

          {/* PDF */}
          <div className="text-center mt-4">
            <a
              href="/AM pdf.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary px-4 py-2"
            >
              View PDF
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default MiniSprinklerAccessories;
