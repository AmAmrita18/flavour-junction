import React from "react";
import Hero from "../Hero";


const description1 = `Savor the Richness of India's Spice Heritage with Flavour Junction's Collection`;

const button = { title: `Explore Now`, url: `/about` };
const heroImage = `/hero5.jpg`;

const Products = () => {
  return (
    <div className="w-full">
      <Hero
        description1={description1}
        button={button}
        heroImage={heroImage}
      />
      
    </div>
  );
};

export default Products;