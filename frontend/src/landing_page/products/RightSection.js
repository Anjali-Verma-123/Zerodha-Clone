import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <section className="container py-5">
      <div className="row align-items-center g-5">

        
        <div className="col-lg-6 col-md-12 order-2 order-lg-1">
          <h2 className="fw-bold mb-4">{productName}</h2>

          <p
            className="text-muted"
            style={{ lineHeight: "1.8", fontSize: "1.05rem" }}
          >
            {productDescription}
          </p>

          <a
            href={learnMore}
            className="text-decoration-none fw-semibold"
          >
            Learn More
            <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </a>
        </div>

      
        <div className="col-lg-6 col-md-12 text-center order-1 order-lg-2">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{
              maxWidth: "100%",
              borderRadius: "12px",
            }}
          />
        </div>

      </div>
    </section>
  );
}

export default RightSection;