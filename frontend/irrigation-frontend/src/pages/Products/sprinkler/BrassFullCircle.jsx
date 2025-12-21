import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const BrassFullCircle = () => {
  return (
    <>
      {/* ✅ PRODUCT HEADER (REUSABLE) */}
      <ProductHeader
        title="Brass Full Circle Sprinkler"
        bgImage="/img/Spri-head-1.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Sprinkler Irrigation", link: "/products/sprinkler" },
          { label: "Brass Full Circle Sprinkler" },
        ]}
      />

      {/* CONTENT */}
      <div className="cycle_section layout_padding">
        <div className="container">
          {/* SECTION TITLE */}
          <div
            className="text-center mx-auto"
            style={{ maxWidth: "500px" }}
          >
            <p className="fs-5 fw-bold text-primary">
              Sprinkler Irrigation
            </p>
            <hr className="border-success" />
            <h1
              className="display-6 mb-5"
              style={{ color: "rgba(16,16,223,0.668)" }}
            >
              Brass Impact Sprinklers
            </h1>
            <hr className="border-success" />
          </div>

          {/* ================= 1/2 INCH ================= */}
          <SprinklerBlock
            image="/img/Spri-1.png"
            title='1/2" BRASS FULL CIRCLE SPRINKLER'
            table="/img/full-table-1.png"
            features={[
              '1/2" full circle sprinkler for wide and even coverage',
              "Robust brass bearing assembly",
              '1/2" male BSP/NPT connection',
              "BIS approved (ISI marked)",
              "Stainless steel fulcrum pin & springs",
              "Copper alloy body & arm",
              "Consistent performance in tough conditions",
              "Easy installation & low maintenance",
              "Uniform droplet distribution",
            ]}
            application="Ideal for agriculture, center pivot systems, crop cooling and frost protection."
          />

          {/* ================= 3/4 INCH ================= */}
          <SprinklerBlock
            image="/img/Spri-2.png"
            title='3/4" BRASS FULL CIRCLE SPRINKLER'
            table="/img/full-table-2.png"
            features={[
              '3/4" full circle brass sprinkler',
              "Durable brass & SS bearing assembly",
              '3/4" male BSP/NPT connection',
              "SS fulcrum pin, arm & spring",
              "Chemical resistant bearing seal",
              "Copper alloy body & arm",
              "BIS approved, ISI marked",
              "Uniform water distribution",
              "Low maintenance",
            ]}
            application="Suitable for agriculture, horticulture, golf courses and field crops."
          />

          {/* ================= 3/4 ECO ================= */}
          <SprinklerBlock
            image="/img/Spri-3.png"
            title='3/4" BRASS FULL CIRCLE (VIDHI ECO)'
            table="/img/full-table-3.png"
            features={[
              '3/4" full circle sprinkler',
              "Durable brass & SS bearings",
              "Chemical resistant seal",
              "Copper alloy construction",
              "ISI marked quality",
              "Low maintenance",
            ]}
            application="Ideal for agriculture, horticulture, and landscape irrigation."
          />

          {/* ================= 1 INCH ================= */}
          <SprinklerBlock
            image="/img/Spri-4.png"
            title='1" BRASS FULL CIRCLE SPRINKLER'
            table="/img/full-table-4.png"
            features={[
              '1" full circle sprinkler',
              "Brass bearing assembly",
              '1" BSP/NPT connection',
              "SS fulcrum pin & springs",
              "Aluminum body with copper alloy arm",
              "Wide water spread",
              "Heavy-duty use",
            ]}
            application="Best for agricultural fields, lawns and large landscapes."
          />

          {/* ================= 1¼ INCH ================= */}
          <SprinklerBlock
            image="/img/Spri-5.png"
            title='1¼" BRASS FULL CIRCLE SPRINKLER'
            table="/img/full-table-5.png"
            features={[
              '1¼" full circle sprinkler',
              "High-quality brass bearing",
              '1¼" BSP/NPT connection',
              "SS fulcrum pin & spring",
              "Chemical resistant seal",
              "Heavy-duty aluminum body",
              "Uniform droplet distribution",
            ]}
            application="Perfect for large agricultural fields and plantations."
          />

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
      </div>
    </>
  );
};

export default BrassFullCircle;

/* 🔁 REUSABLE BLOCK */
const SprinklerBlock = ({ image, title, features, application, table }) => (
  <div className="row mt-5 align-items-center">
    <div className="col-md-6">
      <img src={image} alt={title} className="img-fluid rounded shadow" />
    </div>

    <div className="col-md-6 mt-4">
      <h5 className="text-primary fw-bold">{title}</h5>
      <hr className="border-success" />

      <ul className="text-primary fw-semibold">
        {features.map((item, i) => (
          <li key={i} className="mt-2">{item}</li>
        ))}
      </ul>

      <h5 className="text-success mt-3">Application</h5>
      <hr className="border-success" />
      <p className="fw-bold text-primary">{application}</p>

      {table && (
        <div className="text-center mt-3">
          <img src={table} alt="Specification Table" className="img-fluid" />
        </div>
      )}
    </div>
  </div>
);
