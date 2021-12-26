import React from "react";
import CartCard from "../../components/cart/cartCard";
import CartStatement from "../../components/cart/cartStatement";
import { useSelector } from "react-redux";
import { updateItemQuantityandPrices } from "../../features/cart/cartSlice";

export default function CartPane() {
  const cartItems = useSelector((state) => state.cart.cart);
  if (!cartItems.length) return <p> No item added to the cart!</p>;
  return (
    <React.Fragment>
      {cartItems.map((item) => (
        <CartCard
          key={item.id}
          item={item}
          onQuantityChangeAction={updateItemQuantityandPrices}
        />
      ))}
      <CartStatement cartItems={cartItems} />
    </React.Fragment>
  );
}
