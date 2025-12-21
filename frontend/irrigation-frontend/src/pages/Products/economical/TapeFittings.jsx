import React from "react";
import ProductHeader from "../../../components/ProductHeader";

const TapeFittings = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <ProductHeader
        title="Thin Wall Drip Tape Fittings"
        bgImage="/img/eco-head-4.png"
        titleClass="text-success"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Economical Irrigation", link: "/products/economical" },
          { label: "Thin Wall Drip Tape Fittings" },
        ]}
      />

      {/* CONTENT */}
      <section className="cycle_section layout_padding">
        <div className="container">

          {/* SECTION TITLE */}
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
            <p className="fs-5 fw-bold text-primary">Economical Irrigation</p>
            <h1 className="display-5 text-primary">
              Drip Tubing & Fittings
            </h1>
          </div>

          {/* ===== PRODUCT BLOCKS ===== */}

          {/* VIDHI PRO TAPE TO TAPE */}
          <ProductBlock
            image="/img/Eco-3.png"
            title="VIDHI PRO TAPE TO TAPE"
            model="/img/Model-22.png"
            points={[
              "Joins two sections of drip tape securely in irrigation systems.",
              "Provides a leak-proof and tight connection.",
              "Maintains consistent water pressure and flow.",
              "Helps extend drip tape length as per field requirement.",
              "Useful for repairing damaged sections easily.",
              "Ensures smooth and uninterrupted water distribution.",
              "Simple to install and remove without special tools.",
              "Enhances efficiency and durability of the drip irrigation system.",
            ]}
          />

          {/* VIDHI PRO LATERAL TO TAPE */}
          <ProductBlock
            image="/img/Eco-4.png"
            title="VIDHI PRO LATERAL TO TAPE"
            model="/img/Model-23.png"
            points={[
              "Connects drip tape to the main lateral pipe securely.",
              "Ensures smooth water transfer from lateral to drip tape.",
              "Provides a leak-proof and durable connection.",
              "Maintains uniform pressure and water flow.",
              "Easy to install and remove without special tools.",
              "Helps efficient water distribution across crop rows.",
            ]}
          />

          {/* VIDHI PRO TAPE ENDCAP */}
          <ProductBlock
            image="/img/Eco-5.png"
            title="VIDHI PRO TAPE ENDCAP"
            model="/img/Model-24.png"
            points={[
              "Used to close the end of drip tape lines securely.",
              "Prevents water leakage and ensures proper sealing.",
              "Helps maintain uniform pressure within the drip line.",
              "Allows easy reopening for flushing and maintenance.",
              "Simple to install and remove without tools.",
              "Ensures efficient water management and prevents wastage.",
              "Made from durable, UV-resistant material.",
            ]}
          />

          {/* TAPE STARTER CONNECTOR */}
          <ProductBlock
            image="/img/Eco-6.png"
            title="Tape Starter Connector"
            model="/img/Model-57.png"
            points={[
              "Links sub-main pipelines with drip tape efficiently.",
              "Works with grommet seal to eliminate leakage.",
              "Manufactured from high-grade 100% material.",
              "Provides a secure and stable connection in the field.",
            ]}
          />

          {/* RUBBER GROMMET */}
          <ProductBlock
            image="/img/Drip-24.jpg"
            title="Rubber Grommet"
            model="/img/Model-2.png"
            points={[
              "Used with tape starter connector to attach drip tape.",
              "Ensures tight and leak-proof joint.",
              "Manufactured using 100% virgin raw material.",
              "Available in Natural Rubber, Nitrile, and EPDM.",
              "Provides strong sealing grip for reliable irrigation.",
            ]}
          />

          {/* TAPE TO TAPE CONNECTOR */}
          <ProductBlock
            image="/img/Eco-8.png"
            title="Tape to Tape Connector"
            model="/img/Model-58.png"
            points={[
              "Connects two ends of drip tape securely.",
              "Provides strong, leak-resistant sealing.",
              "Guarantees tight fitting without water dripping.",
              "Adhesive-free design for easy installation.",
            ]}
          />

          {/* TAPE END CAP */}
          <ProductBlock
            image="/img/Eco-9.png"
            title="Tape End Cap"
            model="/img/Model-59.png"
            points={[
              "Seals the tail end of drip tape effectively.",
              "Allows convenient flushing and cleaning.",
              "Quick opening and closing during maintenance.",
              "Manufactured using premium virgin material.",
              "Built for long-term reliable performance.",
            ]}
          />

          {/* TAPE VALVE CONNECTOR */}
          <ProductBlock
            image="/img/Eco-10.png"
            title="Tape Valve Connector"
            model="/img/Model-60.png"
            points={[
              "Helps regulate and control water flow.",
              "Provides tight and secure connection.",
              "Delivers firm, drip-free joint.",
              "No adhesive required for installation.",
            ]}
          />

          {/* LAY FLAT TO DRIP LINE */}
          <ProductBlock
            image="/img/Eco-11.png"
            title="Lay Flat to Drip Line Connector"
            model="/img/Model-61.png"
            points={[
              "Links lay flat pipe with drip line efficiently.",
              "Provides firm and secure connection.",
              "Guarantees drip-free joint.",
              "Installation without adhesive.",
            ]}
          />

          {/* LAY FLAT TO DRIP TAPE */}
          <ProductBlock
            image="/img/Eco-12.png"
            title="Lay Flat to Drip Tape Connector"
            model="/img/Model-62.png"
            points={[
              "Attaches lay flat pipe directly to drip tape.",
              "Offers secure and tight connection.",
              "Ensures strong drip-free joint.",
              "Quick installation without adhesive.",
            ]}
          />

          {/* LAY FLAT PUNCH */}
          <ProductBlock
            image="/img/Eco-13.png"
            title="Lay Flat Punch"
            model="/img/Model-21.png"
            points={[
              "Creates precise holes on lay flat pipes.",
              "Ensures clean openings for drip line or tape connection.",
            ]}
          />

          {/* PDF */}
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

/* 🔁 REUSABLE PRODUCT BLOCK */
const ProductBlock = ({ image, title, points, model }) => (
  <div className="row align-items-center mb-5">
    <div className="col-md-6">
      <img src={image} alt={title} className="img-fluid" />
    </div>
    <div className="col-md-6 mt-4">
      <h2 className="text-success">{title}</h2>
      <hr className="border-success border-3" />
      <ul className="text-primary">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
      <hr className="border-success" />
      {model && (
        <div className="text-center">
          <img src={model} alt="Model" className="img-fluid" />
        </div>
      )}
    </div>
  </div>
);

export default TapeFittings;
