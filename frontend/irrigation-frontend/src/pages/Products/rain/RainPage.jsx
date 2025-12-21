import PageHeader from "../../../components/PageHeader";
import ProductCard from "../../../components/ProductCard";
import rainData from "./rainData";
import "../../../styles/products.css";

const RainPage = () => {
  return (
    <>
      {/* HEADER */}
      <PageHeader
        title="Rain Sprinkler (Rain Gun)"
        bgImage="/img/11.png"
      />

      {/* PRODUCTS */}
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "rgb(203,221,203)" }}
      >
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
          <p className="fs-5 fw-bold text-primary">Rain Sprinkler</p>
          <hr style={{ border: "2px solid darkgreen" }} />
          <h1 className="display-5">Products That We Offer For You</h1>
        </div>

        <div className="container">
          <div className="row g-4">
            {rainData.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RainPage;
