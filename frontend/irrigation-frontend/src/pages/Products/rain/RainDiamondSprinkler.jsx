import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const RainDiamondSprinkler = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title='1-1/2" Rain Diamond Sprinkler'
        bgImage="/img/Rain-head-4.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Rain Sprinkler", link: "/products/rain" },
          { label: '1-1/2" Rain Diamond Sprinkler' },
        ]}
      />

      {/* CONTENT */}
      <section className="cycle_section layout_padding">
        <div className="container">

          {/* SECTION TITLE */}
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
            <p className="fs-5 fw-bold text-primary">Rain Sprinkler</p>
            <hr className="border-success" />
            <h1 className="display-6 text-primary">
              Rain Diamond Sprinklers
            </h1>
            <hr className="border-success" />
          </div>

          {/* MAIN CONTENT */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/img/Rain-4.png"
                alt='1-1/2" Rain Diamond Sprinkler'
                className="img-fluid"
                style={{ maxHeight: "700px" }}
              />
            </div>

            <div className="col-md-6 mt-5">
              <h2 className="text-success">
                1-1/2&quot; RAIN DIAMOND SPRINKLER
              </h2>
              <hr className="border-success" />

              <ul className="text-primary">
                <li>
                  1.5&quot; Part Circle & Full Circle Sprinkler Gun for flexible irrigation coverage.
                </li>
                <li>
                  Durable Brass Bearing Assembly ensures smooth and long-lasting performance.
                </li>
                <li>
                  Comes with 1.5&quot; BSP/NPT Female & 2&quot; BSP/NPT Male connection for easy installation.
                </li>
                <li>
                  Pressure die-cast arm & body with aluminum extrusion range tube for extra strength.
                </li>
                <li>
                  Equipped with new design interchangeable plastic nozzles for multiple applications.
                </li>
                <li>
                  Stainless steel fulcrum pin, arm & bearing spring for high durability.
                </li>
                <li>
                  Chemical-resistant bearing seal protects against corrosion.
                </li>
                <li>
                  Excellent water distribution uniformity even at low pressure.
                </li>
                <li>
                  Low water consumption makes it efficient and cost-effective.
                </li>
              </ul>

              <hr className="border-success" />

              {/* APPLICATION */}
              <h4 className="text-success">Application</h4>
              <hr className="border-success" />

              <p className="text-primary">
                <b>
                  Ideal for irrigation of field crops like sugarcane, groundnut,
                  maize, wheat, grams, pulses, and plantations such as tea and coffee.
                </b>
              </p>

              <p className="text-primary">
                <b>
                  Also suitable for dust suppression, green pastures, sports fields,
                  and golf courses ensuring uniform water coverage.
                </b>
              </p>

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

export default RainDiamondSprinkler;
