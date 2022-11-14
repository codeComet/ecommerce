import React from "react";
import { urlFor } from "../lib/client";
import Link from "next/link";

const Product = ({ product: { name, image, details, price, slug } }) => {
  return (
    <div>
      <Link href={`/products/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image[0])}
            alt={name}
            style={{ maxWidth: "200px", maxHeight: "200px" }}
            className="product-image"
          />
          <h1 className="product-name">{name}</h1>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
