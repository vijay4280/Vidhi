import ProductHeader from "../../../components/ProductHeader";


const onlineEmitterData = {
  header: {
    title: "Online Emitters / Dripper NPC TurboKey",
    bgImage: "/img/drip-head-6.png",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Drip Irrigation", link: "/drip-irrigation" },
      { label: "Online Emitters / NPC TurboKey" },
    ],
  },

  overview: {
    category: "Drip Irrigation",
    heading: "Emitting Devices",
  },

  product: {
    title: "Online Emitters NPC TurboKey Drippers",
    imageMain: "/img/Drip-5.jpg",
    imageBottomLeft: "/img/Drip-6.jpg",
    imageTable: "/img/drip-table-13.png",
    imageModel: "/img/Model-33.png",

    features: [
      "Made from virgin Engineering Polymers & UV Stabilised.",
      "Suitable for 12 mm, 16 mm & 20 mm Plain Drip Laterals.",
      "Openable type and easy to maintain.",
      "Angular inlet for smooth water entry.",
      "Resistant to chemicals & fertilizers (fertigation safe).",
      "Compact and sturdy design ensures long life.",
      "Easy installation using punching tool.",
      "Available in 2 LPH (Yellow), 4 LPH (Green), 8 LPH (Red) and Black for all flow rates.",
    ],

    application:
      "Ideal for precise irrigation in orchards, vineyards, greenhouses, and landscape areas. Ensures uniform water distribution for vegetables, fruits, and closely spaced crops.",

    pdf: "/AM pdf.pdf",
  },
};

const OnlineEmitterTurboKey = () => {
  const { header, overview, product } = onlineEmitterData;

  return (
    <>
      {/* ✅ PRODUCT HEADER (FIXED AS YOU SAID) */}
      <ProductHeader
        title={header.title}
        bgImage={header.bgImage}
        breadcrumbs={header.breadcrumbs}
      />

      {/* CONTENT */}
      <section className="online-emitter-section">
        <div className="container">

          {/* SECTION TITLE */}
          <div className="section-title text-center">
            <p className="category">{overview.category}</p>
            <hr />
            <h2>{overview.heading}</h2>
            <hr />
          </div>

          {/* MAIN ROW */}
          <div className="row align-items-center mt-5">

            {/* IMAGE */}
            <div className="col-md-6">
              <img
                src={product.imageMain}
                alt={product.title}
                className="img-fluid main-image"
              />
            </div>

            {/* CONTENT */}
            <div className="col-md-6">
              <h3 className="product-title">{product.title}</h3>
              <hr className="green-line" />

              <ul className="feature-list">
                {product.features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <hr />

              <h4 className="application-title">Application</h4>
              <hr className="green-line" />
              <p className="application-text">{product.application}</p>
              <hr />
            </div>
          </div>

          {/* BOTTOM IMAGES */}
          <div className="row mt-5 align-items-center">
            <div className="col-md-6">
              <img
                src={product.imageBottomLeft}
                alt="Emitter Detail"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 text-center">
              <img src={product.imageTable} alt="Specification Table" className="img-fluid mb-3" />
              <img src={product.imageModel} alt="Model Info" className="img-fluid" />
            </div>
          </div>

          {/* PDF */}
          <div className="text-center mt-4">
            <a
              href={product.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn view-pdf-btn"
            >
              View PDF
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default OnlineEmitterTurboKey;
