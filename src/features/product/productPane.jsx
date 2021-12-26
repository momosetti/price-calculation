import React from "react";
import ProductCard from "../../components/product/productCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductData } from "./productSlice";
import { addProductToCart } from "../cart/cartSlice";
export default function ProductPane() {
  const products = useSelector((state) => state.product.productData);
  useDispatch()(fetchProductData());

  return products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      onAddToCart={addProductToCart}
    />
  ));
}
