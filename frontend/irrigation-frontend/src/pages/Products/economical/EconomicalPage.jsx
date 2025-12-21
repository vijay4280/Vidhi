import PageHeader from "../../../components/PageHeader";
import ProductCard from "../../../components/ProductCard";
import economicalData from "./economicalData";
import "../../../styles/products.css";

const EconomicalPage = () => {
  return (
    <>
      {/* HEADER */}
      <PageHeader
        title="Economical Irrigation"
        bgImage="/img/head-eco.png"
      />

      {/* PRODUCTS */}
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "rgb(203,221,203)" }}
      >
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
          <p className="fs-5 fw-bold text-primary">Economical Irrigation</p>
          <hr style={{ border: "2px solid darkgreen" }} />
          <h1 className="display-5">Products That We Offer For You</h1>
        </div>

        <div className="container">
          <div className="row g-4">
            {economicalData.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EconomicalPage;
