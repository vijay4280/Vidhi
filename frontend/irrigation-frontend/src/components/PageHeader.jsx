import { Link } from "react-router-dom";
import "../styles/productheader.css";

const PageHeader = ({ title, bgImage }) => {
  return (
  <div style={{ backgroundColor: "rgb(167, 199, 167)" }}>
    
    <div
      className="container-fluid page-header py-5 mb-5 mt-2"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
    
      <div className="container text-center py-5">
        <h2 className="display-6 text-success mb-4">{title}</h2>

        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center text-primary fw-bold">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/products">Products</Link>
            </li>
            <li className="breadcrumb-item active">{title}</li>
          </ol>
        </nav>
      </div>
    </div>
      </div>
  );
};


export default PageHeader;
