import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />

      <div className="container">

        <div className="my-5">
          <LeftSection
            imageURL="media/images/kite.png"
            productName="Kite"
            productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
            tryDemo="#"
            learnMore="#"
            googlePlay="#"
            appStore="#"
          />
        </div>

        <div className="my-5">
          <RightSection
            imageURL="media/images/console.png"
            productName="Console"
            productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
            learnMore="#"
          />
        </div>

        <div className="my-5">
          <LeftSection
            imageURL="media/images/coin.png"
            productName="Coin"
            productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
            tryDemo="#"
            learnMore="#"
            googlePlay="#"
            appStore="#"
          />
        </div>

        <div className="my-5">
          <RightSection
            imageURL="media/images/kiteconnect.png"
            productName="Kite Connect API"
            productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our client base."
            learnMore="#"
          />
        </div>

        <div className="my-5">
          <LeftSection
            imageURL="media/images/varsity.png"
            productName="Varsity Mobile"
            productDescription="An easy-to-grasp collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-sized cards to help you learn on the go."
            tryDemo="#"
            learnMore="#"
            googlePlay="#"
            appStore="#"
          />
        </div>

      </div>

      <section className="container text-center py-5">
        <h2 className="fw-bold mb-3">
          Interested in our Technology?
        </h2>

        <p
          className="text-muted mx-auto"
          style={{ maxWidth: "700px", lineHeight: "1.8" }}
        >
          Learn how Zerodha builds fast, scalable and reliable financial
          products. Explore engineering blogs, architecture decisions and
          technology insights from the team.
        </p>

        <a
          href="#"
          className="text-decoration-none fw-semibold fs-5"
        >
          Visit Zerodha.tech
          <i className="fa-solid fa-arrow-right-long ms-2"></i>
        </a>
      </section>

      <Universe />
    </>
  );
}

export default ProductsPage;