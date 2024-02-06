import React from "react";
import Hero from "../Hero";


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
      
    </div>
  );
};

export default About;