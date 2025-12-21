// src/pages/products/landscape/LandscapePage.jsx

import PageHeader from "../../../components/PageHeader";
import ProductCard from "../../../components/ProductCard";
import landscapeData from "./landscapeData";
import "../../../styles/products.css";

const LandscapePage = () => {
  return (
    <>
      {/* HEADER */}
      <PageHeader
        title="Landscape Irrigation"
        bgImage="/img/12.png"
      />

      {/* PRODUCTS */}
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "rgb(203,221,203)" }}
      >
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
          <p className="fs-5 fw-bold text-primary">Landscape Irrigation</p>
          <hr style={{ border: "2px solid darkgreen" }} />
          <h1 className="display-5">Products That We Offer For You</h1>
        </div>

        <div className="container">
          <div className="row g-4">
            {landscapeData.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandscapePage;
