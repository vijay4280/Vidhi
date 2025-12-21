import { Link } from "react-router-dom";

const AboutSection = ({ years }) => {
  return (
   <div
      className="container-fluid py-4 px-3 px-lg-5 about-section"
      style={{ backgroundColor: "whitesmoke" }}
    >
      <div className="container">
        <div className="row g-5 align-items-end">

          {/* LEFT IMAGE */}
          <div className="col-lg-3 col-md-5 fade-in">
            <img
              className="img-fluid rounded "
              src="/img/Thank you vidhi.png"
              alt="About Vidhi Enterprises"
            />
          </div>

          {/* CENTER CONTENT */}
          <div className="col-lg-6 col-md-7 fade-in delay-2">
             <h1 className="display-1 text-success fw-bold">
              {years}+
            </h1>

            <p
              className="display-6 mb-4 text-success"
              style={{ fontWeight: 600 }}
            >
              Years of making Every Drop Count
            </p>

            <h5
              className="display-5 mb-3"
              style={{ color: "rgba(1, 1, 90, 0.668)", fontWeight: 700 }}
            >
              ‘We Make Every Drop Work Smarter’
            </h5>

            <p
              className="mb-2 text-success"
              style={{ fontWeight: 700 }}
            >
              “Helping you water better, grow stronger & make the most of every
              single drop”
            </p>

            <h6
              className="mb-1"
              style={{ color: "rgba(1, 1, 90, 0.668)", fontWeight: 700 }}
            >
              “Smart Irrigation Starts here — because every drop matters”
            </h6>

            <Link to="/products" className="btn btn-success py-3 px-4 mt-2">
              Explore More
            </Link>
          </div>

          {/* RIGHT FEATURES */}
          <div className="col-lg-3 col-md-12 fade-in delay-3">
            <div className="row g-5">

              {/* Feature 1 */}
              <div className="col-12 col-sm-6 col-lg-12">
                <div className="border-start ps-4">
                  <i className="fa fa-award fa-3x text-success mb-3"></i>
                  <h4 className="mb-3 text-success">Trusted Quality</h4>
                  <span style={{ color: "rgba(1, 1, 90, 0.668)" }}>
                    <b>
                      We are known for durability, innovation & customer trust
                    </b>
                  </span>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="col-12 col-sm-6 col-lg-12">
                <div className="border-start ps-4">
                  <i className="fa fa-users fa-3x text-success mb-3"></i>
                  <h4 className="mb-3 text-success">Dedicated Team</h4>
                  <span style={{ color: "rgba(1, 1, 90, 0.668)" }}>
                    <b>
                      From choosing the right component to after-sales support,
                      our experts are always here to help
                    </b>
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

  );
};

export default AboutSection;
