import React from "react";
import { HeroBanner, Product, FooterBanner, NavBar } from "../components";
import { client } from "../lib/client";

const Home = ({ products, banners }) => {
  return (
    <div>
      <HeroBanner heroBanner={banners[0]} />
      {console.log(products)}

      <div className="products-heading">
        <h2>Best Selling watches</h2>
        <p>Modern slick looking smartwatches</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner />
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
