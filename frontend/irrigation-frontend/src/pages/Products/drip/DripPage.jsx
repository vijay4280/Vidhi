import PageHeader from "../../../components/PageHeader";
import ProductCard from "../../../components/ProductCard";
import dripData from "./dripData";
import "../../../styles/products.css"

const DripPage = () => {
  return (
    <>
    
      {/* HEADER */}
      <PageHeader
        title="Drip Irrigation"
        bgImage="/img/Drip-header.png"
      />

      {/* PRODUCTS */}
      <div className="container-fluid py-5" style={{ backgroundColor: "rgb(203,221,203)" }}>
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
          <p className="fs-3 fw-bold text-primary">Drip Irrigation</p>
          <hr style={{ border: "4px solid darkgreen" }} />
          <h1 className="display-9 fs-9 text-success justify-content-left fw-bold">Products That We Offer For You</h1>
        </div>

     
        <div className="container-fluid px-5">
          <div className="row g-4">
            {dripData.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};


export default DripPage;
