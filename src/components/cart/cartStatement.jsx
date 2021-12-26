import React from "react";
import styled from "styled-components";
import PropType from "prop-types";
import { calculateStatememnt } from "../../utils/helpers/discountCalculation";

const CartStatement = ({ cartItems }) => {
  const { subTotal, discount, total } = calculateStatememnt(cartItems);
  return (
    <CartStatementWrapper>
      <div className="cart-subtotal">
        <div className="cart-title">Subtotal</div>
        <div className="cart-value">£{subTotal.toFixed(2)}</div>
      </div>
      <div className="cart-discount">
        <div className="cart-title">Discount</div>
        <div className="cart-value">£{discount.toFixed(2)}</div>
      </div>
      <div className="cart-total">
        <div className="cart-title">Total</div>
        <div className="cart-value">£{total.toFixed(2)}</div>
      </div>
    </CartStatementWrapper>
  );
};

export default React.memo(CartStatement, (prevProps, nextProps) => {
  if (prevProps.cartItems === nextProps.cartItems) {
    return true;
  }
  return false;
});

CartStatement.propTypes = {
  cartItems: PropType.arrayOf(PropType.object).isRequired,
};

const CartStatementWrapper = styled.div`
  float: right;
  text-align: end;
  padding: 1em 0;
  font-weight: 700;
  & > * {
    margin-bottom: 0.5em;
  }
  .cart-title {
    color: #5e5e5e;
  }
`;
