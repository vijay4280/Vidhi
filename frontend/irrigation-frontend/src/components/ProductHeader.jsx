import React from "react";
import { Link } from "react-router-dom";
import "../styles/productheader.css"

const ProductHeader = ({ title, bgImage, breadcrumbs = [] }) => {
  return (
    <div
      className="container-fluid page-header py-5 mb-5 mt-2"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: "1",
      }}
    >
      <div className="container text-center py-5">
        {/* TITLE */}
        <h1 className="display-6 text-success justify-content-center ">{title}</h1>

        {/* ✅ BREADCRUMB */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center mb-0 fw-bold">
            {breadcrumbs.map((item, index) => (
              <li
                key={index}
                className={`breadcrumb-item ${
                  index === breadcrumbs.length - 1 ? "active" : ""
                }`}
                aria-current={
                  index === breadcrumbs.length - 1 ? "page" : undefined
                }
              >
                {item.link ? (
                  <Link to={item.link}>{item.label}</Link>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default ProductHeader;
