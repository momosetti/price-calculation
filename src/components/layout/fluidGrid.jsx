import React from "react";
import styled from "styled-components";

const FluidGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 1rem;
  padding: 1em 0;
  .product-pane,
  .cart-pane {
    padding: 2em 0;
    & > h1 {
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
  }
  .cart-pane {
    background-color: #eeeeee;
    padding: 1.5em;
  }
`;
export default function FluidGrid({ children }) {
  return <FluidGridWrapper>{children}</FluidGridWrapper>;
}
