import PageHeader from "../../../components/PageHeader";
import ProductCard from "../../../components/ProductCard";
import sprinklerData from "./sprinklerData";
import "../../../styles/products.css";

const SprinklerPage = () => {
  return (
    <>
      {/* HEADER */}
      <PageHeader
        title="Sprinkler Irrigation"
        bgImage="/img/C1.png"
      />

      {/* PRODUCTS */}
     
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "rgb(203,221,203)" }}
      >
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
          <p className="fs-5 fw-bold text-primary">Sprinkler Irrigation</p>
          <hr style={{ border: "2px solid darkgreen" }} />
          <h1 className="display-5">
            Products That We Offer For You
          </h1>
        </div>

        <div className="container">
          <div className="row g-4" >
            {sprinklerData.map((product, index) => (
              <ProductCard  key={index} {...product}  />
            ))}
          </div>
        </div>
      </div>

     
    </>
  );
};

export default SprinklerPage;
