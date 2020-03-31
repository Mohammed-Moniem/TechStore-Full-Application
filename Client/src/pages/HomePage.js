import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";
import Discount from "../components/HomePage/Discount";
export default function HomePage() {
  return (
    <>
      <Hero title="awesome gadgets">
        <Link to="/products" className="main-link" style={{ margin: "2rem" }}>
          our products
        </Link>
      </Hero>
      <Services />
      <Featured />
      <Discount />
    </>
  );
}
