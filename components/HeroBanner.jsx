import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p>{heroBanner?.smallText}</p>
        <h3>{heroBanner?.midText}</h3>
        <img src={urlFor(heroBanner?.image)} alt="banner img" />
        <div>
          <Link href="#">
            <button>{heroBanner?.buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
