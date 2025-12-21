import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const BrassPartCircle = () => {
  return (
    <>
      {/* ✅ PRODUCT HEADER (FIXED – AS INSTRUCTED) */}
      <ProductHeader
        title="Brass Part Circle Sprinkler"
        bgImage="/img/Spri-head-2.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Sprinkler Irrigation", link: "/products/sprinkler" },
          { label: "Brass Part Circle Sprinkler" },
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
              Brass Impact Sprinklers
            </h1>
            <hr className="border-success" />
          </div>

          {/* 🔹 3/4 INCH */}
          <SprinklerBlock
            image="/img/Spri-6.png"
            title='3/4" BRASS PART CIRCLE SPRINKLER'
            table="/img/part-table-1.png"
            features={[
              '3/4" part circle metal sprinkler for efficient distribution',
              "High-quality brass bearing",
              '3/4" male BSP/NPT connection',
              "Adjustable diffuser pin",
              "Single nozzle for uniform flow",
              "Stainless steel fulcrum pin, arm & spring",
              "Chemical-resistant bearing seals",
              "Copper base alloy body & arm",
              "Suitable for medium & large irrigation setups",
            ]}
            application={[
              "Ideal for agricultural fields, center pivot systems, solid set installations.",
              "Ensures uniform water distribution and long-term reliability.",
            ]}
          />

          {/* 🔹 1 INCH */}
          <SprinklerBlock
            image="/img/Spri-7.png"
            title='1" BRASS PART CIRCLE SPRINKLER'
            table="/img/part-table-2.png"
            features={[
              '1" part circle brass sprinkler',
              "Durable brass bearing assembly",
              '1" male BSP/NPT connection',
              "Single nozzle for consistent discharge",
              "Stainless steel fulcrum pin, arm & spring",
              "Chemical-resistant bearing seal",
              "Aluminum body with copper alloy arm",
              "Adjustable diffuser pin",
              "Suitable for demanding applications",
            ]}
            application={[
              "Best for irrigation of pastures, mining areas and wastewater treatment zones.",
              "Reliable performance under challenging conditions.",
            ]}
          />

          {/* 🔹 1¼ INCH */}
          <SprinklerBlock
            image="/img/Spri-8.png"
            title='1¼" BRASS PART CIRCLE SPRINKLER'
            table="/img/part-table-3.png"
            features={[
              "Durable brass bearing for long life",
              "Bronze body & arm for corrosion resistance",
              '1¼" BSP/NPT threaded connection',
              "23° water trajectory for optimal coverage",
              "Operates as full or part circle",
              "Adjustable arc from 20°–340°",
              "Single or dual nozzle options",
              "Stainless steel fulcrum pin, springs & arc stops",
              "High efficiency and uniform distribution",
            ]}
            application={[
              "Ideal for large agricultural & horticultural fields.",
              "Suitable for sugarcane plantations, tea gardens & fertigation.",
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

export default BrassPartCircle;

/* 🔁 REUSABLE BLOCK (SAME AS FULL CIRCLE) */
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
      <h5 className="text-success fw-bold mt-2">{title}</h5>
      <hr className="border-success" />

      <ul className="text-primary fw-semibold">
        {features.map((item, i) => (
          <li key={i} className="mt-2">{item}</li>
        ))}
      </ul>

      <h5 className="text-success mt-3">Application</h5>
      <hr className="border-success mt-2 bold" />

      {application.map((text, i) => (
        <p key={i} className="fw-bold text-primary">
          {text}
        </p>
      ))}

      {table && (
        <div className="text-center mt-5">
          <img src={table} alt="Specification Table" className="img-fluid" />
        </div>
      )}
    </div>
  </div>
);
