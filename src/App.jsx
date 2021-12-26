import React from "react";
import ProductPane from "./features/product/productPane";
import CartPane from "./features/cart/cartPane";
import Container from "./components/layout/container";
import FluidGrid from "./components/layout/fluidGrid";

export default function App() {
  return (
    <Container>
      <FluidGrid>
        <div className="product-pane">
          <h1>PRODUCTS</h1>
          <ProductPane />
        </div>
        <div className="cart-pane">
          <h1>CART</h1>
          <CartPane />
        </div>
      </FluidGrid>
    </Container>
  );
}
