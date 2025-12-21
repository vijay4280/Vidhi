const ProductCard = ({ image, title, items }) => {
  return (
    <div className="col-sm-4 product-card">
      <div className="card h-100">
        <div className="card-body text-center justify-content-Between">
          <img src={image} alt={title} style={{ width: "auto", height: "auto" }} />
          <h2 className="mt-5 text-success justify-content-center">{title}</h2>

          <ul className="list-unstyled mt-4 text-start justify-content-center text-decoration-none  ">
            {items.map((item, index) => (
              <li key={index}>
                <a className="g-5"  href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
