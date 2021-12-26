import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

export default function ProductCard({ product, onAddToCart }) {
  const dispatch = useDispatch();
  const handleAddToCartClick = () => {
    dispatch(onAddToCart(product));
  };
  const { name, description, image, price } = product;
  return (
    <Card>
      <div className="card-wrapper">
        <img src={image} alt={name} className="card-image" />
        <div className="card-info">
          <h1 className="card-info__title">{name}</h1>
          <p className="card-info__desc">{description}</p>
        </div>
        <div className="card-value">
          <span className="card-value__rate">
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-half-fill"></i>
          </span>
          <h2 className="card-value__price">£{price.toFixed(2)}</h2>
        </div>
      </div>
      <div className="addtoCart">
        <button className="card-cta" onClick={handleAddToCartClick}>
          Add to cart
        </button>
      </div>
    </Card>
  );
}

const Card = styled.div`
  display: block;
  padding: 0.8em;
  border-radius: 5px;
  margin-bottom: 1em;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  .card-wrapper {
    display: flex;
    justify-content: space-between;
    .card-image {
      max-width: 35%;
    }
    .card-info {
      padding: 0 1em;
    }
    .card-info__title {
      font-size: 1.1rem;
      text-transform: capitalize;
    }
    .card-info__desc {
      font-size: 0.8rem;
    }
    .card-value {
      text-align: end;
    }
    .card-value__rate {
      i {
        margin-right: 0.3em;
        color: #ffbf35;
        font-size: 1.2em;
      }
    }
  }
  .addtoCart {
    display: flex;
    justify-content: flex-end;
    .card-cta {
      font-family: "Martel Sans", sans-serif;
      padding: 0.4em 4em;
      border-radius: 5px;
      cursor: pointer;
      border: none;
      background: #2a8cff;
      color: #fff;
      text-transform: uppercase;
      &:hover {
        background: #1f6abe;
      }
    }
  }
`;
