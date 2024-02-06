import React from "react";
import Hero from "../Hero";


const description1 = `Embark on a Culinary Sojourn through India's Spice Tapestry at Flavour Junction`;

const button = { title: `Explore Now`, url: `#` };
const heroImage = `/hero6.jpg`;
const Home = () => {
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

export default Home;