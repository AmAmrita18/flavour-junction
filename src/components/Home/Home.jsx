import React from "react";
import Hero from "../Hero";
import SpiceSensations from "./SpiceSensations";
import ChooseFJ from "./ChooseFJ";
import Cultivated from "./Cultivated";
import Collections from "./Collections";
import Cta from "./Cta";
import CulinaryElegance from "./CulinaryElegance";


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
      <SpiceSensations  />
      <ChooseFJ/>
      <Cultivated/>
      <Collections/>
      <CulinaryElegance/>
      <Cta/>
    </div>
  );
};

export default Home;