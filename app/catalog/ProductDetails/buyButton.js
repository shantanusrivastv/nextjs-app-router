"use client";

import { useShoppingCart } from "@/context/shoppingCartContext";

export default function BuyButton({ product }) {
	const { addToCart } = useShoppingCart();

	return (
		<button onClick={() => addToCart(product)}>Buy </button>
	);
}