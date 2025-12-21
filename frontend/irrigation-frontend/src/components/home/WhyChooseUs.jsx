const WhyChooseUs = () => {
  return (
    <section
      className="container-fluid py-5"
      style={{ backgroundColor: "whitesmoke" }}
    >
      <div className="container">
        <div className="row g-5 align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <p className="fs-5 fw-bold text-success">Why Choose Us!</p>

            <h1 className="display-5 mb-4" style={{ color:  "darkgreen", fontWeight: "bolder"}}>
              Few Reasons Why People Choose Us!
            </h1>

            <p
              className="mb-4 "
              style={{
                color: "rgba(1, 1, 90, 0.668)",
                fontWeight: "bolder",
              }}
            >
              Every product undergoes strict quality checks and is manufactured
              to meet domestic and export standards, ensuring long-lasting
              performance trusted by farmers and importers alike.
            </p>

            <a href="/about" className="btn btn-success py-3 px-4">
              Explore More
            </a>
          </div>

          {/* RIGHT FEATURES */}
          <div className="col-lg-6">
            <div className="row g-4 align-items-center">

              {/* LEFT COLUMN */}
              <div className="col-md-6">
                <div className="row g-4">

                  <div className="col-12">
                    <div
                      className="text-center rounded py-5 px-4"
                      style={{ boxShadow: "0 0 45px rgba(0,0,0,.08)" }}
                    >
                      <div
                        className="btn-square bg-light rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                        style={{ width: "90px", height: "90px" }}
                      >
                        <i className="fa fa-check fa-3x text-white"></i>
                      </div>
                      <h4 className="mb-0">100% Satisfaction</h4>
                    </div>
                  </div>

                  <div className="col-12">
                    <div
                      className="text-center rounded py-5 px-4"
                      style={{ boxShadow: "0 0 45px rgba(0,0,0,.08)" }}
                    >
                      <div
                        className="btn-square bg-light rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                        style={{ width: "90px", height: "90px" }}
                      >
                        <i className="fa fa-users fa-3x text-white"></i>
                      </div>
                      <h4 className="mb-0">Dedicated Team</h4>
                    </div>
                  </div>

                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="col-md-6">
                <div
                  className="text-center rounded py-5 px-4"
                  style={{ boxShadow: "0 0 45px rgba(0,0,0,.08)" }}
                >
                  <div
                    className="btn-square bg-light rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                    style={{ width: "90px", height: "90px" }}
                  >
                    <i className="fa fa-tools fa-3x text-white"></i>
                  </div>
                  <h4 className="mb-0">Modern Equipment</h4>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
 
  );
};

export default WhyChooseUs;
