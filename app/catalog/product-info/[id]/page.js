"use client";
import React, { useEffect, useState } from 'react';
import { GetProducts } from '../../actions';

export default function ProductInfo({ params }) {
	const { id } = React.use(params)
	const [product, setProduct] = useState({});

	useEffect(() => {
		async function fetchProducts() {
			const products = await GetProducts();
			const product = products.find(p => p._id === id);
			setProduct(product);
		}
		fetchProducts();
	}, [])

	return (<h2>Product Info Page for {product.title}</h2>);
}