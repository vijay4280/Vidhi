

import ProductHeader from "../../../components/ProductHeader";

const PlainLateral = () => {
  return (
    <>
    {/* PRODUCT HEADER */}
      <ProductHeader
        title="Plain Lateral / Polytubes"
        bgImage="/img/drip-head-1.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Drip Irrigation", link: "/products/drip" },
          { label: "Plain Lateral / Polytubes" },
        ]}
      />

      {/* CONTENT */}
      <section className="container py-5">
        {/* SECTION TITLE */}
        <div className="text-center mb-5">
          <p className="fs-5 fw-bold text-primary">Drip Irrigation</p>
          <hr className="border-success" />
          <h1 className="display-5 text-primary mt-4">Drip Tubing</h1>
          <hr className="border-success" />
        </div>

        <div className="row align-items-center">
          {/* LEFT IMAGE */}
          <div className="col-md-6 mb-4">
            <img
              src="/img/Drip-1.jpg"
              className="img-fluid rounded shadow"
              alt="Plain Lateral Polytubes"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-6">
            <h2 className="text-success mb-3">
              Plain Lateral / Polytubes
            </h2>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li className="mt-2">
                Core lifeline of every efficient drip irrigation system
              </li>
              <li className="mt-2">
                Manufactured using 100% virgin raw materials
              </li>
              <li className="mt-2">
                Laser-etched markings for full production traceability
              </li>
              <li className="mt-2">
                UV stabilized to resist sunlight and environmental cracking
              </li>
              <li className="mt-2">
                Suitable for both surface & subsurface irrigation
              </li>
              <li className="mt-2">
                Red guideline ensures perfect alignment during installation
              </li>
              <li className="mt-2">
                Smooth inner surface ensures uniform water distribution
              </li>
              <li className="mt-2">
                Strong, reliable and long-lasting performance
              </li>
            </ul>

            <hr className="border-success" />

            <h3 className="text-success mt-4">Applications</h3>
            <p className="text-primary fw-bold">
              Ideal for row crops, vegetables, orchards, vineyards, fruit
              crops, sugarcane, floriculture, banana, cotton, chillies,
              greenhouses and landscape irrigation.
            </p>

            <hr className="border-success" />

            <div className="text-center">
              <img
                src="/img/drip-table-1.png"
                className="img-fluid my-3 rounded shadow-sm"
                alt="Drip Specification Table"
              />
            </div>

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
      </section>

     
    </>
  );
};

export default PlainLateral;
