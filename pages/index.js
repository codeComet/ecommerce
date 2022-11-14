import React from "react";
import {
  HeroBanner,
  Product,
  FooterBanner,
  Navbar,
  Footer,
} from "../components";
import { client } from "../lib/client";

const Home = ({ products, banners }) => {
  return (
    <div>
      <Navbar />
      <HeroBanner heroBanner={banners[0]} />

      <div className="products-heading">
        <h2>Best Selling watches</h2>
        <p>Modern slick looking smartwatches</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      {console.log(banners)}

      <FooterBanner footerBanner={banners[0]} />
      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const banners = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      banners,
    },
  };
};

export default Home;
