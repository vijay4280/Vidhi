const Facts = () => {
  return (
    <div
      className="container-fluid facts my-5 py-5"
      style={{
        backgroundImage: "url('/img/design-4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container py-5">
        <div className="row g-5">

          <div className="col-sm-6 col-lg-3 text-center">
            <h1 className="display-5 text-white">Happy Clients</h1>
            <span className="fs-5 fw-semi-bold text-light">
              Trusted Worldwide
            </span>
          </div>

          <div className="col-sm-6 col-lg-3 text-center">
            <h1 className="display-5 text-white">Projects Completed</h1>
            <span className="fs-5 fw-semi-bold text-light">
              Sustainable & Tailored Irrigation Solution
            </span>
          </div>

          <div className="col-sm-6 col-lg-3 text-center">
            <h1 className="display-5 text-white">Dedicated Experts</h1>
            <span className="fs-5 fw-semi-bold text-light">
              Skilled and Reliable Team
            </span>
          </div>

          <div className="col-sm-6 col-lg-3 text-center">
            <h1 className="display-5 text-white">Awards & Recognition</h1>
            <span className="fs-5 fw-semi-bold text-light">
              Excellence in Innovation
            </span>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Facts;
