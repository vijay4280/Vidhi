import { Link } from "react-router-dom";
import "../styles/products.css";
import "../styles/home.css"
import "../styles/common.css"


const products = [
  {
    title: "Drip Irrigation",
    desc: "Save water, grow smarter — drip irrigation delivers every drop with precision.",
    image: "/img/9.png",
    icon: "/img/4.png",
    link: "/products/drip"
  },
  {
    title: "Sprinkler Irrigation",
    desc: "From corners to center, sprinklers reach everywhere.",
    image: "/img/10.png",
    icon: "/img/5.png",
    link: "/products/sprinkler"
  },
  {
    title: "Rain Sprinkler (Rain Gun)",
    desc: "Bigger spray, better yield. Raingun irrigation boosts productivity.",
    image: "/img/11.png",
    icon: "/img/6.png",
    link: "/products/rain"
  },
  {
    title: "Landscape Irrigation",
    desc: "A greener view, a cooler space, a happier home.",
    image: "/img/12.png",
    icon: "/img/7.png",
    link: "/products/landscape"
  },
  {
    title: "Economical Irrigation",
    desc: "Save water, save money, and grow more.",
    image: "/img/13.png",
    icon: "/img/8.png",
    link: "/products/economical"
  },
  {
    title: "Vidhi Kit",
    desc: "All-in-one irrigation solution. Simple & powerful.",
    image: "/img/14.png",
    icon: "/img/15.png",
    link: "/products/vidhikit"
  }
];

const ProductsHome = () => {
  return (
    <div>
      
    <section className="container-fluid py-5">
      <div className="container">
        <div className="text-center mb-5">
          <p className="fs-5 fw-bold text-success">Our Products</p>
          <hr className="text-success text-center border-2"/>
          <h1 className="display-5 mb-5 fw-bold" style={{color: " #0F4229"}}>Products That We Offer For You</h1>
        </div>

        <div className="row g-4">
          {products.map((p, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="service-item rounded d-flex h-100">
                
                
                <div className="service-img rounded">
                  <img  className="img-fluid" src={p.image}  alt={p.title} />
                </div>

                <div className="service-text rounded p-5 text-center">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <Link to={p.link}>
                    <img className="img-fluid" src={p.icon} alt="icon" /></Link>
                  </div>

                  <h4 className="mb-3">{p.title}</h4>
                  <p className="mb-4"><b>{p.desc}</b></p>

                  <Link to={p.link} className="btn btn-sm">
                    <i className="fa fa-plus text-success me-2"></i>
                    Read More
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    </div>
  );
};

export default ProductsHome;
