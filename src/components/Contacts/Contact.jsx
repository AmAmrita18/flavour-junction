import React from "react";
import Hero from "../Hero";
import GetInTouch from "./GetInTouch";


const description1 = `Spice Talks - Reach Out to the Tastemakers at Flavour Junction`;

const button = { title: `Explore Now`, url: `/about` };
const heroImage = `/hero8.jpg`;

const Contact = () => {
  return (
    <div>
      <Hero
      description1={description1}
     
      button={button}
      heroImage={heroImage}
    />
    <GetInTouch/>
    </div>
    
  );
};

export default Contact;