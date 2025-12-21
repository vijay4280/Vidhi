import { Link } from "react-router-dom";
import { useEffect } from "react";
import Carousel from "../components/Carousel";
import WhatsApp from "../components/WhatsApp";
import WorldMap from "../components/WorldMap";
import NewsletterPopup from "../components/NewsletterPopup";
import useCounter from "../hooks/useCounter";
import ProductsHome from "../components/ProductHome";
import "../styles/home.css";
import "../styles/common.css"


import TopFeatures from "../components/home/TopFeatures";

import Facts from "../components/home/Facts";
import WhyChooseUs from "../components/home/WhyChooseUs";
import AboutSection from "../components/home/AboutSection";
import Contact from "./Contact";






const Home = () => {
  const years = useCounter(40);
  useEffect(() => {
    document.title = "Irrigation Solutions | Home";
    document
      .querySelector("meta[name='description']")
      ?.setAttribute("content", "Smart irrigation manufacturing solutions");
      
  }, []);

  return (
    <div className="mt-2">
      
    <Carousel /> 
    <TopFeatures/>
    <AboutSection years={years}  />
    <Facts/>
    <WhyChooseUs/>
    <ProductsHome/>
  


{/* CONTACT */}
<section className="contact">
<div className="container">
<h2>Drop Us a Message</h2>
<form>
<input placeholder="Name" />
<input placeholder="Email" />
<textarea placeholder="Message" />
<button>Submit</button>
</form>
</div>
</section>
     
      <WhatsApp />
      <NewsletterPopup />
      
    </div>
  );
};

export default Home;
