import React from "react";
import { HeroBanner, Product, FooterBanner, NavBar } from "../components";
import { client } from "../lib/client";

const Home = ({ products, banners }) => {
  return (
    <div>
      {console.log(banners)}
      <NavBar />
      <HeroBanner heroBanner={banners[0]} />
      <Product />
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
