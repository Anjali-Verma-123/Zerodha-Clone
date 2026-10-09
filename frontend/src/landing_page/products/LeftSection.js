import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <section className="container py-5">
      <div className="row align-items-center gy-5">

        
        <div className="col-lg-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

      
        <div className="col-lg-6">

          <h2 className="fw-bold mb-4">
            {productName}
          </h2>

          <p
            className="text-muted mb-4"
            style={{ lineHeight: "1.8" }}
          >
            {productDescription}
          </p>

          
          <div className="mb-4">

            <a
              href={tryDemo}
              className="text-decoration-none fw-semibold me-4"
            >
              Try Demo{" "}
              <i className="fa-solid fa-arrow-right-long ms-1"></i>
            </a>

            <a
              href={learnMore}
              className="text-decoration-none fw-semibold"
            >
              Learn More{" "}
              <i className="fa-solid fa-arrow-right-long ms-1"></i>
            </a>

          </div>

          
          <div className="d-flex flex-wrap gap-3">

            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="img-fluid"
                style={{ height: "50px" }}
              />
            </a>

            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                className="img-fluid"
                style={{ height: "50px" }}
              />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default LeftSection;