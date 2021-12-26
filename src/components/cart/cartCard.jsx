import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

function CartCard({ item, onQuantityChangeAction }) {
  const dispatch = useDispatch();
  const handleItemQuantityChange = (e) => {
    // use event delegation
    switch (e.target.id) {
      case "increment":
        dispatch(onQuantityChangeAction({ id: item.id, action: "increment" }));
        break;
      case "decrement":
        dispatch(onQuantityChangeAction({ id: item.id, action: "decrement" }));
        break;
      default:
        break;
    }
  };
  return (
    <CartItem>
      <img src={item.image} alt={item.name} className="cart-item__img" />
      <div className="cart-item__value">
        <h1 className="cart-item__title">{item.name}</h1>
        <div className="cart-item__quantity">
          <span>quantity: </span>
          <div className="qunatity-controls" onClick={handleItemQuantityChange}>
            <button className="decrement-button" id="decrement">
              -
            </button>
            <span className="quantity-value">{item.quantity}</span>
            <button className="increment-button" id="increment">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="price">
        {item.discount != 0 ? (
          <span className="cart-item__oldprice">
            £{(item.price * item.quantity).toFixed(2)}
          </span>
        ) : null}
        <span className="cart-item__price">£{item.paidPrice}</span>
      </div>
    </CartItem>
  );
}

export default React.memo(CartCard, (prevProps, nextProps) => {
  if (prevProps.item === nextProps.item) {
    return true;
  }
  return false; // props are not equal -> update the component
});

CartCard.propTypes = {
  item: PropTypes.object.isRequired,
  onQuantityChangeAction: PropTypes.func.isRequired,
};

const CartItem = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1em 0;
  border-bottom: 1px solid;
  .cart-item__img,
  .cart-item__value,
  .cart-item__price {
    align-self: center;
  }
  .cart-item__img {
    width: 113px;
    height: 113px;
    border-radius: 50%;
    border: 1px solid;
  }
  .cart-item__title {
    font-size: 1.2rem;
  }
  .price {
    align-self: center;
    text-align: center;
  }
  .cart-item__oldprice {
    display: block;
    color: red;
    text-decoration: line-through;
  }
  .cart-item__price,
  .cart-item__oldprice {
    font-size: 1.2em;
    font-weight: 700;
  }
  .cart-item__quantity {
    display: flex;
    .qunatity-controls {
      & > * {
        margin: auto 0.5em;
      }
      .decrement-button,
      .increment-button {
        border-radius: 50%;
        border: none;
        width: 22px;
        height: 22px;
        background-color: #fff;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
          rgba(0, 0, 0, 0.24) 0px 1px 2px;
        &:hover {
          background-color: #dfdfdf;
        }
      }
    }
  }
`;
