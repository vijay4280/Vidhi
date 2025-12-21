import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const AluminiumSprinkler = () => {
  return (
    <>
      {/* ✅ PRODUCT HEADER (FIXED COMPONENT) */}
      <ProductHeader
        title="Aluminium Sprinkler"
        bgImage="/img/Spri-head-3.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Sprinkler Irrigation", link: "/products/sprinkler" },
          { label: "Aluminium Sprinkler" },
        ]}
      />

      {/* CONTENT */}
      <div className="cycle_section layout_padding">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="text-center mx-auto" style={{ maxWidth: "500px" }}>
            <p className="fs-5 fw-bold text-primary">Sprinkler Irrigation</p>
            <hr className="border-success" />
            <h1
              className="display-6 mb-5"
              style={{ color: "rgba(16,16,223,0.668)" }}
            >
              Metal Sprinklers
            </h1>
            <hr className="border-success" />
          </div>

          {/* 🔹 1¼" METAL SPRINKLER (3N) */}
          <SprinklerBlock
            image="/img/Spri-9.png"
            title='1¼" METAL SPRINKLER (3N) – ALUMINIUM'
            table="/img/metaltable-3n.png"
            features={[
              '1¼" full circle metal sprinkler with three nozzles',
              "Brass bearing assembly for smooth rotation",
              '1¼" male/female BSP/NPT connection',
              "Stainless steel fulcrum pin, arm & bearing spring",
              "Chemical-resistant bearing seal",
              "Aluminum body with copper base alloy arm",
              "Consistent water distribution under varying pressure",
              "Suitable for agricultural & industrial systems",
              "Reliable performance in rugged environments",
            ]}
            application={[
              "Ideal for large-scale agricultural irrigation, plantations and industrial watering.",
              "Ensures uniform full-circle coverage with long-lasting reliability.",
            ]}
          />

          {/* 🔹 1¼" METAL SPRINKLER (2N) */}
          <SprinklerBlock
            image="/img/Spri-10.png"
            title='1¼" METAL SPRINKLER (2N) – ALUMINIUM'
            table="/img/metaltable-2n.png"
            features={[
              '1¼" full circle metal sprinkler with two nozzles',
              "Durable brass bearing assembly",
              '1¼" male/female BSP/NPT connection',
              "Stainless steel fulcrum pin, arm & bearing spring",
              "Chemical-resistant bearing seal",
              "Pressure die-cast aluminum body & arm",
              "High performance under varying pressure",
              "Uniform water distribution over large areas",
              "Built for heavy-duty environments",
            ]}
            application={[
              "Ideal for large agricultural fields, plantations and industrial irrigation setups.",
              "Provides efficient full-circle coverage with long-term durability.",
            ]}
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

export default AluminiumSprinkler;

/* 🔁 SAME REUSABLE BLOCK (NO DUPLICATION) */
const SprinklerBlock = ({ image, title, features, application, table }) => (
  <div className="row mt-5 align-items-center">
    <div className="col-md-6">
      <img
        src={image}
        alt={title}
        className="img-fluid rounded shadow"
      />
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

      {application.map((text, i) => (
        <p key={i} className="fw-bold text-primary">
          {text}
        </p>
      ))}

      {table && (
        <div className="text-center mt-3">
          <img src={table} alt="Specification Table" className="img-fluid" />
        </div>
      )}
    </div>
  </div>
);
