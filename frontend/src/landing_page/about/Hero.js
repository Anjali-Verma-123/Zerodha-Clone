import React from "react";

function Hero() {
  return (
    <div className="container py-5">

  

      <div className="row justify-content-center text-center mb-5">

        <div className="col-lg-10">

          <h1 className="display-6 fw-bold">
            We pioneered the discount broking model in India.
            <br className="d-none d-md-block" />
            Now, we are breaking ground with technology.
          </h1>

        </div>

      </div>

      

      <div className="row border-top pt-5">

        <div className="col-lg-6 col-md-12 mb-4">

          <p className="about-text">
            We kick-started operations on 15 August 2010 with the goal of
            breaking all barriers that traders and investors faced in India in
            terms of cost, support, and technology. The name Zerodha combines
            "Zero" and the Sanskrit word "Rodha", meaning barrier.
          </p>

          <p className="about-text">
            Today, our transparent pricing model and in-house technology have
            made Zerodha the largest stock broker in India.
          </p>

          <p className="about-text">
            More than 1.6 crore investors place billions of orders every year
            using our investment platforms, contributing over 15% of India's
            retail trading volume.
          </p>

        </div>

        <div className="col-lg-6 col-md-12">

          <p className="about-text">
            Along with our products, we run several educational and community
            initiatives that help investors become financially aware.
          </p>

          <p className="about-text">
            <a
              href="#"
              className="text-decoration-none fw-semibold"
            >
              Rainmatter
            </a>{" "}
            is our fintech fund and incubator that supports innovative startups
            working to strengthen India's financial ecosystem.
          </p>

          <p className="about-text">
            We continue to innovate every day. Read our latest updates, explore
            our blog, follow media coverage, and discover the philosophy behind
            our products and business.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Hero;