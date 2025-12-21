import ProductHeader from "../../../components/ProductHeader";
import "../../../styles/products.css"
const Cylindrical = () => {
  return (
    <>
      {/* 🔁 REUSABLE PRODUCT HEADER */}
      <ProductHeader 
        bgImage="/img/drip-head-2.png"
        title="Cylindrical Dripline/ Emitting Pipe/ Inline Drip Tube - (PC & NON-PC) "
        subtitle="Cylindrical Dripline/ Emitting Pipe/ Inline Drip Tube - (PC & NON-PC)"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Drip Irrigation", link: "/products/drip" },
          { label: "Cylindrical Dripline/ Emitting Pipe/ Inline Drip Tube - (PC & NON-PC)", active: true },
        ]}
      />

      {/* CONTENT SECTION */}
      <section className="container py-5">
        <div
          className="text-center mb-5"
          style={{ maxWidth: "500px", margin: "0 auto" }}
        >
          <p className="fs-5 fw-bold text-success">Drip Irrigation</p>
          <hr className="border-success" />
          <h1 className="display-5 text-primary">Drip Tubing</h1>
          <hr className="border-success" />
        </div>

        <div className="row align-items-start mt-5">
          {/* LEFT IMAGE */}
          <div className="col-md-6 mb-4">
            <img
              src="/img/Drip-2.jpg"
              alt="Cylindrical Dripline"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-6">
            <h2 className="text-success mb-3">
              Cylindrical Dripline / Emitting Pipe / Inline Drip Tube
              <br />
              PC & NON PC
            </h2>
            <hr className="border-success" />

            <ul className="text-primary fw-semibold">
              <li className="mt-2">
                Maintains uniform irrigation on uneven terrain and long laterals
              </li>
              <li className="mt-2">
                UV-resistant high-quality raw material for long outdoor life
              </li>
              <li className="mt-2">
                Compatible with fertigation and agro-chemicals
              </li>
              <li className="mt-2">Made from 100% virgin raw material</li>
              <li className="mt-2">Discharge range from 1 LPH to 8 LPH</li>
              <li className="mt-2">
                Excellent coefficient of variation (&lt; 5%)
              </li>
              <li className="mt-2">
                2 / 4 outlet options for uniform water distribution
              </li>
              <li className="mt-2">
                Clog-resistant wide flow path design
              </li>
              <li className="mt-2">
                Emitter spacing available from 20 cm onwards
              </li>
            </ul>

            <hr className="border-success mt-4" />

            <h3 className="text-success mt-4">Applications</h3>
            <hr className="border-success" />
            <p className="text-primary fw-bold">
              Ideal for row crops, vegetables, orchards, vineyards, fruit crops,
              sugarcane, floriculture, banana, cotton, chillies, greenhouses and
              landscape irrigation.
            </p>
          </div>
        </div>

        {/* TABLE IMAGES */}
        <div className="row mt-5">
          <div className="col-md-6"></div>
          <div className="col-md-6 text-center">
            {["2", "3", "4", "5", "6"].map((n) => (
              <img
                key={n}
                src={`/img/drip-table-${n}.png`}
                alt={`Drip Table ${n}`}
                className="img-fluid mb-4"
              />
            ))}
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
            View PDF
          </a>
        </div>
      </section>
    </>
  );
};

export default Cylindrical;
