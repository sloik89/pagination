import React from "react";
import phone from "./images/phone.svg";
import { useGlobalContext } from "./context";
const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payment infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes-from startyps to Fortune 500s-us
            Stripe's software and APIs to accept payments, send payouts, and
            manage thei business online
          </p>
          <button className="btn">Starts now</button>
        </article>
        <article className="hero-images">
          <img src={phone} alt="" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
