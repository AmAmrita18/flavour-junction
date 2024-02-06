import React from "react";
import Hero from "../Hero";
import Heritage from "./Heritage";
import Sustainability from "./Sustainability";
import CtaAbout from "./CtaAbout";


const description1 = `Unveiling the Essence of Indian Spice Mastery at Flavour Junction`;

const button = { title: `Explore Now`, url: `/about` };
const heroImage = `/hero7.jpg`;

const About = () => {
  return (
    <div className="w-full">
      <Hero
        description1={description1}
        button={button}
        heroImage={heroImage}
      />
      <Heritage/>
      <Sustainability/>
      <CtaAbout/>
    </div>
  );
};

export default About;