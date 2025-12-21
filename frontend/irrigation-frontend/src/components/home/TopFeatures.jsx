const TopFeatures = () => {
  return (
    <div className="container-fluid top-feature py-5 pt-lg-0">
      <div className="container py-5 pt-lg-0">
        <div className="row gx-0">

          {[
            {
              img: "/img/few Logo.png",
              title: "100+ Reliable Products for Small & Large Farms",
              desc: "Builds instant credibility and trust"
            },
            {
              img: "/img/2.png",
              title: "Quality You Can Rely On",
              desc: "Simple, strong, and customer-focused"
            },
            {
              img: "/img/3.png",
              title: "Innovation Meets Integrity",
              desc: "Modern, forward-thinking values with honesty"
            }
          ].map((item, i) => (
            <div className="col-lg-4" key={i}>
              <div className="bg-white shadow d-flex align-items-center h-100 px-5 feature-box">
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="ps-3">
                    <h4 className="text-primary">{item.title}</h4>
                    <span style={{color: 'rgba(1, 1, 90, 0.668)'}} ><b >{item.desc}</b></span>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default TopFeatures;
