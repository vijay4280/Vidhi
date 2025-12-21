import PageHeader from "../../../components/PageHeader";
import ProductCard from "../../../components/ProductCard";
import vidhiKitData from "./vidhikitData";
import "../../../styles/products.css";

const VidhiKitPage = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <PageHeader
        title="Vidhi Kit"
        bgImage="/img/vidhikit-head.png"
      />

      {/* PRODUCT SECTION */}
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "rgb(203,221,203)" }}
      >
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
          <p className="fs-5 fw-bold text-primary">Vidhi Kit</p>
          <hr style={{ border: "2px solid darkgreen" }} />
          <h1 className="display-8">Products That We Offer For You</h1>
        </div>

        <div className="container mb-5">
          <div className="row mb-5" >
            {vidhiKitData.map((product, index) => (
               <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VidhiKitPage;
