import React from "react";
import Product from "../Product";
import { Link } from "react-router-dom";
import Title from "../Title";
import { ProductConsumer } from "../../context";

function Discount() {
  return (
    <section className="py-5">
      <div className="container">
        {/* title */}
        <Title title="discount products" center="true" />
        {/* products */}
        <div className="row my-5">
          <ProductConsumer>
            {value => {
              const { discountProducts } = value;

              return discountProducts.map(product => (
                <Product key={product.id} product={product} />
              ));
            }}
          </ProductConsumer>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <Link to="/products" className="main-link">
              our products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discount;
