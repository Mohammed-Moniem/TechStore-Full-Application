import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartTotals from "./CartTotals";
import CartList from "./CartList";

function Cart() {
  return (
    <>
      <section className="py-5">
        {/* title */}
        <div className="cntainer">
          <Title title="your cart items" center="ture" />
        </div>
        {/* cart columns */}
        <CartColumns />
        {/* cart list */}
        <CartList />
        {/* cart totlas */}
        <CartTotals />
      </section>
    </>
  );
}

export default Cart;
