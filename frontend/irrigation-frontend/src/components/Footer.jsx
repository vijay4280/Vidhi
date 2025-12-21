import "../styles/footer.css";
const Footer = () => {
  return (
    <footer className="footer bg-dark text-light pt-5">
      <div className="container">
        <div className="row">

          <div className="col-md-4">
            <h4>Vidhi Enterprises</h4>
            <p>Making Every Drop Count 💧</p>
          </div>

          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/products" className="text-light">Products</a></li>
              <li><a href="/about" className="text-light">About Us</a></li>
              <li><a href="/contact" className="text-light">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Contact</h5>
            <p>📍 India</p>
            <p>📞 +91 XXXXXXXX</p>
          </div>

        </div>

        <hr />
        <p className="text-center mb-0">
          © {new Date().getFullYear()} Vidhi Enterprises. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
