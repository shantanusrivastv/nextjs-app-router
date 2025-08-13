"use client";

import { createContext, useState, useContext } from "react";


const ShoppingCartContext = createContext();

export default function ShoppingCartProvider ({children}){
	const[cart,SetCart] = useState([]);

	function addToCart(product){
		SetCart([...cart, product]);
	}



	return( 
		<ShoppingCartContext.Provider value={{cart,addToCart}}>
			{children}
		</ShoppingCartContext.Provider>
	)

}

export function useShoppingCart(){
	return useContext(ShoppingCartContext);
}